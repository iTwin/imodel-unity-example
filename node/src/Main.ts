/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { ExportGraphicsInfo, IModelHost, IModelDb, ECSqlStatement, Texture, ViewDefinition3d, GeometricElement } from "@bentley/imodeljs-backend";
import { Id64Array, DbResult, Logger, LogLevel } from "@bentley/bentleyjs-core";
import { Angle } from "@bentley/geometry-core";
import { IExportMeshesReply, IElementTooltipReply, ITextureReply, IProjectExtentsReply,
  ICameraViewsReply, IReplyWrapper, ReplyWrapper, RequestWrapper } from "./IModelRpc_pb";
import { IModelSelectorData, launchIModelSelector } from "@bentley/imodel-selector";
import { AccessToken, AuthorizedClientRequestContext, Config } from "@bentley/imodeljs-clients";
import setupEnv from "./configuration";
import * as ws from "ws";
import * as yargs from "yargs";

let iModel: IModelDb;

const LOG_CATEGORY = "imodel-unity-example";

const logTrace = (msg: string) => Logger.logTrace(LOG_CATEGORY, msg);
const logInfo = (msg: string) => Logger.logInfo(LOG_CATEGORY, msg);
const logError = (msg: string) => Logger.logError(LOG_CATEGORY, msg);
const logErrorObject = (error: Error) => logError(`${error.message}\n${error.stack}`);

function encodeReply(requestId: number, reply: IReplyWrapper): Uint8Array {
  reply.requestId = requestId;
  return ReplyWrapper.encode(ReplyWrapper.create(reply)).finish();
}

function createMeshReply(info: ExportGraphicsInfo, requestId: number): Uint8Array {
  const indices = info.mesh.indices;
  const points = info.mesh.points;
  const normals = info.mesh.normals;
  const params = info.mesh.params;
  const byteCount = indices.byteLength + points.byteLength + normals.byteLength + params.byteLength;
  const meshData: Buffer = Buffer.allocUnsafe(byteCount);

  let offset = 0;
  Buffer.from(indices.buffer).copy(meshData, offset); offset += indices.byteLength;
  Buffer.from(points.buffer).copy(meshData, offset); offset += points.byteLength;
  Buffer.from(normals.buffer).copy(meshData, offset); offset += normals.byteLength;
  Buffer.from(params.buffer).copy(meshData, offset);

  const exportMeshesReply: IExportMeshesReply = {
    elementId: info.elementId,
    color: info.color,
    indexCount: indices.length,
    vertexCount: points.length / 3,
    meshData,
  };
  if (info.textureId) exportMeshesReply.textureId = info.textureId;

  return encodeReply(requestId, { exportMeshesReply, requestHasMoreReplies: true });
}

function handleExportMeshesRequest(socket: ws, wrapper: RequestWrapper) {
  const request = wrapper.exportMeshesRequest!;
  if (!request.elementIds) { logError("ExportMeshesRequest missing elementIds"); return; }
  if (!request.chordTol) { logError("ExportMeshesRequest missing chordTol"); return; }

  const cachedGraphics: ExportGraphicsInfo[] = [];
  iModel.exportGraphics({
    onGraphics: (info) => cachedGraphics.push(info),
    elementIdArray: request.elementIds,
    chordTol: request.chordTol,
    angleTol: Angle.degreesToRadians(45),
  });

  for (const info of cachedGraphics)
    socket.send(createMeshReply(info, wrapper.requestId));

  // Empty reply finishes stream
  socket.send(encodeReply(wrapper.requestId, { exportMeshesReply: {} }));
}

function handleTooltipRequest(socket: ws, wrapper: RequestWrapper) {
  const request = wrapper.elementTooltipRequest!;
  if (!request.elementId) { logError("ElementTooltipRequest missing elementId"); return; }
  const element = iModel.elements.getElement<GeometricElement>(request.elementId);
  if (!element) { logError(`Could not load element ${request.elementId}`); return; }

  const elementTooltipReply: IElementTooltipReply = {
    elementId: request.elementId,
    classLabel: element.className,
    categoryLabel: iModel.elements.getElement(element.category).getDisplayLabel(),
    modelLabel: iModel.elements.getElement(element.model).getDisplayLabel(),
  };
  socket.send(encodeReply(wrapper.requestId, { elementTooltipReply }));
}

function handleTextureRequest(socket: ws, wrapper: RequestWrapper) {
  const request = wrapper.textureRequest!;
  if (!request.textureId) { logError("TextureRequest missing textureId"); return; }
  const texture = iModel.elements.getElement(request.textureId) as Texture;
  if (!texture) { logError(`Could not load texture ${request.textureId}`); return; }

  const textureReply: ITextureReply = {
    textureId: request.textureId,
    textureData: Buffer.from(texture.data, "base64"),
  };
  socket.send(encodeReply(wrapper.requestId, { textureReply }));
}

function handleProjectExtentsRequest(socket: ws, wrapper: RequestWrapper) {
  const extents = iModel.projectExtents;
  const projectExtentsReply: IProjectExtentsReply = {
    minX: extents.low.x,  minY: extents.low.y,  minZ: extents.low.z,
    maxX: extents.high.x, maxY: extents.high.y, maxZ: extents.high.z,
  };
  socket.send(encodeReply(wrapper.requestId, { projectExtentsReply }));
}

