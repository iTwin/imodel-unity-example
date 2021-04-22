/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import { ElectronAuthorizationBackend } from "@bentley/electron-manager/lib/ElectronBackend";
import { AuthorizedBackendRequestContext, BackendRequestContext, BriefcaseDb, BriefcaseManager, NativeHost } from "@bentley/imodeljs-backend";
import { LocalBriefcaseProps } from "@bentley/imodeljs-common";
import { AccessToken } from "@bentley/itwin-client";
import { logInfo } from "./Main";

// Find your context and iModel IDs at https://www.itwinjs.org/getting-started/registration-dashboard/?tab=1
const IMODELHUB_REQUEST_PROPS = {
  contextId: "",  // EDIT ME! Specify your own contextId
  iModelId: "",   // EDIT ME! Specify your own iModelId
};

export async function openIModelFromIModelHub(): Promise<BriefcaseDb> {
  if (IMODELHUB_REQUEST_PROPS.contextId?.length === 0 || IMODELHUB_REQUEST_PROPS.iModelId?.length === 0)
    return Promise.reject("You must edit IMODELHUB_REQUEST_PROPS in IModelHubDownload.ts");

  logInfo("Attempting to sign in");
  const accessToken = await signInWithDesktopClient();
  const authContext = new AuthorizedBackendRequestContext(accessToken);
  logInfo("Sign in successful");

  let briefcaseProps: LocalBriefcaseProps | undefined = getBriefcaseFromCache();
  if (!briefcaseProps)
    briefcaseProps = await downloadBriefcase(authContext);

  return BriefcaseDb.open(authContext, { fileName: briefcaseProps.fileName, readonly: true });
}

async function signInWithDesktopClient(): Promise<AccessToken> {
  const requestContext = new BackendRequestContext();
  const client = new ElectronAuthorizationBackend();
  await client.initialize(requestContext, {
    clientId: "imodeljs-electron-samples",
    redirectUri: "http://localhost:3000/signin-callback",
    scope: "openid imodelhub context-registry-service:read-only urlps-third-party offline_access",
  });

  return new Promise<AccessToken>((resolve, reject) => {
    NativeHost.onUserStateChanged.addListener((token) => {
      if (token !== undefined) {
        resolve(token);
      } else {
        reject(new Error("Failed to sign in"));
      }
    });
    client.signIn().catch((err) => reject(err));
  });
}

function getBriefcaseFromCache(): LocalBriefcaseProps | undefined {
  const cachedBriefcases: LocalBriefcaseProps[] = BriefcaseManager.getCachedBriefcases(IMODELHUB_REQUEST_PROPS.iModelId);
  if (cachedBriefcases.length === 0) {
    logInfo(`No cached briefcase found for ${IMODELHUB_REQUEST_PROPS.iModelId}`);
    return undefined;
  }

  // Just using any version that's cached. A real program would verify that this is the desired changeset.
  logInfo(`Using cached briefcase found at ${cachedBriefcases[0].fileName}`);
  return cachedBriefcases[0];
}

async function downloadBriefcase(authContext: AuthorizedBackendRequestContext): Promise<LocalBriefcaseProps> {
  logInfo(`Downloading new briefcase for contextId ${IMODELHUB_REQUEST_PROPS.contextId} iModelId ${IMODELHUB_REQUEST_PROPS.iModelId}`);

  let nextProgressUpdate = new Date().getTime() + 2000; // too spammy without some throttling
  const onProgress = (loadedBytes: number, totalBytes: number): number => {
    if (new Date().getTime() > nextProgressUpdate) {
      if (loadedBytes === totalBytes)
        logInfo(`Download complete, applying changesets`);
      else
        logInfo(`Downloaded ${(loadedBytes / (1024 * 1024)).toFixed(2)}MB of ${(totalBytes / (1024 * 1024)).toFixed(2)}MB`);
      nextProgressUpdate = new Date().getTime() + 2000;
    }
    return 0;
  };

  return BriefcaseManager.downloadBriefcase(authContext, { ...IMODELHUB_REQUEST_PROPS, onProgress });
}
