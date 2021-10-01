/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import * as ws from 'ws';

import { assert, ClientRequestContext, DbResult, Id64Array, Logger } from '@bentley/bentleyjs-core';
import { Angle } from '@bentley/geometry-core';
import {
    ECSqlStatement, ExportGraphicsInfo, GeometricElement3d, IModelDb, Texture, ViewDefinition3d
} from '@bentley/imodeljs-backend';
import { Presentation } from '@bentley/presentation-backend';

import {
    ICameraViewsReply, IElementPropertiesReplyEntry, IElementTooltipReply, IExportMeshesReply,
    IProjectExtentsReply, IReplyWrapper, ITextureReply, ReplyWrapper, RequestWrapper
} from './IModelRpc_pb';
import { APP_LOGGER_CATEGORY } from './Main';
import { ElementProperties, ElementPropertiesItem } from '@bentley/presentation-common';

type ProtobufRpcRequestHandler = (socket: ws, iModel: IModelDb, wrapper: RequestWrapper) => void;

export function startProtobufRpcServer(iModel: IModelDb) {
  const port = 3005; // Must match MainLoop.cs
  const webSocketServer = new ws.Server({ port });
  webSocketServer.on("listening", () => Logger.logInfo(APP_LOGGER_CATEGORY, `Listening on ws://localhost:${port}`));
  webSocketServer.on("error", (error) => Logger.logError(APP_LOGGER_CATEGORY, `${error.message}\n${error.stack}`));

  webSocketServer.on("connection", (socket: ws) => {
    Logger.logInfo(APP_LOGGER_CATEGORY, "User connected");
    socket.on("message", onSocketMessage(socket, iModel));
    socket.on("close", (code: number, reason: string) => Logger.logInfo(APP_LOGGER_CATEGORY, `User disconnected, Code ${code} ${reason}`));
    socket.on("error", (error) => Logger.logError(APP_LOGGER_CATEGORY, `${error.message}\n${error.stack}`));
  });
}

const protobufRpcRequestHandlers: { [requestName: string]: ProtobufRpcRequestHandler } = {
  selectElementIdsRequest: handleSelectElementIdsRequest,
  exportMeshesRequest: handleExportMeshesRequest,
  textureRequest: handleTextureRequest,
  elementTooltipRequest: handleElementTooltipRequest,
  projectExtentsRequest: handleProjectExtentsRequest,
  cameraViewsRequest: handleCameraViewsRequest,
  elementPropertiesRequest: handleElementPropertiesRequest,
};

const onSocketMessage = (socket: ws, iModel: IModelDb) => (data: ws.Data) => {
  if (!Buffer.isBuffer(data)) {
    Logger.logError(APP_LOGGER_CATEGORY, "Non-buffer data in onSocketMessage");
    return;
  }

  const wrapper = RequestWrapper.decode(data);
  Logger.logTrace(APP_LOGGER_CATEGORY, `${JSON.stringify(wrapper)}`);
  if (!wrapper.msg) {
    Logger.logError(APP_LOGGER_CATEGORY, "RequestWrapper.msg is undefined");
    return;
  }
  if (!protobufRpcRequestHandlers.hasOwnProperty(wrapper.msg)) {
    Logger.logError(APP_LOGGER_CATEGORY, `Unhandled request type ${wrapper.msg}`);
    return;
  }

  protobufRpcRequestHandlers[wrapper.msg](socket, iModel, wrapper);
};

function encodeReply(requestId: number, reply: IReplyWrapper): Uint8Array {
  reply.requestId = requestId;
  return ReplyWrapper.encode(ReplyWrapper.create(reply)).finish();
}

function handleSelectElementIdsRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  const request = wrapper.selectElementIdsRequest;
  assert(!!request && !!request.selectFilter);

  const sql = `SELECT ECInstanceId ${request.selectFilter}`;
  const elementIds: Id64Array = [];
  iModel.withPreparedStatement(sql, (stmt: ECSqlStatement) => {
    while (stmt.step() === DbResult.BE_SQLITE_ROW)
      elementIds.push(stmt.getValue(0).getId());
  });

  Logger.logTrace(APP_LOGGER_CATEGORY, `Selected ${elementIds.length} elements`);
  socket.send(encodeReply(wrapper.requestId, { selectElementIdsReply: { elementIds } }));
}

function handleExportMeshesRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  const request = wrapper.exportMeshesRequest;
  assert(!!request && !!request.elementIds);
  assert(request.chordTol !== null && request.chordTol !== undefined); // 0 is valid value for chordTol

  iModel.exportGraphics({
    onGraphics: (info) => { socket.send(createMeshReply(info, wrapper.requestId)); },
    elementIdArray: request.elementIds,
    chordTol: request.chordTol,
    angleTol: Angle.degreesToRadians(45),
  });

  // Empty reply finishes stream
  socket.send(encodeReply(wrapper.requestId, { exportMeshesReply: {} }));
}

function createMeshReply(info: ExportGraphicsInfo, requestId: number): Uint8Array {
  const indices = info.mesh.indices;
  const points = info.mesh.points;
  const normals = info.mesh.normals;
  const params = info.mesh.params;
  const byteCount = indices.byteLength + points.byteLength + normals.byteLength + params.byteLength;
  const meshData: Buffer = Buffer.allocUnsafe(byteCount);

  let offset = 0;
  Buffer.from(indices.buffer).copy(meshData, offset);
  offset += indices.byteLength;
  Buffer.from(points.buffer).copy(meshData, offset);
  offset += points.byteLength;
  Buffer.from(normals.buffer).copy(meshData, offset);
  offset += normals.byteLength;
  Buffer.from(params.buffer).copy(meshData, offset);

  const exportMeshesReply: IExportMeshesReply = {
    elementId: info.elementId,
    color: info.color,
    indexCount: indices.length,
    vertexCount: points.length / 3,
    meshData,
  };
  if (info.textureId)
    exportMeshesReply.textureId = info.textureId;

  return encodeReply(requestId, { exportMeshesReply, requestHasMoreReplies: true });
}

function handleTextureRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  const request = wrapper.textureRequest;
  assert(!!request && !!request.textureId);

  const texture = iModel.elements.getElement<Texture>(request.textureId);
  if (!texture) {
    Logger.logError(APP_LOGGER_CATEGORY, `Could not load texture ${request.textureId}`);
    return;
  }

  const textureReply: ITextureReply = {
    textureId: request.textureId,
    textureData: texture.data,
  };
  socket.send(encodeReply(wrapper.requestId, { textureReply }));
}

function handleElementTooltipRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  const request = wrapper.elementTooltipRequest;
  assert(!!request && !!request.elementId);

  const element = iModel.elements.getElement<GeometricElement3d>(request.elementId);
  if (!element) {
    Logger.logError(APP_LOGGER_CATEGORY, `Could not load element ${request.elementId}`);
    return;
  }

  const elementTooltipReply: IElementTooltipReply = {
    elementId: request.elementId,
    classLabel: element.className,
    categoryLabel: iModel.elements.getElement(element.category).getDisplayLabel(),
    modelLabel: iModel.elements.getElement(element.model).getDisplayLabel(),
  };
  socket.send(encodeReply(wrapper.requestId, { elementTooltipReply }));
}

function handleProjectExtentsRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  const extents = iModel.projectExtents;
  const projectExtentsReply: IProjectExtentsReply = {
    minX: extents.low.x, minY: extents.low.y, minZ: extents.low.z,
    maxX: extents.high.x, maxY: extents.high.y, maxZ: extents.high.z,
  };
  socket.send(encodeReply(wrapper.requestId, { projectExtentsReply }));
}

function handleCameraViewsRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  const sql = "SELECT ECInstanceId FROM bis.ViewDefinition3d";
  iModel.withPreparedStatement(sql, (stmt: ECSqlStatement) => {
    while (stmt.step() === DbResult.BE_SQLITE_ROW) {
      const viewElement = iModel.elements.getElement<ViewDefinition3d>(stmt.getValue(0).getId());
      if (viewElement && viewElement.cameraOn)
        socket.send(createCameraViewsReply(viewElement, wrapper.requestId));
    }
  });

  // Empty reply finishes stream
  socket.send(encodeReply(wrapper.requestId, { cameraViewsReply: {} }));
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

function handleElementPropertiesRequest(socket: ws, iModel: IModelDb, wrapper: RequestWrapper) {
  getElementProperties(socket, iModel, wrapper).catch((reason: any) => {
    Logger.logError(APP_LOGGER_CATEGORY, `${reason}`);
  });
}

async function getElementProperties(socket: ws, iModel: IModelDb, wrapper: RequestWrapper): Promise<void> {
  const request = wrapper.elementPropertiesRequest;
  assert(!!request && !!request.elementId);

  const elementProperties = await Presentation.getManager().getElementProperties({
    imodel: iModel,
    elementId: request.elementId,
    requestContext: new ClientRequestContext(),
  });

  if (!elementProperties)
    return Promise.reject(`getElementProperties returned undefined for ${request.elementId}`);

  const rootProperty: IElementPropertiesReplyEntry = { label: elementProperties.label };
  rootProperty.children = parseElementPropertiesMap(elementProperties.items);

  socket.send(encodeReply(wrapper.requestId, { elementPropertiesReply: { root: rootProperty } }));
}

function parseElementPropertiesList(items: ElementPropertiesItem[]): IElementPropertiesReplyEntry[] {
  const results: IElementPropertiesReplyEntry[] = [];

  for (let i = 0; i < items.length; ++i) {
    const thisResult: IElementPropertiesReplyEntry = { label: `${i}` };
    setValueOrChildrenFromElementPropertiesItem(thisResult, items[i]);
    results.push(thisResult);
  }

  return results;
}

function parseElementPropertiesMap(items: {[label: string]: ElementPropertiesItem} ): IElementPropertiesReplyEntry[] {
  const results: IElementPropertiesReplyEntry[] = [];

  Object.entries(items).map((kvp) => {
    const thisResult: IElementPropertiesReplyEntry = { label: kvp[0] };
    setValueOrChildrenFromElementPropertiesItem(thisResult, kvp[1]);
    results.push(thisResult);
  });

  return results;
}

function setValueOrChildrenFromElementPropertiesItem(replyEntry: IElementPropertiesReplyEntry, item: ElementPropertiesItem) {
  if (item.type === "primitive")
    replyEntry.value = item.value;
  else if (item.type === "category")
    replyEntry.children = parseElementPropertiesMap(item.items);
  else if (item.type === "struct")
    replyEntry.children = parseElementPropertiesMap(item.members);
  else if (item.type === "array") {
    if (item.valueType === "primitive")
      replyEntry.children = parseElementPropertiesList(item.values.map((v) => ({ type: "primitive", value: v })));
    else if (item.valueType === "struct")
      replyEntry.children = parseElementPropertiesList(item.values.map((v) => ({ type: "struct", members: v })));
  }
}