function handleSelectElementIdsRequest(socket: ws, wrapper: RequestWrapper) {
  const request = wrapper.selectElementIdsRequest!;
  if (!request.selectFilter) { logError("SelectElementIdsRequest missing selectFilter"); return; }

  const sql = "SELECT ECInstanceId " + request.selectFilter;
  const elementIds: Id64Array = [];
  iModel.withPreparedStatement(sql, (stmt: ECSqlStatement) => {
    while (stmt.step() === DbResult.BE_SQLITE_ROW)
      elementIds.push(stmt.getValue(0).getId());
  });

  logTrace(`Selected ${elementIds.length} elements`);
  socket.send(encodeReply(wrapper.requestId, { selectElementIdsReply: { elementIds } }));
}

function createCameraViewsReply(viewElement: ViewDefinition3d, requestId: number): Uint8Array {
  const eyePoint = viewElement.camera.eye;
  const cameraViewsReply: ICameraViewsReply = {
    displayLabel: viewElement.getDisplayLabel(),
    yaw: viewElement.angles.yaw.degrees,
    pitch: viewElement.angles.pitch.degrees,
    roll: viewElement.angles.roll.degrees,
    eyePointX: eyePoint.x,
    eyePointY: eyePoint.y,
    eyePointZ: eyePoint.z,
  };

  return encodeReply(requestId, { cameraViewsReply, requestHasMoreReplies: true });
}

function handleCameraViewsRequest(socket: ws, wrapper: RequestWrapper) {
  const sql = "SELECT ECInstanceId FROM bis.ViewDefinition3d";
  iModel.withPreparedStatement(sql, (stmt: ECSqlStatement) => {
    while (stmt.step() === DbResult.BE_SQLITE_ROW) {
      const id = stmt.getValue(0).getId();
      const viewElement = iModel.elements.getElement(id) as ViewDefinition3d;
      if (viewElement && viewElement.cameraOn)
        socket.send(createCameraViewsReply(viewElement, wrapper.requestId));
    }
  });

  // Empty reply finishes stream
  socket.send(encodeReply(wrapper.requestId, { cameraViewsReply: {} }));
}

type SocketRequestHandler = (socket: ws, wrapper: RequestWrapper) => void;
function getSocketRequestHandler(wrapper: RequestWrapper): SocketRequestHandler | undefined {
  switch (wrapper.msg) {
    case "selectElementIdsRequest": return handleSelectElementIdsRequest;
    case "exportMeshesRequest": return handleExportMeshesRequest;
    case "textureRequest": return handleTextureRequest;
    case "elementTooltipRequest": return handleTooltipRequest;
    case "projectExtentsRequest": return handleProjectExtentsRequest;
    case "cameraViewsRequest": return handleCameraViewsRequest;
    default: logError(`Unhandled request type: ${wrapper.msg}`); return undefined;
  }
}

const onSocketMessage = (socket: ws) => (data: ws.Data) => {
  if (!Buffer.isBuffer(data)) { logError("Non-buffer data in onSocketMessage"); return; }
  const wrapper = RequestWrapper.decode(data);
  logTrace(`${JSON.stringify(wrapper)}`);
  const handler = getSocketRequestHandler(wrapper);
  if (handler) handler(socket, wrapper);
};

function onSocketConnection(socket: ws) {
  logInfo("User connected");
  socket.on("message", onSocketMessage(socket));
  socket.on("close", (code: number, reason: string) => logInfo(`User disconnected, Code ${code} ${reason}`));
  socket.on("error", logErrorObject);
}

async function startServer(iModelName: string) {
  IModelHost.startup();
  Logger.initializeToConsole();
  Logger.setLevelDefault(LogLevel.Warning);
  Logger.setLevel(LOG_CATEGORY, LogLevel.Trace);

  if (iModelName) {
    iModel = IModelDb.openSnapshot(iModelName);
    logInfo(`Opened ${iModelName} successfully.`);
  } else {
    const clientId = Config.App.get("imjs_client_id");
    const scope = Config.App.get("imjs_scope");
    const imodelSelectorData: IModelSelectorData | undefined = await launchIModelSelector({client_id: clientId, scope});
    if (!imodelSelectorData) {
      logError("Login failed");
      return;
    }
    const accessToken: AccessToken | undefined = await imodelSelectorData.getAccessToken();
    if (!accessToken) {
      logError("AccessToken acquisition failed");
      return;
    }
    const reqContext = new AuthorizedClientRequestContext(accessToken);
    iModel = await IModelDb.open(reqContext, imodelSelectorData.contextId!, imodelSelectorData.imodelId!);
    logInfo(`Opened iModel successfully.`);
  }

  const serverPort = 3005; // Must match EntryPoint.cs
  const server = new ws.Server({ port: serverPort });
  server.on("listening", () => logInfo(`Listening on ws://localhost:${serverPort}`));
  server.on("error", logErrorObject);
  server.on("connection", onSocketConnection);
}

yargs.usage("Launch an iModel.js server to provide data over a web socket.");
yargs.command("[input]", "The input BIM");
interface UnityBackendArgs { input: string; }
const args = yargs.parse() as yargs.Arguments<UnityBackendArgs>;

// setup environment
setupEnv();

// tslint:disable-next-line: no-floating-promises
startServer(args.input);
