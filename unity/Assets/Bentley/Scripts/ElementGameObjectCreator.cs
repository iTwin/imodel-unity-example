/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

namespace Bentley
{
    public interface IElementMeshHandler
    {
        void Handle(ElementMeshReader.Result mesh);
    }

    public class ElementGameObjectCreator : IElementMeshHandler
    {
        private struct MaterialKey : IEquatable<MaterialKey>
        {
            public uint Color;
            public string TextureId;

            public bool Equals(MaterialKey other)
            {
                return Color == other.Color && string.Equals(TextureId, other.TextureId);
            }

            public override bool Equals(object obj)
            {
                if (ReferenceEquals(null, obj)) return false;
                return obj is MaterialKey other && Equals(other);
            }

            public override int GetHashCode()
            {
                unchecked
                {
                    return ((int) Color * 397) ^ (TextureId != null ? TextureId.GetHashCode() : 0);
                }
            }
        }

        private readonly GameObject _rootGameObject;

        private readonly Material _opaqueTemplate;
        private readonly Material _transparentTemplate;
        private readonly Dictionary<MaterialKey, Material> _cachedMaterials = new Dictionary<MaterialKey, Material>();
        private readonly TextureCache _textureCache;

        public ElementGameObjectCreator(Material opaqueTemplate, Material transparentTemplate,
            TextureCache textureCache)
        {
            _opaqueTemplate = opaqueTemplate;
            _transparentTemplate = transparentTemplate;
            _textureCache = textureCache;

            _rootGameObject = new GameObject("iModel Root");
        }

        public void Handle(ElementMeshReader.Result meshReaderResult)
        {
            // Color is TBGR form
            // see https://imodeljs.github.io/iModelJs-docs-output//reference/imodeljs-common/symbology/colordef/
            var key = new MaterialKey { Color = meshReaderResult.Color, TextureId = meshReaderResult.TextureId };
            if (!_cachedMaterials.TryGetValue(key, out Material material))
            {
                var color = new Color32((byte) (meshReaderResult.Color & 0xFF),
                    (byte) ((meshReaderResult.Color >> 8) & 0xFF),
                    (byte) ((meshReaderResult.Color >> 16) & 0xFF),
                    (byte)(255 - ((meshReaderResult.Color >> 24) & 0xFF)));
                material = new Material(color.a > 235 ? _opaqueTemplate : _transparentTemplate) { color = color };
                if (!string.IsNullOrEmpty(key.TextureId))
                    material.mainTexture = _textureCache.GetById(key.TextureId);

                _cachedMaterials[key] = material;
            }

            IndexFormat indexFormat = meshReaderResult.Vertices.Length > 65000 ? IndexFormat.UInt32 : IndexFormat.UInt16;
            var unityMesh = new Mesh
            {
                indexFormat = indexFormat,
                vertices = meshReaderResult.Vertices.ToArray(),
                normals = meshReaderResult.Normals.ToArray(),
                uv = meshReaderResult.UVs.ToArray(),
                triangles = meshReaderResult.Indices.ToArray()
            };

            // Object name is element ID for use with metadata queries on selection
            var go = new GameObject { name = meshReaderResult.ElementId };
            go.transform.SetParent(_rootGameObject.transform, false);

            var collider = go.AddComponent<MeshCollider>();
            collider.cookingOptions = MeshColliderCookingOptions.None;
            collider.sharedMesh = unityMesh;

            go.AddComponent<MeshFilter>().sharedMesh = unityMesh;
            go.AddComponent<MeshRenderer>().sharedMaterial = material;

            meshReaderResult.Dispose();
        }
    }
}
