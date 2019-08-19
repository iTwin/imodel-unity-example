/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using System.Collections.Generic;
using Unity.Collections;
using UnityEngine;
using UnityEngine.Rendering;

namespace Bentley
{
    public class ElementMeshCombiner : IElementMeshHandler
    {
        private readonly Dictionary<uint, List<ElementMeshReader.Result>> _meshesByColor;

        private readonly GameObject _rootGameObject;
        private readonly Material _opaqueTemplate;
        private readonly Material _transparentTemplate;

        public ElementMeshCombiner(Material opaqueTemplate, Material transparentTemplate)
        {
            _meshesByColor = new Dictionary<uint, List<ElementMeshReader.Result>>();

            _opaqueTemplate = opaqueTemplate;
            _transparentTemplate = transparentTemplate;
            _rootGameObject = new GameObject("iModel Root");
        }

        public void Handle(ElementMeshReader.Result mesh)
        {
            if (_meshesByColor.TryGetValue(mesh.Color, out List<ElementMeshReader.Result> meshList))
            {
                meshList.Add(mesh);
                return;
            }

            meshList = new List<ElementMeshReader.Result> { mesh };
            _meshesByColor[mesh.Color] = meshList;
        }

        public void FlushAll()
        {
            foreach (var kvp in _meshesByColor)
                Flush(kvp.Value);

            _meshesByColor.Clear();
        }

        private void Flush(List<ElementMeshReader.Result> meshes)
        {
            int indexCount = 0;
            int vertexCount = 0;
            for (int i = 0; i < meshes.Count; ++i)
            {
                indexCount += meshes[i].Indices.Length;
                vertexCount += meshes[i].Vertices.Length;
            }

            var indices = new int[indexCount];
            var vertices = new Vector3[vertexCount];
            var normals = new Vector3[vertexCount];
            var uvs = new Vector2[vertexCount];

            int vertexOffset = 0;
            int indexOffset = 0;
            for (int i = 0; i < meshes.Count; ++i)
            {
                int thisVertexLength = meshes[i].Vertices.Length;
                NativeArray<Vector3>.Copy(meshes[i].Vertices, 0, vertices, vertexOffset, thisVertexLength);
                NativeArray<Vector3>.Copy(meshes[i].Normals, 0, normals, vertexOffset, thisVertexLength);
                NativeArray<Vector2>.Copy(meshes[i].UVs, 0, uvs, vertexOffset, thisVertexLength);

                NativeArray<int> thisIndices = meshes[i].Indices;
                if (i == 0)
                    NativeArray<int>.Copy(thisIndices, indices, thisIndices.Length);
                else
                {
                    for (int j = 0; j < thisIndices.Length; ++j)
                        indices[indexOffset + j] = thisIndices[j] + vertexOffset;
                }

                vertexOffset += thisVertexLength;
                indexOffset += thisIndices.Length;

                meshes[i].Dispose();
            }

            var srcColor = meshes[0].Color;
            var color = new Color32((byte)(srcColor & 0xFF),
                                    (byte)((srcColor >> 8) & 0xFF),
                                    (byte)((srcColor >> 16) & 0xFF),
                                    (byte)(255 - ((srcColor >> 24) & 0xFF)));
            var material = new Material(color.a > 235 ? _opaqueTemplate : _transparentTemplate) { color = color };

            IndexFormat indexFormat = vertices.Length > 65000 ? IndexFormat.UInt32 : IndexFormat.UInt16;
            var unityMesh = new Mesh
            {
                indexFormat = indexFormat,
                vertices = vertices,
                normals = normals,
                uv = uvs,
                triangles = indices
            };

            var go = new GameObject { name = "Combined Elements" };
            go.transform.SetParent(_rootGameObject.transform, false);

            go.AddComponent<MeshFilter>().sharedMesh = unityMesh;
            go.AddComponent<MeshRenderer>().sharedMaterial = material;
        }
    }
}
