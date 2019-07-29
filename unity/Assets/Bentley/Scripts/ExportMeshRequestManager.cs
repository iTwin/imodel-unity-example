/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using System;
using System.Collections.Generic;
using Bentley.Protobuf;
using Google.Protobuf.Collections;
using UnityEngine.Profiling;

namespace Bentley
{
    public class ExportMeshRequestManager
    {
        private readonly BackendRouter _backend;
        private readonly ElementMeshReader _meshReader;

        private readonly RequestWrapper _cachedRequestWrapper;

        private string[] _elementIdExportQueue;
        private int _elementIdExportQueuePosition;
        private int _elementIdExportQueueCount;

        private string[] _filteredElementIdBuffer;
        private int _filteredElementIdCount;
        private readonly Dictionary<string, bool> _alreadyRequestedElements;

        private const int BatchSize = 50;
        private const double ChordTol = 0.001;

        public ExportMeshRequestManager(BackendRouter backend, ElementMeshReader meshReader)
        {
            _backend = backend;
            _meshReader = meshReader;

            const int defaultCapacity = 1000;
            _elementIdExportQueue = new string[defaultCapacity];
            _elementIdExportQueuePosition = 0;
            _elementIdExportQueueCount = 0;
            _filteredElementIdBuffer = new string[defaultCapacity];
            _filteredElementIdCount = 0;
            _alreadyRequestedElements = new Dictionary<string, bool>(defaultCapacity);

            // Fill cached RequestWrapper with dummy entries so we can replace entries by index
            _cachedRequestWrapper = new RequestWrapper { ExportMeshesRequest = new ExportMeshesRequest { ChordTol = ChordTol } };
            RepeatedField<string> elementIds = _cachedRequestWrapper.ExportMeshesRequest.ElementIds;
            for (int i = 0; i < BatchSize; ++i)
                elementIds.Add("");
        }

        public void AddElementIdsToQueue(RepeatedField<string> elementIds)
        {
            Profiler.BeginSample("Bentley.ExportMeshRequestManager.FilterQueue");

            if (_filteredElementIdBuffer.Length < elementIds.Count)
                _filteredElementIdBuffer = new string[Math.Max(elementIds.Count, _filteredElementIdBuffer.Length * 2)];

            for (int i = 0; i < elementIds.Count; ++i)
            {
                string thisId = elementIds[i];
                if (!_alreadyRequestedElements.ContainsKey(thisId))
                {
                    _alreadyRequestedElements[thisId] = true;
                    _filteredElementIdBuffer[_filteredElementIdCount++] = thisId;
                }
            }

            if (_filteredElementIdCount > 0)
            {
                AddFilteredElementIdsToFrontOfQueue(_filteredElementIdBuffer, _filteredElementIdCount);
                _filteredElementIdCount = 0;
            }

            Profiler.EndSample();
        }

        public void OnUpdate()
        {
            if (_elementIdExportQueuePosition >= _elementIdExportQueueCount || _backend.HasPendingRequest)
                return;

            Profiler.BeginSample("Bentley.ExportMeshRequestManager.OnUpdate");

            // This is all to work around RepeatedField generating garbage for each request:
            // * RepeatedField can't use an existing buffer
            // * RepeatedField.Clear releases the backing array, so we can't just Clear and then AddRange
            // * RepeatedField has no option to mark Length vs Capacity, so we can't just reuse a larger RepeatedField

            RequestWrapper requestWrapper;
            int count = Math.Min(_elementIdExportQueueCount - _elementIdExportQueuePosition, BatchSize);
            if (count == BatchSize)
            {
                RepeatedField<string> requestIds = _cachedRequestWrapper.ExportMeshesRequest.ElementIds;
                for (int i = 0; i < count; ++i)
                    requestIds[i] = _elementIdExportQueue[i + _elementIdExportQueuePosition];

                requestWrapper = _cachedRequestWrapper;
            }
            else
            {
                // Doesn't match size of cached MsgWrapper, so just allocate a one-off request object
                requestWrapper = new RequestWrapper() { ExportMeshesRequest = new ExportMeshesRequest { ChordTol = ChordTol } };
                RepeatedField<string> requestIds = requestWrapper.ExportMeshesRequest.ElementIds;
                for (int i = 0; i < count; ++i)
                    requestIds.Add(_elementIdExportQueue[i + _elementIdExportQueuePosition]);
            }

            _elementIdExportQueuePosition += count;
            _backend.SendRequest(requestWrapper, msgWrapper => { _meshReader.QueueForRead(msgWrapper.ExportMeshesReply); });

            Profiler.EndSample();
        }

        private void AddFilteredElementIdsToFrontOfQueue(string[] elementIds, int count)
        {
            int unprocessedInQueue = _elementIdExportQueueCount - _elementIdExportQueuePosition;
            if (0 == unprocessedInQueue)
            {
                // Queue is empty, just copy the new IDs in
                if (_elementIdExportQueue.Length < count)
                    _elementIdExportQueue = new string[Math.Max(count, 2 * _elementIdExportQueue.Length)];

                Array.Copy(elementIds, 0, _elementIdExportQueue, 0, count);
                _elementIdExportQueueCount = count;
                _elementIdExportQueuePosition = 0;
                return;
            }

            int newCount = unprocessedInQueue + count;
            if (newCount > _elementIdExportQueue.Length)
            {
                // Queue already has entries, and the new IDs would overflow capacity
                var newQueue = new string[Math.Max(newCount, 2 * _elementIdExportQueueCount)];
                Array.Copy(elementIds, 0, newQueue, 0, count);
                Array.Copy(_elementIdExportQueue, _elementIdExportQueuePosition, newQueue, count, unprocessedInQueue);
                _elementIdExportQueue = newQueue;
                _elementIdExportQueuePosition = 0;
                _elementIdExportQueueCount = newCount;
                return;
            }

            // Queue already has entries, but there's still sufficient space if they're shifted
            Array.Copy(_elementIdExportQueue, _elementIdExportQueuePosition, _elementIdExportQueue, count, unprocessedInQueue);
            Array.Copy(elementIds, 0, _elementIdExportQueue, 0, count);
            _elementIdExportQueuePosition = 0;
            _elementIdExportQueueCount = newCount;
        }
    }
}
