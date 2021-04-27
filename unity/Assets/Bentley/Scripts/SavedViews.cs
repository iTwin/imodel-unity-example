/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

using System.Collections.Generic;
using Bentley.Protobuf;
using UnityEngine;

namespace Bentley
{
    public class SavedViews
    {
        private struct Entry
        {
            public string DisplayLabel;
            public Vector3 Position;
            public Quaternion Rotation;
        }

        private readonly Camera _camera;
        private readonly CoordinateUtility _coordinateUtility;
        private readonly BackendRouter _backend;

        private readonly List<Entry> _entries;
        private int _currentView = -1;

        public SavedViews(Camera camera, CoordinateUtility coordinateUtility, BackendRouter backend)
        {
            _camera = camera;
            _coordinateUtility = coordinateUtility;
            _backend = backend;

            _entries = new List<Entry>();
        }

        public void ApplyNextView()
        {
            if (_entries.Count == 0) return;
            if (++_currentView == _entries.Count) _currentView = 0;
            ApplyCurrentView();
        }

        public void ApplyPreviousView()
        {
            if (_entries.Count == 0) return;
            if (--_currentView < 0) _currentView = _entries.Count - 1;
            ApplyCurrentView();
        }

        public void RequestViewsFromBackend()
        {
            _backend.SendRequest(new RequestWrapper { CameraViewsRequest = new CameraViewsRequest() }, HandleCameraViewsReply);
        }

        private void HandleCameraViewsReply(ReplyWrapper replyWrapper)
        {
            if (!replyWrapper.RequestHasMoreReplies)
            {
                ApplyNextView();
                return;
            }

            CameraViewsReply viewDef = replyWrapper.CameraViewsReply;
            var eye = new Vector3d(viewDef.EyePointX, viewDef.EyePointY, viewDef.EyePointZ);
            var entry = new Entry
            {
                DisplayLabel = viewDef.DisplayLabel,
                Position = _coordinateUtility.ConvertPointFromIModel(eye),
                Rotation = Quaternion.AngleAxis((float) viewDef.Roll + 90.0f, Vector3.right) *
                           Quaternion.AngleAxis((float) -viewDef.Pitch, Vector3.up) *
                           Quaternion.AngleAxis((float) -viewDef.Yaw, Vector3.forward)
            };
            _entries.Add(entry);
        }

        private void ApplyCurrentView()
        {
            _camera.transform.position = _entries[_currentView].Position;
            _camera.transform.rotation = _entries[_currentView].Rotation;
            Debug.Log("View: " + _entries[_currentView].DisplayLabel);
        }
    }
}
