/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Net.Sockets;
using Bentley.Protobuf;
using Google.Protobuf;
using UnityEngine;
using UnityEngine.Profiling;
using WebSocket4Net;

namespace Bentley
{
    public class BackendRouter
    {
        private readonly WebSocket _webSocket;
        private readonly ConcurrentQueue<ReplyWrapper> _replyQueue = new ConcurrentQueue<ReplyWrapper>();

        private readonly Dictionary<uint, Action<ReplyWrapper>> _callbackMap = new Dictionary<uint, Action<ReplyWrapper>>();
        private uint _callbackCounter;

        private byte[] _requestMsgBuffer;

        public BackendRouter(string address, Action onConnected)
        {
            _requestMsgBuffer = new byte[4096]; // matches CodedOutputStream default size

            _webSocket = new WebSocket(address);

            // All handlers can be called outside of main thread, must enqueue for processing on main thread
            _webSocket.DataReceived += (sender, args) => _replyQueue.Enqueue(ReplyWrapper.Parser.ParseFrom(args.Data));
            _webSocket.Opened += (sender, args) =>
            {
                Debug.Log("Connected to " + address);
                onConnected();
            };
            _webSocket.Closed += (sender, args) => Debug.Log("Disconnected from " + address);
            _webSocket.Error += (sender, args) =>
            {
                var socketException = args.Exception as SocketException;
                if (socketException != null && socketException.SocketErrorCode == SocketError.AddressNotAvailable)
                    Debug.Log("Did you forget to start the node server? Look at README.md in the project root.");

                Debug.LogError(args.Exception);
            };

            Debug.Log("Attempting connection to " + address);
            _webSocket.Open();
        }

        public bool HasPendingRequest => _callbackMap.Count != 0;
        public void Shutdown() { if (_webSocket.State == WebSocketState.Open) _webSocket.Close("client closed"); }

        public void OnUpdate()
        {
            Profiler.BeginSample("Bentley.BackendRouter.OnUpdate");

            while (_replyQueue.TryDequeue(out ReplyWrapper wrapper))
            {
                if (wrapper.RequestId == 0) throw new Exception(wrapper.MsgCase + " missing RequestId");

                if (!_callbackMap.TryGetValue(wrapper.RequestId, out Action<ReplyWrapper> callback))
                    throw new Exception(wrapper.MsgCase + " has no registered callback");

                if (!wrapper.RequestHasMoreReplies) _callbackMap.Remove(wrapper.RequestId);

                callback(wrapper);
            }

            Profiler.EndSample();
        }

        public void SendRequest(RequestWrapper msg, Action<ReplyWrapper> callback)
        {
            Profiler.BeginSample("Bentley.BackendRouter.SendRequest");

            unchecked { ++_callbackCounter; } // wrap is fine
            _callbackMap[_callbackCounter] = callback;
            msg.RequestId = _callbackCounter;

            int msgSize = msg.CalculateSize();
            if (msgSize > _requestMsgBuffer.Length)
                _requestMsgBuffer = new byte[Math.Max(msgSize, _requestMsgBuffer.Length * 2)];

            var stream = new CodedOutputStream(_requestMsgBuffer); // Can't reuse CodedOutputStream :(

            msg.WriteTo(stream);
            _webSocket.Send(_requestMsgBuffer, 0, msgSize);

            Profiler.EndSample();
        }
    }
}
