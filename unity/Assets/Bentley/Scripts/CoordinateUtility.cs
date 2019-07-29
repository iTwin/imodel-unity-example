/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using Bentley.Protobuf;
using UnityEngine;

namespace Bentley
{
    public struct Vector3d
    {
        public double X;
        public double Y;
        public double Z;

        public Vector3d(double x, double y, double z) { X = x; Y = y; Z = z; }
    }

    public class CoordinateUtility
    {
        private readonly BackendRouter _backend;
        private Vector3d _translationFromIModel;

        /// <summary>
        /// Offset to apply to coordinates from iModel.js, in iModel.js Z-up coordinate system
        /// </summary>
        public Vector3d TranslationFromIModel =>  _translationFromIModel;

        public CoordinateUtility(BackendRouter backend)
        {
            _backend = backend;
        }

        public void CalculateOffsetFromProjectExtents()
        {
            _backend.SendRequest(new RequestWrapper { ProjectExtentsRequest = new ProjectExtentsRequest() },
                replyWrapper =>
                {
                    ProjectExtentsReply msg = replyWrapper.ProjectExtentsReply;
                    // Center the geometry in XY plane for better floating point behavior.
                    _translationFromIModel = new Vector3d
                    {
                        X = -(msg.MinX + (msg.MaxX - msg.MinX) / 2),
                        Y = -(msg.MinY + (msg.MaxY - msg.MinY) / 2),
                        Z = -msg.MinZ
                    };
                });
        }

        /// <summary>
        /// Convert Unity world vector to IModel coordinates (Z-up instead of Y-up)
        /// </summary>
        public Vector3d ConvertVectorToIModel(Vector3 v) => new Vector3d(v.x, v.z, v.y);

        /// <summary>
        /// Convert IModel vector to Unity world coordinates (Y-up instead of Z-up)
        /// </summary>
        public Vector3 ConvertVectorFromIModel(Vector3d v) => new Vector3((float)v.X, (float)v.Z, (float)v.Y);

        /// <summary>
        /// Convert Unity world point to IModel coordinates (Z-up instead of Y-up, translation applied)
        /// </summary>
        public Vector3d ConvertPointToIModel(Vector3 worldPoint)
        {
            // Mismatched Y/Z is intentional - world Z goes with IModel Y and vice versa
            return new Vector3d(worldPoint.x - _translationFromIModel.X,
                                worldPoint.z - _translationFromIModel.Y,
                                worldPoint.y - _translationFromIModel.Z);
        }

        /// <summary>
        /// Convert IModel point to Unity world coordinates (Y-up instead of Z-up, translation applied)
        /// </summary>
        public Vector3 ConvertPointFromIModel(Vector3d iModelPoint)
        {
            return new Vector3((float)(iModelPoint.X + _translationFromIModel.X),
                               (float)(iModelPoint.Z + _translationFromIModel.Z),
                               (float)(iModelPoint.Y + _translationFromIModel.Y));
        }
    }
}
