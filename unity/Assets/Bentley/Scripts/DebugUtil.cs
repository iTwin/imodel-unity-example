/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using UnityEngine;

namespace Bentley
{
    public static class DebugUtil
    {
        public static void DrawBoxGizmo(Vector3 min, Vector3 max, Color color, float duration, bool depthTest = true)
        {
            // Front
            Debug.DrawLine(new Vector3(min.x, min.y, min.z), new Vector3(max.x, min.y, min.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(max.x, min.y, min.z), new Vector3(max.x, max.y, min.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(max.x, max.y, min.z), new Vector3(min.x, max.y, min.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(min.x, max.y, min.z), new Vector3(min.x, min.y, min.z), color, duration, depthTest);

            // Back
            Debug.DrawLine(new Vector3(min.x, min.y, max.z), new Vector3(max.x, min.y, max.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(max.x, min.y, max.z), new Vector3(max.x, max.y, max.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(max.x, max.y, max.z), new Vector3(min.x, max.y, max.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(min.x, max.y, max.z), new Vector3(min.x, min.y, max.z), color, duration, depthTest);

            // Top
            Debug.DrawLine(new Vector3(min.x, max.y, min.z), new Vector3(min.x, max.y, max.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(max.x, max.y, min.z), new Vector3(max.x, max.y, max.z), color, duration, depthTest);

            // Bottom
            Debug.DrawLine(new Vector3(min.x, min.y, min.z), new Vector3(min.x, min.y, max.z), color, duration, depthTest);
            Debug.DrawLine(new Vector3(max.x, min.y, min.z), new Vector3(max.x, min.y, max.z), color, duration, depthTest);
        }
    }
}
