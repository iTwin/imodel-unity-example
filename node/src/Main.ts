/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import * as yargs from "yargs";
import { IModelDb, IModelHost, IModelHostConfiguration, SnapshotDb } from "@itwin/core-backend";
import { Logger, LogLevel } from "@itwin/core-bentley";
import { Presentation } from "@itwin/presentation-backend";
import { openIModelFromIModelHub } from "./IModelHubDownload";
import { startProtobufRpcServer } from "./ProtobufRpcServer";
import { BackendIModelsAccess } from "@itwin/imodels-access-backend";

export const APP_LOGGER_CATEGORY = "imodel-unity-example";

interface UnityBackendArgs {
  snapshotFile?: string;
}

const unityBackendArgs: yargs.Arguments<UnityBackendArgs> = yargs
  .usage("Usage: $0 --snapshotFile [Snapshot iModel file]\nIf snapshotFile is not specified, attempts to use iModel specified in IModelHubDownload.ts.")
  .string("snapshotFile")
  .alias("snapshotFile", "s")
  .describe("snapshotFile", "Path to a Snapshot iModel file (.bim)")
  .argv;

(async () => {
  const imhConfig: IModelHostConfiguration = {
    hubAccess: new BackendIModelsAccess(), // needed to download iModels from iModelHub
    // These tile properties are unused by this application, but are required fields of IModelHostConfiguration.
    logTileLoadTimeThreshold: IModelHostConfiguration.defaultLogTileLoadTimeThreshold,
    logTileSizeThreshold: IModelHostConfiguration.defaultLogTileSizeThreshold,
    tileContentRequestTimeout: IModelHostConfiguration.defaultTileRequestTimeout,
    tileTreeRequestTimeout: IModelHostConfiguration.defaultTileRequestTimeout,
  };
  await IModelHost.startup(imhConfig);

  Presentation.initialize();
  Presentation.getManager().activeLocale = "en";
  Presentation.getManager().activeUnitSystem = "metric";

  Logger.initializeToConsole();
  Logger.setLevelDefault(LogLevel.Warning);
  Logger.setLevel(APP_LOGGER_CATEGORY, LogLevel.Trace);

  let iModel: IModelDb;

  if (!unityBackendArgs.snapshotFile) {
    Logger.logInfo(APP_LOGGER_CATEGORY, "No snapshot specified, attempting to open from iModelHub");
    iModel = await openIModelFromIModelHub();
  } else {
    Logger.logInfo(APP_LOGGER_CATEGORY, `Attempting to open ${unityBackendArgs.snapshotFile}`);
    iModel = SnapshotDb.openFile(unityBackendArgs.snapshotFile);
    Logger.logInfo(APP_LOGGER_CATEGORY, `${unityBackendArgs.snapshotFile} opened successfully`);
  }

  startProtobufRpcServer(iModel);

})().catch((reason) => {
  process.stdout.write(`${reason}\n`);
  process.exit(1);
});
