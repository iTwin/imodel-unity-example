/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using Bentley.Protobuf;
using UnityEngine;

namespace Bentley
{
    public interface IUserInput
    {
        void OnUpdate();
        void OnGUI();
    }

    public class DesktopUserInput : IUserInput
    {
        private readonly BackendRouter _backend;
        private readonly Material _selectionMaterial;
        private readonly SavedViews _savedViews;

        private string _selectionText;
        private MeshRenderer _selectedRenderer;
        private Material _selectedOriginalMaterial;

        private readonly Camera _camera;
        private readonly Transform _cameraTransform;

        public DesktopUserInput(Material opaqueMaterial, BackendRouter backend, SavedViews savedViews)
        {
            _backend = backend;
            _selectionMaterial = new Material(opaqueMaterial) { color = Color.magenta };
            _savedViews = savedViews;

            _camera = Camera.main;
            _cameraTransform = _camera.transform;
        }

        public void OnUpdate()
        {
            if (Input.GetMouseButtonDown(0)) SetSelectionFromCursor();
            if (Input.GetKeyDown(KeyCode.Escape)) ClearSelection();

            if (Input.GetKeyDown(KeyCode.LeftArrow)) _savedViews.ApplyPreviousView();
            if (Input.GetKeyDown(KeyCode.RightArrow)) _savedViews.ApplyNextView();

            UpdateCamera();
        }

        public void OnGUI()
        {
            if (_selectionText != null) GUI.Box(new Rect(10, 10, 300, 70), _selectionText);
        }

        private void ClearSelection()
        {
            if (_selectedRenderer == null) return;

            _selectedRenderer.sharedMaterial = _selectedOriginalMaterial;
            _selectedRenderer = null;
            _selectedOriginalMaterial = null;
            _selectionText = null;
        }

        private void SetSelectionFromCursor()
        {
            ClearSelection();
            if (!Physics.Raycast(_camera.ScreenPointToRay(Input.mousePosition), out RaycastHit hitInfo))
                return;

            _selectedRenderer = hitInfo.transform.GetComponent<MeshRenderer>();
            _selectedOriginalMaterial = _selectedRenderer.sharedMaterial;
            _selectedRenderer.material = _selectionMaterial;

            var requestWrapper = new RequestWrapper
            {
                ElementTooltipRequest = new ElementTooltipRequest { ElementId = _selectedRenderer.name }
            };
            _backend.SendRequest(requestWrapper, replyWrapper =>
            {
                ElementTooltipReply tt = replyWrapper.ElementTooltipReply;
                _selectionText =
                    $"Id: {tt.ElementId}\nClass: {tt.ClassLabel}\nCategory: {tt.CategoryLabel}\nModel: {tt.ModelLabel}";
            });
        }

        private void UpdateCamera()
        {
            var mousePos = new Vector2(Input.GetAxis("Mouse X"), Input.GetAxis("Mouse Y"));

            // Middle mouse panning
            if (Input.GetMouseButton(2))
            {
                const float panSpeed = 50.0f;
                _cameraTransform.Translate(-mousePos.x * Time.deltaTime * panSpeed, -mousePos.y * Time.deltaTime * panSpeed, 0);
                return;
            }

            // Translation zoom with scroll wheel
            float mouseWheel = Input.GetAxis("Mouse ScrollWheel");
            if (Mathf.Abs(mouseWheel) > 0.01f)
            {
                const float zoomSpeed = 25.0f;
                _cameraTransform.Translate(0, 0, mouseWheel * zoomSpeed, Space.Self);
                return;
            }

            // Mouse look when right-click is down
            if (Input.GetMouseButton(1))
            {
                const float lookSpeed = 2.0f;

                Vector3 eulerAngles = _cameraTransform.eulerAngles;
                eulerAngles.y += lookSpeed * mousePos.x;
                eulerAngles.x -= lookSpeed * mousePos.y;
                _cameraTransform.eulerAngles = eulerAngles;
                // No return, can be combined with WASD movement
            }

            // WASD movement
            Vector3 translation = Vector3.zero;
            bool moved = false;

            const float flySpeed = 10.0f;
            const float shiftMultiplier = 2.5f;

            float frameFlySpeed = Time.deltaTime * flySpeed;
            if (Input.GetKey(KeyCode.LeftShift)) frameFlySpeed *= shiftMultiplier;
            if (Input.GetKey(KeyCode.S)) { translation.z -= frameFlySpeed; moved = true; }
            if (Input.GetKey(KeyCode.W)) { translation.z += frameFlySpeed; moved = true; }
            if (Input.GetKey(KeyCode.A)) { translation.x -= frameFlySpeed; moved = true; }
            if (Input.GetKey(KeyCode.D)) { translation.x += frameFlySpeed; moved = true; }
            if (Input.GetKey(KeyCode.Q)) { translation.y -= frameFlySpeed; moved = true; }
            if (Input.GetKey(KeyCode.E)) { translation.y += frameFlySpeed; moved = true; }

            if (moved) _cameraTransform.Translate(translation, Space.Self);
        }
    }
}
