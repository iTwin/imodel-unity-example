/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import * as yargs from 'yargs';

import { Logger, LogLevel } from '@bentley/bentleyjs-core';
import { IModelDb, IModelHost, SnapshotDb } from '@bentley/imodeljs-backend';
import { Presentation } from '@bentley/presentation-backend';
import { PresentationUnitSystem } from '@bentley/presentation-common';

import { openIModelFromIModelHub } from './IModelHubDownload';
import { startProtobufRpcServer } from './ProtobufRpcServer';

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
  await IModelHost.startup();

  Presentation.initialize();
  Presentation.getManager().activeLocale = "en";
  Presentation.getManager().activeUnitSystem = PresentationUnitSystem.Metric;

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
});
