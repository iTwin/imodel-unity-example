/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using System.Globalization;
using Bentley.Protobuf;
using UnityEngine;
using UnityEngine.Profiling;

namespace Bentley
{
    public class GraphicsStreaming
    {
        // Minimum camera movement required for checking iModel for newly visible graphics
        private const float MinPositionChange = 10.0f;

        // Minimum camera direction change require for checking iModel for newly visible graphics
        // Difference of dot product of previous forward direction and current
        private const float MinDirectionChange = 0.2f;

        // Minimum seconds to wait before checking for newly visible graphics
        private const float MaxRequestFrequency = 2.0f;

        private readonly BackendRouter _backend;
        private readonly ExportMeshRequestManager _meshRequestManager;
        private readonly CoordinateUtility _coordinateUtility;
        private readonly Camera _camera;
        private readonly Transform _cameraTransform;

        private bool _requestIsActive;
        private bool _forceRequest;
        private float _nextRequestTime;
        private Vector3 _lastCameraPos;
        private Vector3 _lastCameraFwd;
        private readonly Vector3[] _frustumBuffer = new Vector3[4];

        public GraphicsStreaming(BackendRouter backend, ExportMeshRequestManager meshRequestManager,
            CoordinateUtility coordinateUtility)
        {
            _backend = backend;
            _meshRequestManager = meshRequestManager;
            _coordinateUtility = coordinateUtility;

            _camera = Camera.main;
            _cameraTransform = _camera.transform;

            _forceRequest = true; // force initial request
        }

        public void OnUpdate()
        {
            if (_requestIsActive) return; // Only one request in flight at a time
            if (!_forceRequest && Time.time < _nextRequestTime) return; // Time-based throttling

            Vector3 cameraPos = _cameraTransform.position;
            Vector3 cameraFwd = _cameraTransform.forward;

            if (!_forceRequest &&
                Vector3.Distance(cameraPos, _lastCameraPos) < MinPositionChange &&
                1.0f - Vector3.Dot(cameraFwd, _lastCameraFwd) < MinDirectionChange)
                return;

            Profiler.BeginSample("Bentley.GraphicsStreaming.OnUpdate");

            _requestIsActive = true;
            _forceRequest = false;
            _lastCameraPos = cameraPos;
            _lastCameraFwd = cameraFwd;

            CalculateFrustumAABB(out Vector3 min, out Vector3 max);
            string selectFilter = CreateSelectFilter(min, max);

            _backend.SendRequest(
                new RequestWrapper { SelectElementIdsRequest = new SelectElementIdsRequest { SelectFilter = selectFilter } },
                replyWrapper =>
                {
                    _meshRequestManager.AddElementIdsToQueue(replyWrapper.SelectElementIdsReply.ElementIds);
                    _requestIsActive = false;
                    _nextRequestTime = Time.time + MaxRequestFrequency;
                });

            Profiler.EndSample();
        }

        private void CalculateFrustumAABB(out Vector3 min, out Vector3 max)
        {
            const Camera.MonoOrStereoscopicEye eye = Camera.MonoOrStereoscopicEye.Mono;

            _camera.CalculateFrustumCorners(new Rect(0, 0, 1, 1), _camera.nearClipPlane, eye, _frustumBuffer);
            min = max = _cameraTransform.TransformPoint(_frustumBuffer[0]);
            for (int i = 1; i < 4; ++i)
            {
                Vector3 testPoint = _cameraTransform.TransformPoint(_frustumBuffer[i]);
                min = Vector3.Min(min, testPoint);
                max = Vector3.Max(max, testPoint);
            }

            _camera.CalculateFrustumCorners(new Rect(0, 0, 1, 1), _camera.farClipPlane, eye, _frustumBuffer);
            for (int i = 0; i < 4; ++i)
            {
                Vector3 testPoint = _cameraTransform.TransformPoint(_frustumBuffer[i]);
                min = Vector3.Min(min, testPoint);
                max = Vector3.Max(max, testPoint);
            }
        }

        public string CreateSelectFilter(Vector3 worldMin, Vector3 worldMax)
        {
            const string fmt = "FROM bis.SpatialIndex " +
                               "WHERE ECInstanceId " + 
                               "MATCH iModel_spatial_overlap_aabb(" +
                               "iModel_bbox({0:G17}, {1:G17}, {2:G17}, {3:G17}, {4:G17}, {5:G17})" +
                               ") " +
                               "ORDER BY " +
                               "iModel_bbox_volume(iModel_bbox(MinX,MinY,MinZ,MaxX,MaxY,MaxZ)) DESC";

            Vector3d min = _coordinateUtility.ConvertPointToIModel(worldMin);
            Vector3d max = _coordinateUtility.ConvertPointToIModel(worldMax);

            return string.Format(CultureInfo.InvariantCulture, fmt, min.X, min.Y, min.Z, max.X, max.Y, max.Z);
        }
    }
}
