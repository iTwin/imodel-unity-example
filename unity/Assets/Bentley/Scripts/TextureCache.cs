/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/

using System.Collections.Generic;
using Bentley.Protobuf;
using UnityEngine;

namespace Bentley
{
    public class TextureCache
    {
        private readonly Dictionary<string, Texture2D> _cacheByElementId = new Dictionary<string, Texture2D>();
        private readonly BackendRouter _backend;

        public TextureCache(BackendRouter backend)
        {
            _backend = backend;
        }

        public Texture2D GetById(string elementId)
        {
            Texture2D result;
            if (_cacheByElementId.TryGetValue(elementId, out result)) return result;

            result = new Texture2D(1, 1); // stub in until real texture is received
            _cacheByElementId[elementId] = result;
            _backend.SendRequest(new RequestWrapper { TextureRequest = new TextureRequest { TextureId = elementId } },
                replyWrapper =>
                {
                    result.LoadImage(replyWrapper.TextureReply.TextureData.ToByteArray());
                });

            return result;
        }
    }
}
