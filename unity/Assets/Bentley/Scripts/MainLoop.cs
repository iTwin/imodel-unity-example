/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using UnityEngine;

namespace Bentley
{
    public class MainLoop : MonoBehaviour
    {
        public Material OpaqueMaterial;
        public Material TransparentMaterial;

        private BackendRouter _backend;
        private bool _isBackendSetup;
        private CoordinateUtility _coordinateUtility;
        private GraphicsStreaming _graphicsStreaming;
        private ExportMeshRequestManager _meshRequestManager;
        private SavedViews _savedViews;

        private ElementMeshReader _meshReader;
        private IElementMeshHandler _meshHandler;
        private TextureCache _textureCache;

        private IUserInput _userInput;

        private void Start()
        {
            Physics.queriesHitBackfaces = true;

            // Address must match Main.ts
            _backend = new BackendRouter("ws://localhost:3005", () =>
            {
                _isBackendSetup = true;
                _coordinateUtility.CalculateOffsetFromProjectExtents();
                _savedViews.RequestViewsFromBackend();
            });
            _coordinateUtility = new CoordinateUtility(_backend);
            _savedViews = new SavedViews(Camera.main, _coordinateUtility, _backend);
            _userInput = new DesktopUserInput(OpaqueMaterial, _backend, _savedViews);

            _meshReader = new ElementMeshReader(_coordinateUtility);
            _meshRequestManager = new ExportMeshRequestManager(_backend, _meshReader);
            _graphicsStreaming = new GraphicsStreaming(_backend, _meshRequestManager, _coordinateUtility);

            _textureCache = new TextureCache(_backend);
            _meshHandler = new ElementGameObjectCreator(OpaqueMaterial, TransparentMaterial, _textureCache);
        }

        private void OnDestroy() { _backend.Shutdown(); }
        private void OnGUI() { _userInput.OnGUI(); }

        private void Update()
        {
            if (!_isBackendSetup) return;

            // Hacky method to flush combination
            // if (Input.GetKeyDown(KeyCode.Space))
            // {
            //     var combiner = _meshHandler as ElementMeshCombiner;
            //     if (combiner != null) combiner.FlushAll();
            // }

            _backend.OnUpdate();
            _graphicsStreaming.OnUpdate();
            _meshRequestManager.OnUpdate();
            _userInput.OnUpdate();

            while (_meshReader.TryGetResult(out ElementMeshReader.Result meshResult))
                _meshHandler.Handle(meshResult);
        }
    }
}
