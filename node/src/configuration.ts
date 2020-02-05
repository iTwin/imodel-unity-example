/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { Config } from "@bentley/imodeljs-clients";

/**
 * Setup configuration for the application
 *
 * **Note:** this part of configuration is in addition to the unique configuration stored in
 * the config file at `src/common/config.json`.
 */
export default function setupEnv() {
  Config.App.merge({
    // -----------------------------------------------------------------------------------------------------------
    // Client registration (RECOMMENDED but OPTIONAL)
    // Must set these variables before deployment, but the supplied defaults can be used for testing on localhost.
    // Create a client registration using the procedure here - https://git.io/fx8YP (Developer registration).
    // -----------------------------------------------------------------------------------------------------------

    // Use this client id when running electron app
    imjs_client_id: "imodeljs-electron-samples",

    // Set this to be the scopes of services needed to run with electron client id
    imjs_scope: "openid imodelhub context-registry-service:read-only urlps-third-party",
  });
}
