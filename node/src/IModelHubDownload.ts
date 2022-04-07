/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import { BriefcaseDb, BriefcaseManager, IModelHost } from "@itwin/core-backend";
import { Logger } from "@itwin/core-bentley";
import { BriefcaseIdValue, LocalBriefcaseProps } from "@itwin/core-common";
import { NodeCliAuthorizationClient } from "@itwin/node-cli-authorization";
import { APP_LOGGER_CATEGORY } from "./Main";

// Find your iTwin and iModel IDs at https://developer.bentley.com/my-imodels/
const IMODELHUB_REQUEST_PROPS = {
  iTwinId: "", // EDIT ME! Specify your own iTwinId
  iModelId: "", // EDIT ME! Specify your own iModelId
};

const AUTH_CLIENT_CONFIG_PROPS = {
  clientId: "", // EDIT ME! Specify your own clientId

  /** These are the minimum scopes needed - you can leave alone or replace with your own entries */
  scope: "imodels:read",
  /** This can be left as-is assuming you've followed the instructions in README.md when registering your application */
  redirectUri: "http://localhost:3000/signin-callback",
};

export async function openIModelFromIModelHub(): Promise<BriefcaseDb> {
  if (!AUTH_CLIENT_CONFIG_PROPS.clientId || !AUTH_CLIENT_CONFIG_PROPS.scope || !AUTH_CLIENT_CONFIG_PROPS.redirectUri)
    return Promise.reject("You must edit AUTH_CLIENT_CONFIG in IModelHubDownload.ts");

  const authorizationClient = new NodeCliAuthorizationClient({ ...AUTH_CLIENT_CONFIG_PROPS });
  Logger.logInfo(APP_LOGGER_CATEGORY, "Attempting to sign in");
  await authorizationClient.signIn();
  Logger.logInfo(APP_LOGGER_CATEGORY, "Sign in successful");
  IModelHost.authorizationClient = authorizationClient;

  if (!IMODELHUB_REQUEST_PROPS.iTwinId || !IMODELHUB_REQUEST_PROPS.iModelId)
    return Promise.reject("You must edit IMODELHUB_REQUEST_PROPS in IModelHubDownload.ts");

  let briefcaseProps: LocalBriefcaseProps | undefined = getBriefcaseFromCache();
  if (!briefcaseProps)
    briefcaseProps = await downloadBriefcase();

  const briefcaseResult = BriefcaseDb.open({ fileName: briefcaseProps.fileName, readonly: true });
  return briefcaseResult;
}

function getBriefcaseFromCache(): LocalBriefcaseProps | undefined {
  const cachedBriefcases: LocalBriefcaseProps[] = BriefcaseManager.getCachedBriefcases(IMODELHUB_REQUEST_PROPS.iModelId);
  if (cachedBriefcases.length === 0) {
    Logger.logInfo(APP_LOGGER_CATEGORY, `No cached briefcase found for ${IMODELHUB_REQUEST_PROPS.iModelId}`);
    return undefined;
  }

  // Just using any version that's cached. A real program would verify that this is the desired changeset.
  Logger.logInfo(APP_LOGGER_CATEGORY, `Using cached briefcase found at ${cachedBriefcases[0].fileName}`);
  return cachedBriefcases[0];
}

async function downloadBriefcase(): Promise<LocalBriefcaseProps> {
  Logger.logInfo(APP_LOGGER_CATEGORY, `Downloading new briefcase for iTwinId ${IMODELHUB_REQUEST_PROPS.iTwinId} iModelId ${IMODELHUB_REQUEST_PROPS.iModelId}`);

  let nextProgressUpdate = new Date().getTime() + 2000; // too spammy without some throttling
  const onProgress = (loadedBytes: number, totalBytes: number): number => {
    if (new Date().getTime() > nextProgressUpdate) {
      if (loadedBytes === totalBytes)
        Logger.logInfo(APP_LOGGER_CATEGORY, `Download complete, applying changesets`);
      else
        Logger.logInfo(APP_LOGGER_CATEGORY, `Downloaded ${(loadedBytes / (1024 * 1024)).toFixed(2)}MB of ${(totalBytes / (1024 * 1024)).toFixed(2)}MB`);
      nextProgressUpdate = new Date().getTime() + 2000;
    }
    return 0;
  };

  return BriefcaseManager.downloadBriefcase({ ...IMODELHUB_REQUEST_PROPS, onProgress, briefcaseId: BriefcaseIdValue.Unassigned });
}
