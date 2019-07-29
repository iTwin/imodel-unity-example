/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using System;
using System.Collections.Generic;
using Bentley.Protobuf;
using Unity.Burst;
using Unity.Collections;
using Unity.Jobs;
using UnityEngine;
using UnityEngine.Profiling;

namespace Bentley
{
    public class ElementMeshReader
    {
        public struct Result
        {
            public string ElementId;
            public string TextureId;
            public uint Color;

            public NativeArray<int> Indices;
            public NativeArray<Vector3> Vertices;
            public NativeArray<Vector3> Normals;
            public NativeArray<Vector2> UVs;

            public void Dispose()
            {
                Indices.Dispose();
                Vertices.Dispose();
                Normals.Dispose();
                UVs.Dispose();
            }
        }

        private struct ReadJobInfo
        {
            public JobHandle Handle;
            public ReadJob Job;
            public string ElementId;
            public string TextureId;
            public uint Color;
        }

        private readonly CoordinateUtility _coordinateUtility;
        private readonly Queue<ReadJobInfo> _readQueue = new Queue<ReadJobInfo>();
        private byte[] _meshDataBuffer = new byte[20 * 1024 * 1024]; // try to avoid realloc on big terrain meshes

        public ElementMeshReader(CoordinateUtility coordinateUtility)
        {
            _coordinateUtility = coordinateUtility;
        }

        public bool TryGetResult(out Result result)
        {
            if (_readQueue.Count == 0) { result = new Result(); return false; }

            ReadJobInfo jobInfo = _readQueue.Peek();
            if (!jobInfo.Handle.IsCompleted)
            {
                result = new Result();
                return false;
            }

            Profiler.BeginSample("Bentley.ElementMeshReader.TryGetResult");

            _readQueue.Dequeue();
            jobInfo.Handle.Complete();

            result = new Result
            {
                ElementId = jobInfo.ElementId,
                TextureId = jobInfo.TextureId,
                Color = jobInfo.Color,

                Indices = jobInfo.Job.Indices,
                Vertices = jobInfo.Job.Vertices,
                Normals = jobInfo.Job.Normals,
                UVs = jobInfo.Job.UVs
            };

            Profiler.EndSample();

            return true;
        }

        public void QueueForRead(ExportMeshesReply mesh)
        {
            if (mesh.MeshData.Length == 0) return; // Empty reply means end of stream

            Profiler.BeginSample("Bentley.ElementMeshReader.QueueForRead");

            const Allocator allocType = Allocator.Persistent;
            const NativeArrayOptions arrayOpt = NativeArrayOptions.UninitializedMemory;

            var job = new ReadJob
            {
                Offset = _coordinateUtility.TranslationFromIModel,

                SrcBytes = new NativeArray<byte>(mesh.MeshData.Length, allocType, arrayOpt),

                Indices = new NativeArray<int>((int)mesh.IndexCount, allocType, arrayOpt),
                Vertices = new NativeArray<Vector3>((int)mesh.VertexCount, allocType, arrayOpt),
                Normals = new NativeArray<Vector3>((int)mesh.VertexCount, allocType, arrayOpt),
                UVs = new NativeArray<Vector2>((int)mesh.VertexCount, allocType, arrayOpt)
            };

            // Byte shuffling to avoid generating garbage for each message and stay on fast path.
            // Protobuf messages send bytes as ByteString. ByteString only has fast path for copying
            // to [] and NativeArray only has fast path for copying from [].
            if (_meshDataBuffer.Length < mesh.MeshData.Length)
                _meshDataBuffer = new byte[Math.Max(mesh.MeshData.Length, _meshDataBuffer.Length * 2)];
            mesh.MeshData.CopyTo(_meshDataBuffer, 0);
            NativeArray<byte>.Copy(_meshDataBuffer, job.SrcBytes, mesh.MeshData.Length);

            _readQueue.Enqueue(new ReadJobInfo
            {
                Job = job,
                Handle = job.Schedule(),
                Color = mesh.Color,
                ElementId = mesh.ElementId,
                TextureId = mesh.TextureId
            });

            Profiler.EndSample();
        }

        [BurstCompile]
        private struct ReadJob : IJob
        {
            [ReadOnly] public Vector3d Offset;
            [ReadOnly, DeallocateOnJobCompletion] public NativeArray<byte> SrcBytes;

            [WriteOnly] public NativeArray<int> Indices;
            [WriteOnly] public NativeArray<Vector3> Vertices;
            [WriteOnly] public NativeArray<Vector3> Normals;
            [WriteOnly] public NativeArray<Vector2> UVs;

            public void Execute()
            {
                int dataLength = Indices.Length * 4;
                int offset = dataLength;
                NativeSlice<int> srcIndices = SrcBytes.Slice(0, dataLength).SliceConvert<int>();
                for (int i = 0; i < srcIndices.Length; i += 3)
                {
                    // Copy source indices and reverse winding order to account for shift from
                    // right-handed coordinate system to left-handed.
                    Indices[i] = srcIndices[i];
                    Indices[i + 1] = srcIndices[i + 2];
                    Indices[i + 2] = srcIndices[i + 1];
                }

                int vertexCount = Vertices.Length;
                dataLength = vertexCount * 24;
                NativeSlice<double> srcVertices = SrcBytes.Slice(offset, dataLength).SliceConvert<double>();
                offset += dataLength;
                // Swap Y/Z, apply offset
                for (int i = 0; i < vertexCount; ++i)
                    Vertices[i] = new Vector3((float)(srcVertices[i * 3] + Offset.X),
                                              (float)(srcVertices[i * 3 + 2] + Offset.Z),
                                              (float)(srcVertices[i * 3 + 1] + Offset.Y));

                dataLength = vertexCount * 12;
                NativeSlice<float> srcNormals = SrcBytes.Slice(offset, dataLength).SliceConvert<float>();
                offset += dataLength;
                // Swap Y/Z
                for (int i = 0; i < vertexCount; ++i)
                    Normals[i] = new Vector3(srcNormals[i * 3],
                                             srcNormals[i * 3 + 2],
                                             srcNormals[i * 3 + 1]);

                dataLength = vertexCount * 8;
                NativeSlice<float> srcUVs = SrcBytes.Slice(offset, dataLength).SliceConvert<float>();
                for (int i = 0; i < vertexCount; ++i)
                    UVs[i] = new Vector2(srcUVs[i * 2], srcUVs[i * 2 + 1]);
            }
        }
    }
}
