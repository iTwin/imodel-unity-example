/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.RequestWrapper = (function() {

    /**
     * Properties of a RequestWrapper.
     * @exports IRequestWrapper
     * @interface IRequestWrapper
     * @property {number|null} [requestId] RequestWrapper requestId
     * @property {ISelectElementIdsRequest|null} [selectElementIdsRequest] RequestWrapper selectElementIdsRequest
     * @property {IExportMeshesRequest|null} [exportMeshesRequest] RequestWrapper exportMeshesRequest
     * @property {ITextureRequest|null} [textureRequest] RequestWrapper textureRequest
     * @property {IElementTooltipRequest|null} [elementTooltipRequest] RequestWrapper elementTooltipRequest
     * @property {IProjectExtentsRequest|null} [projectExtentsRequest] RequestWrapper projectExtentsRequest
     * @property {ICameraViewsRequest|null} [cameraViewsRequest] RequestWrapper cameraViewsRequest
     * @property {IElementPropertiesRequest|null} [elementPropertiesRequest] RequestWrapper elementPropertiesRequest
     * @property {IElementAABBsRequest|null} [elementAABBsRequest] RequestWrapper elementAABBsRequest
     */

    /**
     * Constructs a new RequestWrapper.
     * @exports RequestWrapper
     * @classdesc Represents a RequestWrapper.
     * @implements IRequestWrapper
     * @constructor
     * @param {IRequestWrapper=} [properties] Properties to set
     */
    function RequestWrapper(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestWrapper requestId.
     * @member {number} requestId
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.requestId = 0;

    /**
     * RequestWrapper selectElementIdsRequest.
     * @member {ISelectElementIdsRequest|null|undefined} selectElementIdsRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.selectElementIdsRequest = null;

    /**
     * RequestWrapper exportMeshesRequest.
     * @member {IExportMeshesRequest|null|undefined} exportMeshesRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.exportMeshesRequest = null;

    /**
     * RequestWrapper textureRequest.
     * @member {ITextureRequest|null|undefined} textureRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.textureRequest = null;

    /**
     * RequestWrapper elementTooltipRequest.
     * @member {IElementTooltipRequest|null|undefined} elementTooltipRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.elementTooltipRequest = null;

    /**
     * RequestWrapper projectExtentsRequest.
     * @member {IProjectExtentsRequest|null|undefined} projectExtentsRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.projectExtentsRequest = null;

    /**
     * RequestWrapper cameraViewsRequest.
     * @member {ICameraViewsRequest|null|undefined} cameraViewsRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.cameraViewsRequest = null;

    /**
     * RequestWrapper elementPropertiesRequest.
     * @member {IElementPropertiesRequest|null|undefined} elementPropertiesRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.elementPropertiesRequest = null;

    /**
     * RequestWrapper elementAABBsRequest.
     * @member {IElementAABBsRequest|null|undefined} elementAABBsRequest
     * @memberof RequestWrapper
     * @instance
     */
    RequestWrapper.prototype.elementAABBsRequest = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RequestWrapper msg.
     * @member {"selectElementIdsRequest"|"exportMeshesRequest"|"textureRequest"|"elementTooltipRequest"|"projectExtentsRequest"|"cameraViewsRequest"|"elementPropertiesRequest"|"elementAABBsRequest"|undefined} msg
     * @memberof RequestWrapper
     * @instance
     */
    Object.defineProperty(RequestWrapper.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["selectElementIdsRequest", "exportMeshesRequest", "textureRequest", "elementTooltipRequest", "projectExtentsRequest", "cameraViewsRequest", "elementPropertiesRequest", "elementAABBsRequest"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new RequestWrapper instance using the specified properties.
     * @function create
     * @memberof RequestWrapper
     * @static
     * @param {IRequestWrapper=} [properties] Properties to set
     * @returns {RequestWrapper} RequestWrapper instance
     */
    RequestWrapper.create = function create(properties) {
        return new RequestWrapper(properties);
    };

    /**
     * Encodes the specified RequestWrapper message. Does not implicitly {@link RequestWrapper.verify|verify} messages.
     * @function encode
     * @memberof RequestWrapper
     * @static
     * @param {IRequestWrapper} message RequestWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestWrapper.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
        if (message.selectElementIdsRequest != null && Object.hasOwnProperty.call(message, "selectElementIdsRequest"))
            $root.SelectElementIdsRequest.encode(message.selectElementIdsRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.exportMeshesRequest != null && Object.hasOwnProperty.call(message, "exportMeshesRequest"))
            $root.ExportMeshesRequest.encode(message.exportMeshesRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.textureRequest != null && Object.hasOwnProperty.call(message, "textureRequest"))
            $root.TextureRequest.encode(message.textureRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.elementTooltipRequest != null && Object.hasOwnProperty.call(message, "elementTooltipRequest"))
            $root.ElementTooltipRequest.encode(message.elementTooltipRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.projectExtentsRequest != null && Object.hasOwnProperty.call(message, "projectExtentsRequest"))
            $root.ProjectExtentsRequest.encode(message.projectExtentsRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.cameraViewsRequest != null && Object.hasOwnProperty.call(message, "cameraViewsRequest"))
            $root.CameraViewsRequest.encode(message.cameraViewsRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.elementPropertiesRequest != null && Object.hasOwnProperty.call(message, "elementPropertiesRequest"))
            $root.ElementPropertiesRequest.encode(message.elementPropertiesRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.elementAABBsRequest != null && Object.hasOwnProperty.call(message, "elementAABBsRequest"))
            $root.ElementAABBsRequest.encode(message.elementAABBsRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RequestWrapper message, length delimited. Does not implicitly {@link RequestWrapper.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestWrapper
     * @static
     * @param {IRequestWrapper} message RequestWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestWrapper.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestWrapper message from the specified reader or buffer.
     * @function decode
     * @memberof RequestWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestWrapper} RequestWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestWrapper.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestWrapper();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.uint32();
                break;
            case 2:
                message.selectElementIdsRequest = $root.SelectElementIdsRequest.decode(reader, reader.uint32());
                break;
            case 3:
                message.exportMeshesRequest = $root.ExportMeshesRequest.decode(reader, reader.uint32());
                break;
            case 4:
                message.textureRequest = $root.TextureRequest.decode(reader, reader.uint32());
                break;
            case 5:
                message.elementTooltipRequest = $root.ElementTooltipRequest.decode(reader, reader.uint32());
                break;
            case 6:
                message.projectExtentsRequest = $root.ProjectExtentsRequest.decode(reader, reader.uint32());
                break;
            case 7:
                message.cameraViewsRequest = $root.CameraViewsRequest.decode(reader, reader.uint32());
                break;
            case 8:
                message.elementPropertiesRequest = $root.ElementPropertiesRequest.decode(reader, reader.uint32());
                break;
            case 9:
                message.elementAABBsRequest = $root.ElementAABBsRequest.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestWrapper message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestWrapper} RequestWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestWrapper.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestWrapper message.
     * @function verify
     * @memberof RequestWrapper
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestWrapper.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
        if (message.selectElementIdsRequest != null && message.hasOwnProperty("selectElementIdsRequest")) {
            properties.msg = 1;
            {
                var error = $root.SelectElementIdsRequest.verify(message.selectElementIdsRequest);
                if (error)
                    return "selectElementIdsRequest." + error;
            }
        }
        if (message.exportMeshesRequest != null && message.hasOwnProperty("exportMeshesRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ExportMeshesRequest.verify(message.exportMeshesRequest);
                if (error)
                    return "exportMeshesRequest." + error;
            }
        }
        if (message.textureRequest != null && message.hasOwnProperty("textureRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.TextureRequest.verify(message.textureRequest);
                if (error)
                    return "textureRequest." + error;
            }
        }
        if (message.elementTooltipRequest != null && message.hasOwnProperty("elementTooltipRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ElementTooltipRequest.verify(message.elementTooltipRequest);
                if (error)
                    return "elementTooltipRequest." + error;
            }
        }
        if (message.projectExtentsRequest != null && message.hasOwnProperty("projectExtentsRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ProjectExtentsRequest.verify(message.projectExtentsRequest);
                if (error)
                    return "projectExtentsRequest." + error;
            }
        }
        if (message.cameraViewsRequest != null && message.hasOwnProperty("cameraViewsRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.CameraViewsRequest.verify(message.cameraViewsRequest);
                if (error)
                    return "cameraViewsRequest." + error;
            }
        }
        if (message.elementPropertiesRequest != null && message.hasOwnProperty("elementPropertiesRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ElementPropertiesRequest.verify(message.elementPropertiesRequest);
                if (error)
                    return "elementPropertiesRequest." + error;
            }
        }
        if (message.elementAABBsRequest != null && message.hasOwnProperty("elementAABBsRequest")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ElementAABBsRequest.verify(message.elementAABBsRequest);
                if (error)
                    return "elementAABBsRequest." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RequestWrapper message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestWrapper
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestWrapper} RequestWrapper
     */
    RequestWrapper.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestWrapper)
            return object;
        var message = new $root.RequestWrapper();
        if (object.requestId != null)
            message.requestId = object.requestId >>> 0;
        if (object.selectElementIdsRequest != null) {
            if (typeof object.selectElementIdsRequest !== "object")
                throw TypeError(".RequestWrapper.selectElementIdsRequest: object expected");
            message.selectElementIdsRequest = $root.SelectElementIdsRequest.fromObject(object.selectElementIdsRequest);
        }
        if (object.exportMeshesRequest != null) {
            if (typeof object.exportMeshesRequest !== "object")
                throw TypeError(".RequestWrapper.exportMeshesRequest: object expected");
            message.exportMeshesRequest = $root.ExportMeshesRequest.fromObject(object.exportMeshesRequest);
        }
        if (object.textureRequest != null) {
            if (typeof object.textureRequest !== "object")
                throw TypeError(".RequestWrapper.textureRequest: object expected");
            message.textureRequest = $root.TextureRequest.fromObject(object.textureRequest);
        }
        if (object.elementTooltipRequest != null) {
            if (typeof object.elementTooltipRequest !== "object")
                throw TypeError(".RequestWrapper.elementTooltipRequest: object expected");
            message.elementTooltipRequest = $root.ElementTooltipRequest.fromObject(object.elementTooltipRequest);
        }
        if (object.projectExtentsRequest != null) {
            if (typeof object.projectExtentsRequest !== "object")
                throw TypeError(".RequestWrapper.projectExtentsRequest: object expected");
            message.projectExtentsRequest = $root.ProjectExtentsRequest.fromObject(object.projectExtentsRequest);
        }
        if (object.cameraViewsRequest != null) {
            if (typeof object.cameraViewsRequest !== "object")
                throw TypeError(".RequestWrapper.cameraViewsRequest: object expected");
            message.cameraViewsRequest = $root.CameraViewsRequest.fromObject(object.cameraViewsRequest);
        }
        if (object.elementPropertiesRequest != null) {
            if (typeof object.elementPropertiesRequest !== "object")
                throw TypeError(".RequestWrapper.elementPropertiesRequest: object expected");
            message.elementPropertiesRequest = $root.ElementPropertiesRequest.fromObject(object.elementPropertiesRequest);
        }
        if (object.elementAABBsRequest != null) {
            if (typeof object.elementAABBsRequest !== "object")
                throw TypeError(".RequestWrapper.elementAABBsRequest: object expected");
            message.elementAABBsRequest = $root.ElementAABBsRequest.fromObject(object.elementAABBsRequest);
        }
        return message;
    };

    /**
     * Creates a plain object from a RequestWrapper message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestWrapper
     * @static
     * @param {RequestWrapper} message RequestWrapper
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestWrapper.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.requestId = 0;
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.selectElementIdsRequest != null && message.hasOwnProperty("selectElementIdsRequest")) {
            object.selectElementIdsRequest = $root.SelectElementIdsRequest.toObject(message.selectElementIdsRequest, options);
            if (options.oneofs)
                object.msg = "selectElementIdsRequest";
        }
        if (message.exportMeshesRequest != null && message.hasOwnProperty("exportMeshesRequest")) {
            object.exportMeshesRequest = $root.ExportMeshesRequest.toObject(message.exportMeshesRequest, options);
            if (options.oneofs)
                object.msg = "exportMeshesRequest";
        }
        if (message.textureRequest != null && message.hasOwnProperty("textureRequest")) {
            object.textureRequest = $root.TextureRequest.toObject(message.textureRequest, options);
            if (options.oneofs)
                object.msg = "textureRequest";
        }
        if (message.elementTooltipRequest != null && message.hasOwnProperty("elementTooltipRequest")) {
            object.elementTooltipRequest = $root.ElementTooltipRequest.toObject(message.elementTooltipRequest, options);
            if (options.oneofs)
                object.msg = "elementTooltipRequest";
        }
        if (message.projectExtentsRequest != null && message.hasOwnProperty("projectExtentsRequest")) {
            object.projectExtentsRequest = $root.ProjectExtentsRequest.toObject(message.projectExtentsRequest, options);
            if (options.oneofs)
                object.msg = "projectExtentsRequest";
        }
        if (message.cameraViewsRequest != null && message.hasOwnProperty("cameraViewsRequest")) {
            object.cameraViewsRequest = $root.CameraViewsRequest.toObject(message.cameraViewsRequest, options);
            if (options.oneofs)
                object.msg = "cameraViewsRequest";
        }
        if (message.elementPropertiesRequest != null && message.hasOwnProperty("elementPropertiesRequest")) {
            object.elementPropertiesRequest = $root.ElementPropertiesRequest.toObject(message.elementPropertiesRequest, options);
            if (options.oneofs)
                object.msg = "elementPropertiesRequest";
        }
        if (message.elementAABBsRequest != null && message.hasOwnProperty("elementAABBsRequest")) {
            object.elementAABBsRequest = $root.ElementAABBsRequest.toObject(message.elementAABBsRequest, options);
            if (options.oneofs)
                object.msg = "elementAABBsRequest";
        }
        return object;
    };

    /**
     * Converts this RequestWrapper to JSON.
     * @function toJSON
     * @memberof RequestWrapper
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestWrapper.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestWrapper;
})();

$root.ReplyWrapper = (function() {

    /**
     * Properties of a ReplyWrapper.
     * @exports IReplyWrapper
     * @interface IReplyWrapper
     * @property {number|null} [requestId] ReplyWrapper requestId
     * @property {boolean|null} [requestHasMoreReplies] ReplyWrapper requestHasMoreReplies
     * @property {ISelectElementIdsReply|null} [selectElementIdsReply] ReplyWrapper selectElementIdsReply
     * @property {IExportMeshesReply|null} [exportMeshesReply] ReplyWrapper exportMeshesReply
     * @property {ITextureReply|null} [textureReply] ReplyWrapper textureReply
     * @property {IElementTooltipReply|null} [elementTooltipReply] ReplyWrapper elementTooltipReply
     * @property {IProjectExtentsReply|null} [projectExtentsReply] ReplyWrapper projectExtentsReply
     * @property {ICameraViewsReply|null} [cameraViewsReply] ReplyWrapper cameraViewsReply
     * @property {IElementPropertiesReply|null} [elementPropertiesReply] ReplyWrapper elementPropertiesReply
     * @property {IElementAABBsReply|null} [elementAABBsReply] ReplyWrapper elementAABBsReply
     */

    /**
     * Constructs a new ReplyWrapper.
     * @exports ReplyWrapper
     * @classdesc Represents a ReplyWrapper.
     * @implements IReplyWrapper
     * @constructor
     * @param {IReplyWrapper=} [properties] Properties to set
     */
    function ReplyWrapper(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReplyWrapper requestId.
     * @member {number} requestId
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.requestId = 0;

    /**
     * ReplyWrapper requestHasMoreReplies.
     * @member {boolean} requestHasMoreReplies
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.requestHasMoreReplies = false;

    /**
     * ReplyWrapper selectElementIdsReply.
     * @member {ISelectElementIdsReply|null|undefined} selectElementIdsReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.selectElementIdsReply = null;

    /**
     * ReplyWrapper exportMeshesReply.
     * @member {IExportMeshesReply|null|undefined} exportMeshesReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.exportMeshesReply = null;

    /**
     * ReplyWrapper textureReply.
     * @member {ITextureReply|null|undefined} textureReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.textureReply = null;

    /**
     * ReplyWrapper elementTooltipReply.
     * @member {IElementTooltipReply|null|undefined} elementTooltipReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.elementTooltipReply = null;

    /**
     * ReplyWrapper projectExtentsReply.
     * @member {IProjectExtentsReply|null|undefined} projectExtentsReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.projectExtentsReply = null;

    /**
     * ReplyWrapper cameraViewsReply.
     * @member {ICameraViewsReply|null|undefined} cameraViewsReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.cameraViewsReply = null;

    /**
     * ReplyWrapper elementPropertiesReply.
     * @member {IElementPropertiesReply|null|undefined} elementPropertiesReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.elementPropertiesReply = null;

    /**
     * ReplyWrapper elementAABBsReply.
     * @member {IElementAABBsReply|null|undefined} elementAABBsReply
     * @memberof ReplyWrapper
     * @instance
     */
    ReplyWrapper.prototype.elementAABBsReply = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ReplyWrapper msg.
     * @member {"selectElementIdsReply"|"exportMeshesReply"|"textureReply"|"elementTooltipReply"|"projectExtentsReply"|"cameraViewsReply"|"elementPropertiesReply"|"elementAABBsReply"|undefined} msg
     * @memberof ReplyWrapper
     * @instance
     */
    Object.defineProperty(ReplyWrapper.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["selectElementIdsReply", "exportMeshesReply", "textureReply", "elementTooltipReply", "projectExtentsReply", "cameraViewsReply", "elementPropertiesReply", "elementAABBsReply"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ReplyWrapper instance using the specified properties.
     * @function create
     * @memberof ReplyWrapper
     * @static
     * @param {IReplyWrapper=} [properties] Properties to set
     * @returns {ReplyWrapper} ReplyWrapper instance
     */
    ReplyWrapper.create = function create(properties) {
        return new ReplyWrapper(properties);
    };

    /**
     * Encodes the specified ReplyWrapper message. Does not implicitly {@link ReplyWrapper.verify|verify} messages.
     * @function encode
     * @memberof ReplyWrapper
     * @static
     * @param {IReplyWrapper} message ReplyWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReplyWrapper.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
        if (message.requestHasMoreReplies != null && Object.hasOwnProperty.call(message, "requestHasMoreReplies"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.requestHasMoreReplies);
        if (message.selectElementIdsReply != null && Object.hasOwnProperty.call(message, "selectElementIdsReply"))
            $root.SelectElementIdsReply.encode(message.selectElementIdsReply, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.exportMeshesReply != null && Object.hasOwnProperty.call(message, "exportMeshesReply"))
            $root.ExportMeshesReply.encode(message.exportMeshesReply, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.textureReply != null && Object.hasOwnProperty.call(message, "textureReply"))
            $root.TextureReply.encode(message.textureReply, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.elementTooltipReply != null && Object.hasOwnProperty.call(message, "elementTooltipReply"))
            $root.ElementTooltipReply.encode(message.elementTooltipReply, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.projectExtentsReply != null && Object.hasOwnProperty.call(message, "projectExtentsReply"))
            $root.ProjectExtentsReply.encode(message.projectExtentsReply, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.cameraViewsReply != null && Object.hasOwnProperty.call(message, "cameraViewsReply"))
            $root.CameraViewsReply.encode(message.cameraViewsReply, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.elementPropertiesReply != null && Object.hasOwnProperty.call(message, "elementPropertiesReply"))
            $root.ElementPropertiesReply.encode(message.elementPropertiesReply, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.elementAABBsReply != null && Object.hasOwnProperty.call(message, "elementAABBsReply"))
            $root.ElementAABBsReply.encode(message.elementAABBsReply, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ReplyWrapper message, length delimited. Does not implicitly {@link ReplyWrapper.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReplyWrapper
     * @static
     * @param {IReplyWrapper} message ReplyWrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReplyWrapper.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReplyWrapper message from the specified reader or buffer.
     * @function decode
     * @memberof ReplyWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReplyWrapper} ReplyWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReplyWrapper.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReplyWrapper();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.uint32();
                break;
            case 2:
                message.requestHasMoreReplies = reader.bool();
                break;
            case 3:
                message.selectElementIdsReply = $root.SelectElementIdsReply.decode(reader, reader.uint32());
                break;
            case 4:
                message.exportMeshesReply = $root.ExportMeshesReply.decode(reader, reader.uint32());
                break;
            case 5:
                message.textureReply = $root.TextureReply.decode(reader, reader.uint32());
                break;
            case 6:
                message.elementTooltipReply = $root.ElementTooltipReply.decode(reader, reader.uint32());
                break;
            case 7:
                message.projectExtentsReply = $root.ProjectExtentsReply.decode(reader, reader.uint32());
                break;
            case 8:
                message.cameraViewsReply = $root.CameraViewsReply.decode(reader, reader.uint32());
                break;
            case 9:
                message.elementPropertiesReply = $root.ElementPropertiesReply.decode(reader, reader.uint32());
                break;
            case 10:
                message.elementAABBsReply = $root.ElementAABBsReply.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReplyWrapper message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReplyWrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReplyWrapper} ReplyWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReplyWrapper.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReplyWrapper message.
     * @function verify
     * @memberof ReplyWrapper
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReplyWrapper.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
        if (message.requestHasMoreReplies != null && message.hasOwnProperty("requestHasMoreReplies"))
            if (typeof message.requestHasMoreReplies !== "boolean")
                return "requestHasMoreReplies: boolean expected";
        if (message.selectElementIdsReply != null && message.hasOwnProperty("selectElementIdsReply")) {
            properties.msg = 1;
            {
                var error = $root.SelectElementIdsReply.verify(message.selectElementIdsReply);
                if (error)
                    return "selectElementIdsReply." + error;
            }
        }
        if (message.exportMeshesReply != null && message.hasOwnProperty("exportMeshesReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ExportMeshesReply.verify(message.exportMeshesReply);
                if (error)
                    return "exportMeshesReply." + error;
            }
        }
        if (message.textureReply != null && message.hasOwnProperty("textureReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.TextureReply.verify(message.textureReply);
                if (error)
                    return "textureReply." + error;
            }
        }
        if (message.elementTooltipReply != null && message.hasOwnProperty("elementTooltipReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ElementTooltipReply.verify(message.elementTooltipReply);
                if (error)
                    return "elementTooltipReply." + error;
            }
        }
        if (message.projectExtentsReply != null && message.hasOwnProperty("projectExtentsReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ProjectExtentsReply.verify(message.projectExtentsReply);
                if (error)
                    return "projectExtentsReply." + error;
            }
        }
        if (message.cameraViewsReply != null && message.hasOwnProperty("cameraViewsReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.CameraViewsReply.verify(message.cameraViewsReply);
                if (error)
                    return "cameraViewsReply." + error;
            }
        }
        if (message.elementPropertiesReply != null && message.hasOwnProperty("elementPropertiesReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ElementPropertiesReply.verify(message.elementPropertiesReply);
                if (error)
                    return "elementPropertiesReply." + error;
            }
        }
        if (message.elementAABBsReply != null && message.hasOwnProperty("elementAABBsReply")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ElementAABBsReply.verify(message.elementAABBsReply);
                if (error)
                    return "elementAABBsReply." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ReplyWrapper message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReplyWrapper
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReplyWrapper} ReplyWrapper
     */
    ReplyWrapper.fromObject = function fromObject(object) {
        if (object instanceof $root.ReplyWrapper)
            return object;
        var message = new $root.ReplyWrapper();
        if (object.requestId != null)
            message.requestId = object.requestId >>> 0;
        if (object.requestHasMoreReplies != null)
            message.requestHasMoreReplies = Boolean(object.requestHasMoreReplies);
        if (object.selectElementIdsReply != null) {
            if (typeof object.selectElementIdsReply !== "object")
                throw TypeError(".ReplyWrapper.selectElementIdsReply: object expected");
            message.selectElementIdsReply = $root.SelectElementIdsReply.fromObject(object.selectElementIdsReply);
        }
        if (object.exportMeshesReply != null) {
            if (typeof object.exportMeshesReply !== "object")
                throw TypeError(".ReplyWrapper.exportMeshesReply: object expected");
            message.exportMeshesReply = $root.ExportMeshesReply.fromObject(object.exportMeshesReply);
        }
        if (object.textureReply != null) {
            if (typeof object.textureReply !== "object")
                throw TypeError(".ReplyWrapper.textureReply: object expected");
            message.textureReply = $root.TextureReply.fromObject(object.textureReply);
        }
        if (object.elementTooltipReply != null) {
            if (typeof object.elementTooltipReply !== "object")
                throw TypeError(".ReplyWrapper.elementTooltipReply: object expected");
            message.elementTooltipReply = $root.ElementTooltipReply.fromObject(object.elementTooltipReply);
        }
        if (object.projectExtentsReply != null) {
            if (typeof object.projectExtentsReply !== "object")
                throw TypeError(".ReplyWrapper.projectExtentsReply: object expected");
            message.projectExtentsReply = $root.ProjectExtentsReply.fromObject(object.projectExtentsReply);
        }
        if (object.cameraViewsReply != null) {
            if (typeof object.cameraViewsReply !== "object")
                throw TypeError(".ReplyWrapper.cameraViewsReply: object expected");
            message.cameraViewsReply = $root.CameraViewsReply.fromObject(object.cameraViewsReply);
        }
        if (object.elementPropertiesReply != null) {
            if (typeof object.elementPropertiesReply !== "object")
                throw TypeError(".ReplyWrapper.elementPropertiesReply: object expected");
            message.elementPropertiesReply = $root.ElementPropertiesReply.fromObject(object.elementPropertiesReply);
        }
        if (object.elementAABBsReply != null) {
            if (typeof object.elementAABBsReply !== "object")
                throw TypeError(".ReplyWrapper.elementAABBsReply: object expected");
            message.elementAABBsReply = $root.ElementAABBsReply.fromObject(object.elementAABBsReply);
        }
        return message;
    };

    /**
     * Creates a plain object from a ReplyWrapper message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReplyWrapper
     * @static
     * @param {ReplyWrapper} message ReplyWrapper
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReplyWrapper.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = 0;
            object.requestHasMoreReplies = false;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.requestHasMoreReplies != null && message.hasOwnProperty("requestHasMoreReplies"))
            object.requestHasMoreReplies = message.requestHasMoreReplies;
        if (message.selectElementIdsReply != null && message.hasOwnProperty("selectElementIdsReply")) {
            object.selectElementIdsReply = $root.SelectElementIdsReply.toObject(message.selectElementIdsReply, options);
            if (options.oneofs)
                object.msg = "selectElementIdsReply";
        }
        if (message.exportMeshesReply != null && message.hasOwnProperty("exportMeshesReply")) {
            object.exportMeshesReply = $root.ExportMeshesReply.toObject(message.exportMeshesReply, options);
            if (options.oneofs)
                object.msg = "exportMeshesReply";
        }
        if (message.textureReply != null && message.hasOwnProperty("textureReply")) {
            object.textureReply = $root.TextureReply.toObject(message.textureReply, options);
            if (options.oneofs)
                object.msg = "textureReply";
        }
        if (message.elementTooltipReply != null && message.hasOwnProperty("elementTooltipReply")) {
            object.elementTooltipReply = $root.ElementTooltipReply.toObject(message.elementTooltipReply, options);
            if (options.oneofs)
                object.msg = "elementTooltipReply";
        }
        if (message.projectExtentsReply != null && message.hasOwnProperty("projectExtentsReply")) {
            object.projectExtentsReply = $root.ProjectExtentsReply.toObject(message.projectExtentsReply, options);
            if (options.oneofs)
                object.msg = "projectExtentsReply";
        }
        if (message.cameraViewsReply != null && message.hasOwnProperty("cameraViewsReply")) {
            object.cameraViewsReply = $root.CameraViewsReply.toObject(message.cameraViewsReply, options);
            if (options.oneofs)
                object.msg = "cameraViewsReply";
        }
        if (message.elementPropertiesReply != null && message.hasOwnProperty("elementPropertiesReply")) {
            object.elementPropertiesReply = $root.ElementPropertiesReply.toObject(message.elementPropertiesReply, options);
            if (options.oneofs)
                object.msg = "elementPropertiesReply";
        }
        if (message.elementAABBsReply != null && message.hasOwnProperty("elementAABBsReply")) {
            object.elementAABBsReply = $root.ElementAABBsReply.toObject(message.elementAABBsReply, options);
            if (options.oneofs)
                object.msg = "elementAABBsReply";
        }
        return object;
    };

    /**
     * Converts this ReplyWrapper to JSON.
     * @function toJSON
     * @memberof ReplyWrapper
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReplyWrapper.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReplyWrapper;
})();

$root.SelectElementIdsRequest = (function() {

    /**
     * Properties of a SelectElementIdsRequest.
     * @exports ISelectElementIdsRequest
     * @interface ISelectElementIdsRequest
     * @property {string|null} [selectFilter] SelectElementIdsRequest selectFilter
     */

    /**
     * Constructs a new SelectElementIdsRequest.
     * @exports SelectElementIdsRequest
     * @classdesc Represents a SelectElementIdsRequest.
     * @implements ISelectElementIdsRequest
     * @constructor
     * @param {ISelectElementIdsRequest=} [properties] Properties to set
     */
    function SelectElementIdsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SelectElementIdsRequest selectFilter.
     * @member {string} selectFilter
     * @memberof SelectElementIdsRequest
     * @instance
     */
    SelectElementIdsRequest.prototype.selectFilter = "";

    /**
     * Creates a new SelectElementIdsRequest instance using the specified properties.
     * @function create
     * @memberof SelectElementIdsRequest
     * @static
     * @param {ISelectElementIdsRequest=} [properties] Properties to set
     * @returns {SelectElementIdsRequest} SelectElementIdsRequest instance
     */
    SelectElementIdsRequest.create = function create(properties) {
        return new SelectElementIdsRequest(properties);
    };

    /**
     * Encodes the specified SelectElementIdsRequest message. Does not implicitly {@link SelectElementIdsRequest.verify|verify} messages.
     * @function encode
     * @memberof SelectElementIdsRequest
     * @static
     * @param {ISelectElementIdsRequest} message SelectElementIdsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectElementIdsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.selectFilter != null && Object.hasOwnProperty.call(message, "selectFilter"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.selectFilter);
        return writer;
    };

    /**
     * Encodes the specified SelectElementIdsRequest message, length delimited. Does not implicitly {@link SelectElementIdsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SelectElementIdsRequest
     * @static
     * @param {ISelectElementIdsRequest} message SelectElementIdsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectElementIdsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SelectElementIdsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SelectElementIdsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SelectElementIdsRequest} SelectElementIdsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectElementIdsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SelectElementIdsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.selectFilter = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SelectElementIdsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SelectElementIdsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SelectElementIdsRequest} SelectElementIdsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectElementIdsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SelectElementIdsRequest message.
     * @function verify
     * @memberof SelectElementIdsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SelectElementIdsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.selectFilter != null && message.hasOwnProperty("selectFilter"))
            if (!$util.isString(message.selectFilter))
                return "selectFilter: string expected";
        return null;
    };

    /**
     * Creates a SelectElementIdsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SelectElementIdsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SelectElementIdsRequest} SelectElementIdsRequest
     */
    SelectElementIdsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SelectElementIdsRequest)
            return object;
        var message = new $root.SelectElementIdsRequest();
        if (object.selectFilter != null)
            message.selectFilter = String(object.selectFilter);
        return message;
    };

    /**
     * Creates a plain object from a SelectElementIdsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SelectElementIdsRequest
     * @static
     * @param {SelectElementIdsRequest} message SelectElementIdsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SelectElementIdsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.selectFilter = "";
        if (message.selectFilter != null && message.hasOwnProperty("selectFilter"))
            object.selectFilter = message.selectFilter;
        return object;
    };

    /**
     * Converts this SelectElementIdsRequest to JSON.
     * @function toJSON
     * @memberof SelectElementIdsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SelectElementIdsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SelectElementIdsRequest;
})();

$root.SelectElementIdsReply = (function() {

    /**
     * Properties of a SelectElementIdsReply.
     * @exports ISelectElementIdsReply
     * @interface ISelectElementIdsReply
     * @property {Array.<string>|null} [elementIds] SelectElementIdsReply elementIds
     */

    /**
     * Constructs a new SelectElementIdsReply.
     * @exports SelectElementIdsReply
     * @classdesc Represents a SelectElementIdsReply.
     * @implements ISelectElementIdsReply
     * @constructor
     * @param {ISelectElementIdsReply=} [properties] Properties to set
     */
    function SelectElementIdsReply(properties) {
        this.elementIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SelectElementIdsReply elementIds.
     * @member {Array.<string>} elementIds
     * @memberof SelectElementIdsReply
     * @instance
     */
    SelectElementIdsReply.prototype.elementIds = $util.emptyArray;

    /**
     * Creates a new SelectElementIdsReply instance using the specified properties.
     * @function create
     * @memberof SelectElementIdsReply
     * @static
     * @param {ISelectElementIdsReply=} [properties] Properties to set
     * @returns {SelectElementIdsReply} SelectElementIdsReply instance
     */
    SelectElementIdsReply.create = function create(properties) {
        return new SelectElementIdsReply(properties);
    };

    /**
     * Encodes the specified SelectElementIdsReply message. Does not implicitly {@link SelectElementIdsReply.verify|verify} messages.
     * @function encode
     * @memberof SelectElementIdsReply
     * @static
     * @param {ISelectElementIdsReply} message SelectElementIdsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectElementIdsReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementIds != null && message.elementIds.length)
            for (var i = 0; i < message.elementIds.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementIds[i]);
        return writer;
    };

    /**
     * Encodes the specified SelectElementIdsReply message, length delimited. Does not implicitly {@link SelectElementIdsReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SelectElementIdsReply
     * @static
     * @param {ISelectElementIdsReply} message SelectElementIdsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectElementIdsReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SelectElementIdsReply message from the specified reader or buffer.
     * @function decode
     * @memberof SelectElementIdsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SelectElementIdsReply} SelectElementIdsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectElementIdsReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SelectElementIdsReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.elementIds && message.elementIds.length))
                    message.elementIds = [];
                message.elementIds.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SelectElementIdsReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SelectElementIdsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SelectElementIdsReply} SelectElementIdsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectElementIdsReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SelectElementIdsReply message.
     * @function verify
     * @memberof SelectElementIdsReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SelectElementIdsReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementIds != null && message.hasOwnProperty("elementIds")) {
            if (!Array.isArray(message.elementIds))
                return "elementIds: array expected";
            for (var i = 0; i < message.elementIds.length; ++i)
                if (!$util.isString(message.elementIds[i]))
                    return "elementIds: string[] expected";
        }
        return null;
    };

    /**
     * Creates a SelectElementIdsReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SelectElementIdsReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SelectElementIdsReply} SelectElementIdsReply
     */
    SelectElementIdsReply.fromObject = function fromObject(object) {
        if (object instanceof $root.SelectElementIdsReply)
            return object;
        var message = new $root.SelectElementIdsReply();
        if (object.elementIds) {
            if (!Array.isArray(object.elementIds))
                throw TypeError(".SelectElementIdsReply.elementIds: array expected");
            message.elementIds = [];
            for (var i = 0; i < object.elementIds.length; ++i)
                message.elementIds[i] = String(object.elementIds[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a SelectElementIdsReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SelectElementIdsReply
     * @static
     * @param {SelectElementIdsReply} message SelectElementIdsReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SelectElementIdsReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.elementIds = [];
        if (message.elementIds && message.elementIds.length) {
            object.elementIds = [];
            for (var j = 0; j < message.elementIds.length; ++j)
                object.elementIds[j] = message.elementIds[j];
        }
        return object;
    };

    /**
     * Converts this SelectElementIdsReply to JSON.
     * @function toJSON
     * @memberof SelectElementIdsReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SelectElementIdsReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SelectElementIdsReply;
})();

$root.ExportMeshesRequest = (function() {

    /**
     * Properties of an ExportMeshesRequest.
     * @exports IExportMeshesRequest
     * @interface IExportMeshesRequest
     * @property {Array.<string>|null} [elementIds] ExportMeshesRequest elementIds
     * @property {number|null} [chordTol] ExportMeshesRequest chordTol
     */

    /**
     * Constructs a new ExportMeshesRequest.
     * @exports ExportMeshesRequest
     * @classdesc Represents an ExportMeshesRequest.
     * @implements IExportMeshesRequest
     * @constructor
     * @param {IExportMeshesRequest=} [properties] Properties to set
     */
    function ExportMeshesRequest(properties) {
        this.elementIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExportMeshesRequest elementIds.
     * @member {Array.<string>} elementIds
     * @memberof ExportMeshesRequest
     * @instance
     */
    ExportMeshesRequest.prototype.elementIds = $util.emptyArray;

    /**
     * ExportMeshesRequest chordTol.
     * @member {number} chordTol
     * @memberof ExportMeshesRequest
     * @instance
     */
    ExportMeshesRequest.prototype.chordTol = 0;

    /**
     * Creates a new ExportMeshesRequest instance using the specified properties.
     * @function create
     * @memberof ExportMeshesRequest
     * @static
     * @param {IExportMeshesRequest=} [properties] Properties to set
     * @returns {ExportMeshesRequest} ExportMeshesRequest instance
     */
    ExportMeshesRequest.create = function create(properties) {
        return new ExportMeshesRequest(properties);
    };

    /**
     * Encodes the specified ExportMeshesRequest message. Does not implicitly {@link ExportMeshesRequest.verify|verify} messages.
     * @function encode
     * @memberof ExportMeshesRequest
     * @static
     * @param {IExportMeshesRequest} message ExportMeshesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExportMeshesRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementIds != null && message.elementIds.length)
            for (var i = 0; i < message.elementIds.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementIds[i]);
        if (message.chordTol != null && Object.hasOwnProperty.call(message, "chordTol"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.chordTol);
        return writer;
    };

    /**
     * Encodes the specified ExportMeshesRequest message, length delimited. Does not implicitly {@link ExportMeshesRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExportMeshesRequest
     * @static
     * @param {IExportMeshesRequest} message ExportMeshesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExportMeshesRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExportMeshesRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ExportMeshesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExportMeshesRequest} ExportMeshesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExportMeshesRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExportMeshesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.elementIds && message.elementIds.length))
                    message.elementIds = [];
                message.elementIds.push(reader.string());
                break;
            case 2:
                message.chordTol = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExportMeshesRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExportMeshesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExportMeshesRequest} ExportMeshesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExportMeshesRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExportMeshesRequest message.
     * @function verify
     * @memberof ExportMeshesRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExportMeshesRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementIds != null && message.hasOwnProperty("elementIds")) {
            if (!Array.isArray(message.elementIds))
                return "elementIds: array expected";
            for (var i = 0; i < message.elementIds.length; ++i)
                if (!$util.isString(message.elementIds[i]))
                    return "elementIds: string[] expected";
        }
        if (message.chordTol != null && message.hasOwnProperty("chordTol"))
            if (typeof message.chordTol !== "number")
                return "chordTol: number expected";
        return null;
    };

    /**
     * Creates an ExportMeshesRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExportMeshesRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExportMeshesRequest} ExportMeshesRequest
     */
    ExportMeshesRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ExportMeshesRequest)
            return object;
        var message = new $root.ExportMeshesRequest();
        if (object.elementIds) {
            if (!Array.isArray(object.elementIds))
                throw TypeError(".ExportMeshesRequest.elementIds: array expected");
            message.elementIds = [];
            for (var i = 0; i < object.elementIds.length; ++i)
                message.elementIds[i] = String(object.elementIds[i]);
        }
        if (object.chordTol != null)
            message.chordTol = Number(object.chordTol);
        return message;
    };

    /**
     * Creates a plain object from an ExportMeshesRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExportMeshesRequest
     * @static
     * @param {ExportMeshesRequest} message ExportMeshesRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExportMeshesRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.elementIds = [];
        if (options.defaults)
            object.chordTol = 0;
        if (message.elementIds && message.elementIds.length) {
            object.elementIds = [];
            for (var j = 0; j < message.elementIds.length; ++j)
                object.elementIds[j] = message.elementIds[j];
        }
        if (message.chordTol != null && message.hasOwnProperty("chordTol"))
            object.chordTol = options.json && !isFinite(message.chordTol) ? String(message.chordTol) : message.chordTol;
        return object;
    };

    /**
     * Converts this ExportMeshesRequest to JSON.
     * @function toJSON
     * @memberof ExportMeshesRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExportMeshesRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExportMeshesRequest;
})();

$root.ExportMeshesReply = (function() {

    /**
     * Properties of an ExportMeshesReply.
     * @exports IExportMeshesReply
     * @interface IExportMeshesReply
     * @property {string|null} [elementId] ExportMeshesReply elementId
     * @property {number|null} [color] ExportMeshesReply color
     * @property {number|null} [indexCount] ExportMeshesReply indexCount
     * @property {number|null} [vertexCount] ExportMeshesReply vertexCount
     * @property {Uint8Array|null} [meshData] ExportMeshesReply meshData
     * @property {string|null} [textureId] ExportMeshesReply textureId
     */

    /**
     * Constructs a new ExportMeshesReply.
     * @exports ExportMeshesReply
     * @classdesc Represents an ExportMeshesReply.
     * @implements IExportMeshesReply
     * @constructor
     * @param {IExportMeshesReply=} [properties] Properties to set
     */
    function ExportMeshesReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExportMeshesReply elementId.
     * @member {string} elementId
     * @memberof ExportMeshesReply
     * @instance
     */
    ExportMeshesReply.prototype.elementId = "";

    /**
     * ExportMeshesReply color.
     * @member {number} color
     * @memberof ExportMeshesReply
     * @instance
     */
    ExportMeshesReply.prototype.color = 0;

    /**
     * ExportMeshesReply indexCount.
     * @member {number} indexCount
     * @memberof ExportMeshesReply
     * @instance
     */
    ExportMeshesReply.prototype.indexCount = 0;

    /**
     * ExportMeshesReply vertexCount.
     * @member {number} vertexCount
     * @memberof ExportMeshesReply
     * @instance
     */
    ExportMeshesReply.prototype.vertexCount = 0;

    /**
     * ExportMeshesReply meshData.
     * @member {Uint8Array} meshData
     * @memberof ExportMeshesReply
     * @instance
     */
    ExportMeshesReply.prototype.meshData = $util.newBuffer([]);

    /**
     * ExportMeshesReply textureId.
     * @member {string} textureId
     * @memberof ExportMeshesReply
     * @instance
     */
    ExportMeshesReply.prototype.textureId = "";

    /**
     * Creates a new ExportMeshesReply instance using the specified properties.
     * @function create
     * @memberof ExportMeshesReply
     * @static
     * @param {IExportMeshesReply=} [properties] Properties to set
     * @returns {ExportMeshesReply} ExportMeshesReply instance
     */
    ExportMeshesReply.create = function create(properties) {
        return new ExportMeshesReply(properties);
    };

    /**
     * Encodes the specified ExportMeshesReply message. Does not implicitly {@link ExportMeshesReply.verify|verify} messages.
     * @function encode
     * @memberof ExportMeshesReply
     * @static
     * @param {IExportMeshesReply} message ExportMeshesReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExportMeshesReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementId != null && Object.hasOwnProperty.call(message, "elementId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementId);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.color);
        if (message.indexCount != null && Object.hasOwnProperty.call(message, "indexCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.indexCount);
        if (message.vertexCount != null && Object.hasOwnProperty.call(message, "vertexCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.vertexCount);
        if (message.meshData != null && Object.hasOwnProperty.call(message, "meshData"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.meshData);
        if (message.textureId != null && Object.hasOwnProperty.call(message, "textureId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.textureId);
        return writer;
    };

    /**
     * Encodes the specified ExportMeshesReply message, length delimited. Does not implicitly {@link ExportMeshesReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExportMeshesReply
     * @static
     * @param {IExportMeshesReply} message ExportMeshesReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExportMeshesReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExportMeshesReply message from the specified reader or buffer.
     * @function decode
     * @memberof ExportMeshesReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExportMeshesReply} ExportMeshesReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExportMeshesReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExportMeshesReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elementId = reader.string();
                break;
            case 2:
                message.color = reader.uint32();
                break;
            case 3:
                message.indexCount = reader.uint32();
                break;
            case 4:
                message.vertexCount = reader.uint32();
                break;
            case 5:
                message.meshData = reader.bytes();
                break;
            case 6:
                message.textureId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExportMeshesReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExportMeshesReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExportMeshesReply} ExportMeshesReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExportMeshesReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExportMeshesReply message.
     * @function verify
     * @memberof ExportMeshesReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExportMeshesReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            if (!$util.isString(message.elementId))
                return "elementId: string expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isInteger(message.color))
                return "color: integer expected";
        if (message.indexCount != null && message.hasOwnProperty("indexCount"))
            if (!$util.isInteger(message.indexCount))
                return "indexCount: integer expected";
        if (message.vertexCount != null && message.hasOwnProperty("vertexCount"))
            if (!$util.isInteger(message.vertexCount))
                return "vertexCount: integer expected";
        if (message.meshData != null && message.hasOwnProperty("meshData"))
            if (!(message.meshData && typeof message.meshData.length === "number" || $util.isString(message.meshData)))
                return "meshData: buffer expected";
        if (message.textureId != null && message.hasOwnProperty("textureId"))
            if (!$util.isString(message.textureId))
                return "textureId: string expected";
        return null;
    };

    /**
     * Creates an ExportMeshesReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExportMeshesReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExportMeshesReply} ExportMeshesReply
     */
    ExportMeshesReply.fromObject = function fromObject(object) {
        if (object instanceof $root.ExportMeshesReply)
            return object;
        var message = new $root.ExportMeshesReply();
        if (object.elementId != null)
            message.elementId = String(object.elementId);
        if (object.color != null)
            message.color = object.color >>> 0;
        if (object.indexCount != null)
            message.indexCount = object.indexCount >>> 0;
        if (object.vertexCount != null)
            message.vertexCount = object.vertexCount >>> 0;
        if (object.meshData != null)
            if (typeof object.meshData === "string")
                $util.base64.decode(object.meshData, message.meshData = $util.newBuffer($util.base64.length(object.meshData)), 0);
            else if (object.meshData.length)
                message.meshData = object.meshData;
        if (object.textureId != null)
            message.textureId = String(object.textureId);
        return message;
    };

    /**
     * Creates a plain object from an ExportMeshesReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExportMeshesReply
     * @static
     * @param {ExportMeshesReply} message ExportMeshesReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExportMeshesReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.elementId = "";
            object.color = 0;
            object.indexCount = 0;
            object.vertexCount = 0;
            if (options.bytes === String)
                object.meshData = "";
            else {
                object.meshData = [];
                if (options.bytes !== Array)
                    object.meshData = $util.newBuffer(object.meshData);
            }
            object.textureId = "";
        }
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            object.elementId = message.elementId;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        if (message.indexCount != null && message.hasOwnProperty("indexCount"))
            object.indexCount = message.indexCount;
        if (message.vertexCount != null && message.hasOwnProperty("vertexCount"))
            object.vertexCount = message.vertexCount;
        if (message.meshData != null && message.hasOwnProperty("meshData"))
            object.meshData = options.bytes === String ? $util.base64.encode(message.meshData, 0, message.meshData.length) : options.bytes === Array ? Array.prototype.slice.call(message.meshData) : message.meshData;
        if (message.textureId != null && message.hasOwnProperty("textureId"))
            object.textureId = message.textureId;
        return object;
    };

    /**
     * Converts this ExportMeshesReply to JSON.
     * @function toJSON
     * @memberof ExportMeshesReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExportMeshesReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ExportMeshesReply;
})();

$root.TextureRequest = (function() {

    /**
     * Properties of a TextureRequest.
     * @exports ITextureRequest
     * @interface ITextureRequest
     * @property {string|null} [textureId] TextureRequest textureId
     */

    /**
     * Constructs a new TextureRequest.
     * @exports TextureRequest
     * @classdesc Represents a TextureRequest.
     * @implements ITextureRequest
     * @constructor
     * @param {ITextureRequest=} [properties] Properties to set
     */
    function TextureRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextureRequest textureId.
     * @member {string} textureId
     * @memberof TextureRequest
     * @instance
     */
    TextureRequest.prototype.textureId = "";

    /**
     * Creates a new TextureRequest instance using the specified properties.
     * @function create
     * @memberof TextureRequest
     * @static
     * @param {ITextureRequest=} [properties] Properties to set
     * @returns {TextureRequest} TextureRequest instance
     */
    TextureRequest.create = function create(properties) {
        return new TextureRequest(properties);
    };

    /**
     * Encodes the specified TextureRequest message. Does not implicitly {@link TextureRequest.verify|verify} messages.
     * @function encode
     * @memberof TextureRequest
     * @static
     * @param {ITextureRequest} message TextureRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextureRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.textureId != null && Object.hasOwnProperty.call(message, "textureId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.textureId);
        return writer;
    };

    /**
     * Encodes the specified TextureRequest message, length delimited. Does not implicitly {@link TextureRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextureRequest
     * @static
     * @param {ITextureRequest} message TextureRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextureRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextureRequest message from the specified reader or buffer.
     * @function decode
     * @memberof TextureRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextureRequest} TextureRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextureRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextureRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.textureId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextureRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextureRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextureRequest} TextureRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextureRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextureRequest message.
     * @function verify
     * @memberof TextureRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextureRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.textureId != null && message.hasOwnProperty("textureId"))
            if (!$util.isString(message.textureId))
                return "textureId: string expected";
        return null;
    };

    /**
     * Creates a TextureRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextureRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextureRequest} TextureRequest
     */
    TextureRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.TextureRequest)
            return object;
        var message = new $root.TextureRequest();
        if (object.textureId != null)
            message.textureId = String(object.textureId);
        return message;
    };

    /**
     * Creates a plain object from a TextureRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextureRequest
     * @static
     * @param {TextureRequest} message TextureRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextureRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.textureId = "";
        if (message.textureId != null && message.hasOwnProperty("textureId"))
            object.textureId = message.textureId;
        return object;
    };

    /**
     * Converts this TextureRequest to JSON.
     * @function toJSON
     * @memberof TextureRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextureRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TextureRequest;
})();

$root.TextureReply = (function() {

    /**
     * Properties of a TextureReply.
     * @exports ITextureReply
     * @interface ITextureReply
     * @property {string|null} [textureId] TextureReply textureId
     * @property {Uint8Array|null} [textureData] TextureReply textureData
     */

    /**
     * Constructs a new TextureReply.
     * @exports TextureReply
     * @classdesc Represents a TextureReply.
     * @implements ITextureReply
     * @constructor
     * @param {ITextureReply=} [properties] Properties to set
     */
    function TextureReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextureReply textureId.
     * @member {string} textureId
     * @memberof TextureReply
     * @instance
     */
    TextureReply.prototype.textureId = "";

    /**
     * TextureReply textureData.
     * @member {Uint8Array} textureData
     * @memberof TextureReply
     * @instance
     */
    TextureReply.prototype.textureData = $util.newBuffer([]);

    /**
     * Creates a new TextureReply instance using the specified properties.
     * @function create
     * @memberof TextureReply
     * @static
     * @param {ITextureReply=} [properties] Properties to set
     * @returns {TextureReply} TextureReply instance
     */
    TextureReply.create = function create(properties) {
        return new TextureReply(properties);
    };

    /**
     * Encodes the specified TextureReply message. Does not implicitly {@link TextureReply.verify|verify} messages.
     * @function encode
     * @memberof TextureReply
     * @static
     * @param {ITextureReply} message TextureReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextureReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.textureId != null && Object.hasOwnProperty.call(message, "textureId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.textureId);
        if (message.textureData != null && Object.hasOwnProperty.call(message, "textureData"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.textureData);
        return writer;
    };

    /**
     * Encodes the specified TextureReply message, length delimited. Does not implicitly {@link TextureReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextureReply
     * @static
     * @param {ITextureReply} message TextureReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextureReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextureReply message from the specified reader or buffer.
     * @function decode
     * @memberof TextureReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextureReply} TextureReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextureReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextureReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.textureId = reader.string();
                break;
            case 2:
                message.textureData = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextureReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextureReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextureReply} TextureReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextureReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextureReply message.
     * @function verify
     * @memberof TextureReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextureReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.textureId != null && message.hasOwnProperty("textureId"))
            if (!$util.isString(message.textureId))
                return "textureId: string expected";
        if (message.textureData != null && message.hasOwnProperty("textureData"))
            if (!(message.textureData && typeof message.textureData.length === "number" || $util.isString(message.textureData)))
                return "textureData: buffer expected";
        return null;
    };

    /**
     * Creates a TextureReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextureReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextureReply} TextureReply
     */
    TextureReply.fromObject = function fromObject(object) {
        if (object instanceof $root.TextureReply)
            return object;
        var message = new $root.TextureReply();
        if (object.textureId != null)
            message.textureId = String(object.textureId);
        if (object.textureData != null)
            if (typeof object.textureData === "string")
                $util.base64.decode(object.textureData, message.textureData = $util.newBuffer($util.base64.length(object.textureData)), 0);
            else if (object.textureData.length)
                message.textureData = object.textureData;
        return message;
    };

    /**
     * Creates a plain object from a TextureReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextureReply
     * @static
     * @param {TextureReply} message TextureReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextureReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.textureId = "";
            if (options.bytes === String)
                object.textureData = "";
            else {
                object.textureData = [];
                if (options.bytes !== Array)
                    object.textureData = $util.newBuffer(object.textureData);
            }
        }
        if (message.textureId != null && message.hasOwnProperty("textureId"))
            object.textureId = message.textureId;
        if (message.textureData != null && message.hasOwnProperty("textureData"))
            object.textureData = options.bytes === String ? $util.base64.encode(message.textureData, 0, message.textureData.length) : options.bytes === Array ? Array.prototype.slice.call(message.textureData) : message.textureData;
        return object;
    };

    /**
     * Converts this TextureReply to JSON.
     * @function toJSON
     * @memberof TextureReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextureReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TextureReply;
})();

$root.ElementTooltipRequest = (function() {

    /**
     * Properties of an ElementTooltipRequest.
     * @exports IElementTooltipRequest
     * @interface IElementTooltipRequest
     * @property {string|null} [elementId] ElementTooltipRequest elementId
     */

    /**
     * Constructs a new ElementTooltipRequest.
     * @exports ElementTooltipRequest
     * @classdesc Represents an ElementTooltipRequest.
     * @implements IElementTooltipRequest
     * @constructor
     * @param {IElementTooltipRequest=} [properties] Properties to set
     */
    function ElementTooltipRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementTooltipRequest elementId.
     * @member {string} elementId
     * @memberof ElementTooltipRequest
     * @instance
     */
    ElementTooltipRequest.prototype.elementId = "";

    /**
     * Creates a new ElementTooltipRequest instance using the specified properties.
     * @function create
     * @memberof ElementTooltipRequest
     * @static
     * @param {IElementTooltipRequest=} [properties] Properties to set
     * @returns {ElementTooltipRequest} ElementTooltipRequest instance
     */
    ElementTooltipRequest.create = function create(properties) {
        return new ElementTooltipRequest(properties);
    };

    /**
     * Encodes the specified ElementTooltipRequest message. Does not implicitly {@link ElementTooltipRequest.verify|verify} messages.
     * @function encode
     * @memberof ElementTooltipRequest
     * @static
     * @param {IElementTooltipRequest} message ElementTooltipRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementTooltipRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementId != null && Object.hasOwnProperty.call(message, "elementId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementId);
        return writer;
    };

    /**
     * Encodes the specified ElementTooltipRequest message, length delimited. Does not implicitly {@link ElementTooltipRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementTooltipRequest
     * @static
     * @param {IElementTooltipRequest} message ElementTooltipRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementTooltipRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementTooltipRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ElementTooltipRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementTooltipRequest} ElementTooltipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementTooltipRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementTooltipRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elementId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementTooltipRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementTooltipRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementTooltipRequest} ElementTooltipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementTooltipRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementTooltipRequest message.
     * @function verify
     * @memberof ElementTooltipRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementTooltipRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            if (!$util.isString(message.elementId))
                return "elementId: string expected";
        return null;
    };

    /**
     * Creates an ElementTooltipRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementTooltipRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementTooltipRequest} ElementTooltipRequest
     */
    ElementTooltipRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementTooltipRequest)
            return object;
        var message = new $root.ElementTooltipRequest();
        if (object.elementId != null)
            message.elementId = String(object.elementId);
        return message;
    };

    /**
     * Creates a plain object from an ElementTooltipRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementTooltipRequest
     * @static
     * @param {ElementTooltipRequest} message ElementTooltipRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementTooltipRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.elementId = "";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            object.elementId = message.elementId;
        return object;
    };

    /**
     * Converts this ElementTooltipRequest to JSON.
     * @function toJSON
     * @memberof ElementTooltipRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementTooltipRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementTooltipRequest;
})();

$root.ElementTooltipReply = (function() {

    /**
     * Properties of an ElementTooltipReply.
     * @exports IElementTooltipReply
     * @interface IElementTooltipReply
     * @property {string|null} [elementId] ElementTooltipReply elementId
     * @property {string|null} [classLabel] ElementTooltipReply classLabel
     * @property {string|null} [categoryLabel] ElementTooltipReply categoryLabel
     * @property {string|null} [modelLabel] ElementTooltipReply modelLabel
     */

    /**
     * Constructs a new ElementTooltipReply.
     * @exports ElementTooltipReply
     * @classdesc Represents an ElementTooltipReply.
     * @implements IElementTooltipReply
     * @constructor
     * @param {IElementTooltipReply=} [properties] Properties to set
     */
    function ElementTooltipReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementTooltipReply elementId.
     * @member {string} elementId
     * @memberof ElementTooltipReply
     * @instance
     */
    ElementTooltipReply.prototype.elementId = "";

    /**
     * ElementTooltipReply classLabel.
     * @member {string} classLabel
     * @memberof ElementTooltipReply
     * @instance
     */
    ElementTooltipReply.prototype.classLabel = "";

    /**
     * ElementTooltipReply categoryLabel.
     * @member {string} categoryLabel
     * @memberof ElementTooltipReply
     * @instance
     */
    ElementTooltipReply.prototype.categoryLabel = "";

    /**
     * ElementTooltipReply modelLabel.
     * @member {string} modelLabel
     * @memberof ElementTooltipReply
     * @instance
     */
    ElementTooltipReply.prototype.modelLabel = "";

    /**
     * Creates a new ElementTooltipReply instance using the specified properties.
     * @function create
     * @memberof ElementTooltipReply
     * @static
     * @param {IElementTooltipReply=} [properties] Properties to set
     * @returns {ElementTooltipReply} ElementTooltipReply instance
     */
    ElementTooltipReply.create = function create(properties) {
        return new ElementTooltipReply(properties);
    };

    /**
     * Encodes the specified ElementTooltipReply message. Does not implicitly {@link ElementTooltipReply.verify|verify} messages.
     * @function encode
     * @memberof ElementTooltipReply
     * @static
     * @param {IElementTooltipReply} message ElementTooltipReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementTooltipReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementId != null && Object.hasOwnProperty.call(message, "elementId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementId);
        if (message.classLabel != null && Object.hasOwnProperty.call(message, "classLabel"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.classLabel);
        if (message.categoryLabel != null && Object.hasOwnProperty.call(message, "categoryLabel"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.categoryLabel);
        if (message.modelLabel != null && Object.hasOwnProperty.call(message, "modelLabel"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.modelLabel);
        return writer;
    };

    /**
     * Encodes the specified ElementTooltipReply message, length delimited. Does not implicitly {@link ElementTooltipReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementTooltipReply
     * @static
     * @param {IElementTooltipReply} message ElementTooltipReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementTooltipReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementTooltipReply message from the specified reader or buffer.
     * @function decode
     * @memberof ElementTooltipReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementTooltipReply} ElementTooltipReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementTooltipReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementTooltipReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elementId = reader.string();
                break;
            case 2:
                message.classLabel = reader.string();
                break;
            case 3:
                message.categoryLabel = reader.string();
                break;
            case 4:
                message.modelLabel = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementTooltipReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementTooltipReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementTooltipReply} ElementTooltipReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementTooltipReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementTooltipReply message.
     * @function verify
     * @memberof ElementTooltipReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementTooltipReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            if (!$util.isString(message.elementId))
                return "elementId: string expected";
        if (message.classLabel != null && message.hasOwnProperty("classLabel"))
            if (!$util.isString(message.classLabel))
                return "classLabel: string expected";
        if (message.categoryLabel != null && message.hasOwnProperty("categoryLabel"))
            if (!$util.isString(message.categoryLabel))
                return "categoryLabel: string expected";
        if (message.modelLabel != null && message.hasOwnProperty("modelLabel"))
            if (!$util.isString(message.modelLabel))
                return "modelLabel: string expected";
        return null;
    };

    /**
     * Creates an ElementTooltipReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementTooltipReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementTooltipReply} ElementTooltipReply
     */
    ElementTooltipReply.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementTooltipReply)
            return object;
        var message = new $root.ElementTooltipReply();
        if (object.elementId != null)
            message.elementId = String(object.elementId);
        if (object.classLabel != null)
            message.classLabel = String(object.classLabel);
        if (object.categoryLabel != null)
            message.categoryLabel = String(object.categoryLabel);
        if (object.modelLabel != null)
            message.modelLabel = String(object.modelLabel);
        return message;
    };

    /**
     * Creates a plain object from an ElementTooltipReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementTooltipReply
     * @static
     * @param {ElementTooltipReply} message ElementTooltipReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementTooltipReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.elementId = "";
            object.classLabel = "";
            object.categoryLabel = "";
            object.modelLabel = "";
        }
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            object.elementId = message.elementId;
        if (message.classLabel != null && message.hasOwnProperty("classLabel"))
            object.classLabel = message.classLabel;
        if (message.categoryLabel != null && message.hasOwnProperty("categoryLabel"))
            object.categoryLabel = message.categoryLabel;
        if (message.modelLabel != null && message.hasOwnProperty("modelLabel"))
            object.modelLabel = message.modelLabel;
        return object;
    };

    /**
     * Converts this ElementTooltipReply to JSON.
     * @function toJSON
     * @memberof ElementTooltipReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementTooltipReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementTooltipReply;
})();

$root.ProjectExtentsRequest = (function() {

    /**
     * Properties of a ProjectExtentsRequest.
     * @exports IProjectExtentsRequest
     * @interface IProjectExtentsRequest
     */

    /**
     * Constructs a new ProjectExtentsRequest.
     * @exports ProjectExtentsRequest
     * @classdesc Represents a ProjectExtentsRequest.
     * @implements IProjectExtentsRequest
     * @constructor
     * @param {IProjectExtentsRequest=} [properties] Properties to set
     */
    function ProjectExtentsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ProjectExtentsRequest instance using the specified properties.
     * @function create
     * @memberof ProjectExtentsRequest
     * @static
     * @param {IProjectExtentsRequest=} [properties] Properties to set
     * @returns {ProjectExtentsRequest} ProjectExtentsRequest instance
     */
    ProjectExtentsRequest.create = function create(properties) {
        return new ProjectExtentsRequest(properties);
    };

    /**
     * Encodes the specified ProjectExtentsRequest message. Does not implicitly {@link ProjectExtentsRequest.verify|verify} messages.
     * @function encode
     * @memberof ProjectExtentsRequest
     * @static
     * @param {IProjectExtentsRequest} message ProjectExtentsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProjectExtentsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ProjectExtentsRequest message, length delimited. Does not implicitly {@link ProjectExtentsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProjectExtentsRequest
     * @static
     * @param {IProjectExtentsRequest} message ProjectExtentsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProjectExtentsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProjectExtentsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ProjectExtentsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProjectExtentsRequest} ProjectExtentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProjectExtentsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProjectExtentsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProjectExtentsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProjectExtentsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProjectExtentsRequest} ProjectExtentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProjectExtentsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProjectExtentsRequest message.
     * @function verify
     * @memberof ProjectExtentsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProjectExtentsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ProjectExtentsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProjectExtentsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProjectExtentsRequest} ProjectExtentsRequest
     */
    ProjectExtentsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ProjectExtentsRequest)
            return object;
        return new $root.ProjectExtentsRequest();
    };

    /**
     * Creates a plain object from a ProjectExtentsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProjectExtentsRequest
     * @static
     * @param {ProjectExtentsRequest} message ProjectExtentsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProjectExtentsRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ProjectExtentsRequest to JSON.
     * @function toJSON
     * @memberof ProjectExtentsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProjectExtentsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProjectExtentsRequest;
})();

$root.ProjectExtentsReply = (function() {

    /**
     * Properties of a ProjectExtentsReply.
     * @exports IProjectExtentsReply
     * @interface IProjectExtentsReply
     * @property {number|null} [minX] ProjectExtentsReply minX
     * @property {number|null} [minY] ProjectExtentsReply minY
     * @property {number|null} [minZ] ProjectExtentsReply minZ
     * @property {number|null} [maxX] ProjectExtentsReply maxX
     * @property {number|null} [maxY] ProjectExtentsReply maxY
     * @property {number|null} [maxZ] ProjectExtentsReply maxZ
     */

    /**
     * Constructs a new ProjectExtentsReply.
     * @exports ProjectExtentsReply
     * @classdesc Represents a ProjectExtentsReply.
     * @implements IProjectExtentsReply
     * @constructor
     * @param {IProjectExtentsReply=} [properties] Properties to set
     */
    function ProjectExtentsReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProjectExtentsReply minX.
     * @member {number} minX
     * @memberof ProjectExtentsReply
     * @instance
     */
    ProjectExtentsReply.prototype.minX = 0;

    /**
     * ProjectExtentsReply minY.
     * @member {number} minY
     * @memberof ProjectExtentsReply
     * @instance
     */
    ProjectExtentsReply.prototype.minY = 0;

    /**
     * ProjectExtentsReply minZ.
     * @member {number} minZ
     * @memberof ProjectExtentsReply
     * @instance
     */
    ProjectExtentsReply.prototype.minZ = 0;

    /**
     * ProjectExtentsReply maxX.
     * @member {number} maxX
     * @memberof ProjectExtentsReply
     * @instance
     */
    ProjectExtentsReply.prototype.maxX = 0;

    /**
     * ProjectExtentsReply maxY.
     * @member {number} maxY
     * @memberof ProjectExtentsReply
     * @instance
     */
    ProjectExtentsReply.prototype.maxY = 0;

    /**
     * ProjectExtentsReply maxZ.
     * @member {number} maxZ
     * @memberof ProjectExtentsReply
     * @instance
     */
    ProjectExtentsReply.prototype.maxZ = 0;

    /**
     * Creates a new ProjectExtentsReply instance using the specified properties.
     * @function create
     * @memberof ProjectExtentsReply
     * @static
     * @param {IProjectExtentsReply=} [properties] Properties to set
     * @returns {ProjectExtentsReply} ProjectExtentsReply instance
     */
    ProjectExtentsReply.create = function create(properties) {
        return new ProjectExtentsReply(properties);
    };

    /**
     * Encodes the specified ProjectExtentsReply message. Does not implicitly {@link ProjectExtentsReply.verify|verify} messages.
     * @function encode
     * @memberof ProjectExtentsReply
     * @static
     * @param {IProjectExtentsReply} message ProjectExtentsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProjectExtentsReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.minX != null && Object.hasOwnProperty.call(message, "minX"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.minX);
        if (message.minY != null && Object.hasOwnProperty.call(message, "minY"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.minY);
        if (message.minZ != null && Object.hasOwnProperty.call(message, "minZ"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.minZ);
        if (message.maxX != null && Object.hasOwnProperty.call(message, "maxX"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.maxX);
        if (message.maxY != null && Object.hasOwnProperty.call(message, "maxY"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.maxY);
        if (message.maxZ != null && Object.hasOwnProperty.call(message, "maxZ"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.maxZ);
        return writer;
    };

    /**
     * Encodes the specified ProjectExtentsReply message, length delimited. Does not implicitly {@link ProjectExtentsReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProjectExtentsReply
     * @static
     * @param {IProjectExtentsReply} message ProjectExtentsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProjectExtentsReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProjectExtentsReply message from the specified reader or buffer.
     * @function decode
     * @memberof ProjectExtentsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProjectExtentsReply} ProjectExtentsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProjectExtentsReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProjectExtentsReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.minX = reader.double();
                break;
            case 2:
                message.minY = reader.double();
                break;
            case 3:
                message.minZ = reader.double();
                break;
            case 4:
                message.maxX = reader.double();
                break;
            case 5:
                message.maxY = reader.double();
                break;
            case 6:
                message.maxZ = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProjectExtentsReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProjectExtentsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProjectExtentsReply} ProjectExtentsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProjectExtentsReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProjectExtentsReply message.
     * @function verify
     * @memberof ProjectExtentsReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProjectExtentsReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.minX != null && message.hasOwnProperty("minX"))
            if (typeof message.minX !== "number")
                return "minX: number expected";
        if (message.minY != null && message.hasOwnProperty("minY"))
            if (typeof message.minY !== "number")
                return "minY: number expected";
        if (message.minZ != null && message.hasOwnProperty("minZ"))
            if (typeof message.minZ !== "number")
                return "minZ: number expected";
        if (message.maxX != null && message.hasOwnProperty("maxX"))
            if (typeof message.maxX !== "number")
                return "maxX: number expected";
        if (message.maxY != null && message.hasOwnProperty("maxY"))
            if (typeof message.maxY !== "number")
                return "maxY: number expected";
        if (message.maxZ != null && message.hasOwnProperty("maxZ"))
            if (typeof message.maxZ !== "number")
                return "maxZ: number expected";
        return null;
    };

    /**
     * Creates a ProjectExtentsReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProjectExtentsReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProjectExtentsReply} ProjectExtentsReply
     */
    ProjectExtentsReply.fromObject = function fromObject(object) {
        if (object instanceof $root.ProjectExtentsReply)
            return object;
        var message = new $root.ProjectExtentsReply();
        if (object.minX != null)
            message.minX = Number(object.minX);
        if (object.minY != null)
            message.minY = Number(object.minY);
        if (object.minZ != null)
            message.minZ = Number(object.minZ);
        if (object.maxX != null)
            message.maxX = Number(object.maxX);
        if (object.maxY != null)
            message.maxY = Number(object.maxY);
        if (object.maxZ != null)
            message.maxZ = Number(object.maxZ);
        return message;
    };

    /**
     * Creates a plain object from a ProjectExtentsReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProjectExtentsReply
     * @static
     * @param {ProjectExtentsReply} message ProjectExtentsReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProjectExtentsReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.minX = 0;
            object.minY = 0;
            object.minZ = 0;
            object.maxX = 0;
            object.maxY = 0;
            object.maxZ = 0;
        }
        if (message.minX != null && message.hasOwnProperty("minX"))
            object.minX = options.json && !isFinite(message.minX) ? String(message.minX) : message.minX;
        if (message.minY != null && message.hasOwnProperty("minY"))
            object.minY = options.json && !isFinite(message.minY) ? String(message.minY) : message.minY;
        if (message.minZ != null && message.hasOwnProperty("minZ"))
            object.minZ = options.json && !isFinite(message.minZ) ? String(message.minZ) : message.minZ;
        if (message.maxX != null && message.hasOwnProperty("maxX"))
            object.maxX = options.json && !isFinite(message.maxX) ? String(message.maxX) : message.maxX;
        if (message.maxY != null && message.hasOwnProperty("maxY"))
            object.maxY = options.json && !isFinite(message.maxY) ? String(message.maxY) : message.maxY;
        if (message.maxZ != null && message.hasOwnProperty("maxZ"))
            object.maxZ = options.json && !isFinite(message.maxZ) ? String(message.maxZ) : message.maxZ;
        return object;
    };

    /**
     * Converts this ProjectExtentsReply to JSON.
     * @function toJSON
     * @memberof ProjectExtentsReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProjectExtentsReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProjectExtentsReply;
})();

$root.CameraViewsRequest = (function() {

    /**
     * Properties of a CameraViewsRequest.
     * @exports ICameraViewsRequest
     * @interface ICameraViewsRequest
     */

    /**
     * Constructs a new CameraViewsRequest.
     * @exports CameraViewsRequest
     * @classdesc Represents a CameraViewsRequest.
     * @implements ICameraViewsRequest
     * @constructor
     * @param {ICameraViewsRequest=} [properties] Properties to set
     */
    function CameraViewsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CameraViewsRequest instance using the specified properties.
     * @function create
     * @memberof CameraViewsRequest
     * @static
     * @param {ICameraViewsRequest=} [properties] Properties to set
     * @returns {CameraViewsRequest} CameraViewsRequest instance
     */
    CameraViewsRequest.create = function create(properties) {
        return new CameraViewsRequest(properties);
    };

    /**
     * Encodes the specified CameraViewsRequest message. Does not implicitly {@link CameraViewsRequest.verify|verify} messages.
     * @function encode
     * @memberof CameraViewsRequest
     * @static
     * @param {ICameraViewsRequest} message CameraViewsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraViewsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CameraViewsRequest message, length delimited. Does not implicitly {@link CameraViewsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CameraViewsRequest
     * @static
     * @param {ICameraViewsRequest} message CameraViewsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraViewsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CameraViewsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CameraViewsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CameraViewsRequest} CameraViewsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraViewsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CameraViewsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CameraViewsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CameraViewsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CameraViewsRequest} CameraViewsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraViewsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CameraViewsRequest message.
     * @function verify
     * @memberof CameraViewsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CameraViewsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CameraViewsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CameraViewsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CameraViewsRequest} CameraViewsRequest
     */
    CameraViewsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CameraViewsRequest)
            return object;
        return new $root.CameraViewsRequest();
    };

    /**
     * Creates a plain object from a CameraViewsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CameraViewsRequest
     * @static
     * @param {CameraViewsRequest} message CameraViewsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CameraViewsRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CameraViewsRequest to JSON.
     * @function toJSON
     * @memberof CameraViewsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CameraViewsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CameraViewsRequest;
})();

$root.CameraViewsReply = (function() {

    /**
     * Properties of a CameraViewsReply.
     * @exports ICameraViewsReply
     * @interface ICameraViewsReply
     * @property {string|null} [elementId] CameraViewsReply elementId
     * @property {string|null} [displayLabel] CameraViewsReply displayLabel
     * @property {number|null} [eyePointX] CameraViewsReply eyePointX
     * @property {number|null} [eyePointY] CameraViewsReply eyePointY
     * @property {number|null} [eyePointZ] CameraViewsReply eyePointZ
     * @property {number|null} [yaw] CameraViewsReply yaw
     * @property {number|null} [pitch] CameraViewsReply pitch
     * @property {number|null} [roll] CameraViewsReply roll
     */

    /**
     * Constructs a new CameraViewsReply.
     * @exports CameraViewsReply
     * @classdesc Represents a CameraViewsReply.
     * @implements ICameraViewsReply
     * @constructor
     * @param {ICameraViewsReply=} [properties] Properties to set
     */
    function CameraViewsReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CameraViewsReply elementId.
     * @member {string} elementId
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.elementId = "";

    /**
     * CameraViewsReply displayLabel.
     * @member {string} displayLabel
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.displayLabel = "";

    /**
     * CameraViewsReply eyePointX.
     * @member {number} eyePointX
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.eyePointX = 0;

    /**
     * CameraViewsReply eyePointY.
     * @member {number} eyePointY
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.eyePointY = 0;

    /**
     * CameraViewsReply eyePointZ.
     * @member {number} eyePointZ
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.eyePointZ = 0;

    /**
     * CameraViewsReply yaw.
     * @member {number} yaw
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.yaw = 0;

    /**
     * CameraViewsReply pitch.
     * @member {number} pitch
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.pitch = 0;

    /**
     * CameraViewsReply roll.
     * @member {number} roll
     * @memberof CameraViewsReply
     * @instance
     */
    CameraViewsReply.prototype.roll = 0;

    /**
     * Creates a new CameraViewsReply instance using the specified properties.
     * @function create
     * @memberof CameraViewsReply
     * @static
     * @param {ICameraViewsReply=} [properties] Properties to set
     * @returns {CameraViewsReply} CameraViewsReply instance
     */
    CameraViewsReply.create = function create(properties) {
        return new CameraViewsReply(properties);
    };

    /**
     * Encodes the specified CameraViewsReply message. Does not implicitly {@link CameraViewsReply.verify|verify} messages.
     * @function encode
     * @memberof CameraViewsReply
     * @static
     * @param {ICameraViewsReply} message CameraViewsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraViewsReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementId != null && Object.hasOwnProperty.call(message, "elementId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementId);
        if (message.displayLabel != null && Object.hasOwnProperty.call(message, "displayLabel"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayLabel);
        if (message.eyePointX != null && Object.hasOwnProperty.call(message, "eyePointX"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.eyePointX);
        if (message.eyePointY != null && Object.hasOwnProperty.call(message, "eyePointY"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.eyePointY);
        if (message.eyePointZ != null && Object.hasOwnProperty.call(message, "eyePointZ"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.eyePointZ);
        if (message.yaw != null && Object.hasOwnProperty.call(message, "yaw"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.yaw);
        if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.pitch);
        if (message.roll != null && Object.hasOwnProperty.call(message, "roll"))
            writer.uint32(/* id 8, wireType 1 =*/65).double(message.roll);
        return writer;
    };

    /**
     * Encodes the specified CameraViewsReply message, length delimited. Does not implicitly {@link CameraViewsReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CameraViewsReply
     * @static
     * @param {ICameraViewsReply} message CameraViewsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraViewsReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CameraViewsReply message from the specified reader or buffer.
     * @function decode
     * @memberof CameraViewsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CameraViewsReply} CameraViewsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraViewsReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CameraViewsReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elementId = reader.string();
                break;
            case 2:
                message.displayLabel = reader.string();
                break;
            case 3:
                message.eyePointX = reader.double();
                break;
            case 4:
                message.eyePointY = reader.double();
                break;
            case 5:
                message.eyePointZ = reader.double();
                break;
            case 6:
                message.yaw = reader.double();
                break;
            case 7:
                message.pitch = reader.double();
                break;
            case 8:
                message.roll = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CameraViewsReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CameraViewsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CameraViewsReply} CameraViewsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraViewsReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CameraViewsReply message.
     * @function verify
     * @memberof CameraViewsReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CameraViewsReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            if (!$util.isString(message.elementId))
                return "elementId: string expected";
        if (message.displayLabel != null && message.hasOwnProperty("displayLabel"))
            if (!$util.isString(message.displayLabel))
                return "displayLabel: string expected";
        if (message.eyePointX != null && message.hasOwnProperty("eyePointX"))
            if (typeof message.eyePointX !== "number")
                return "eyePointX: number expected";
        if (message.eyePointY != null && message.hasOwnProperty("eyePointY"))
            if (typeof message.eyePointY !== "number")
                return "eyePointY: number expected";
        if (message.eyePointZ != null && message.hasOwnProperty("eyePointZ"))
            if (typeof message.eyePointZ !== "number")
                return "eyePointZ: number expected";
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            if (typeof message.yaw !== "number")
                return "yaw: number expected";
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            if (typeof message.pitch !== "number")
                return "pitch: number expected";
        if (message.roll != null && message.hasOwnProperty("roll"))
            if (typeof message.roll !== "number")
                return "roll: number expected";
        return null;
    };

    /**
     * Creates a CameraViewsReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CameraViewsReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CameraViewsReply} CameraViewsReply
     */
    CameraViewsReply.fromObject = function fromObject(object) {
        if (object instanceof $root.CameraViewsReply)
            return object;
        var message = new $root.CameraViewsReply();
        if (object.elementId != null)
            message.elementId = String(object.elementId);
        if (object.displayLabel != null)
            message.displayLabel = String(object.displayLabel);
        if (object.eyePointX != null)
            message.eyePointX = Number(object.eyePointX);
        if (object.eyePointY != null)
            message.eyePointY = Number(object.eyePointY);
        if (object.eyePointZ != null)
            message.eyePointZ = Number(object.eyePointZ);
        if (object.yaw != null)
            message.yaw = Number(object.yaw);
        if (object.pitch != null)
            message.pitch = Number(object.pitch);
        if (object.roll != null)
            message.roll = Number(object.roll);
        return message;
    };

    /**
     * Creates a plain object from a CameraViewsReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CameraViewsReply
     * @static
     * @param {CameraViewsReply} message CameraViewsReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CameraViewsReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.elementId = "";
            object.displayLabel = "";
            object.eyePointX = 0;
            object.eyePointY = 0;
            object.eyePointZ = 0;
            object.yaw = 0;
            object.pitch = 0;
            object.roll = 0;
        }
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            object.elementId = message.elementId;
        if (message.displayLabel != null && message.hasOwnProperty("displayLabel"))
            object.displayLabel = message.displayLabel;
        if (message.eyePointX != null && message.hasOwnProperty("eyePointX"))
            object.eyePointX = options.json && !isFinite(message.eyePointX) ? String(message.eyePointX) : message.eyePointX;
        if (message.eyePointY != null && message.hasOwnProperty("eyePointY"))
            object.eyePointY = options.json && !isFinite(message.eyePointY) ? String(message.eyePointY) : message.eyePointY;
        if (message.eyePointZ != null && message.hasOwnProperty("eyePointZ"))
            object.eyePointZ = options.json && !isFinite(message.eyePointZ) ? String(message.eyePointZ) : message.eyePointZ;
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            object.yaw = options.json && !isFinite(message.yaw) ? String(message.yaw) : message.yaw;
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
        if (message.roll != null && message.hasOwnProperty("roll"))
            object.roll = options.json && !isFinite(message.roll) ? String(message.roll) : message.roll;
        return object;
    };

    /**
     * Converts this CameraViewsReply to JSON.
     * @function toJSON
     * @memberof CameraViewsReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CameraViewsReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CameraViewsReply;
})();

$root.ElementPropertiesRequest = (function() {

    /**
     * Properties of an ElementPropertiesRequest.
     * @exports IElementPropertiesRequest
     * @interface IElementPropertiesRequest
     * @property {string|null} [elementId] ElementPropertiesRequest elementId
     */

    /**
     * Constructs a new ElementPropertiesRequest.
     * @exports ElementPropertiesRequest
     * @classdesc Represents an ElementPropertiesRequest.
     * @implements IElementPropertiesRequest
     * @constructor
     * @param {IElementPropertiesRequest=} [properties] Properties to set
     */
    function ElementPropertiesRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementPropertiesRequest elementId.
     * @member {string} elementId
     * @memberof ElementPropertiesRequest
     * @instance
     */
    ElementPropertiesRequest.prototype.elementId = "";

    /**
     * Creates a new ElementPropertiesRequest instance using the specified properties.
     * @function create
     * @memberof ElementPropertiesRequest
     * @static
     * @param {IElementPropertiesRequest=} [properties] Properties to set
     * @returns {ElementPropertiesRequest} ElementPropertiesRequest instance
     */
    ElementPropertiesRequest.create = function create(properties) {
        return new ElementPropertiesRequest(properties);
    };

    /**
     * Encodes the specified ElementPropertiesRequest message. Does not implicitly {@link ElementPropertiesRequest.verify|verify} messages.
     * @function encode
     * @memberof ElementPropertiesRequest
     * @static
     * @param {IElementPropertiesRequest} message ElementPropertiesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementPropertiesRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementId != null && Object.hasOwnProperty.call(message, "elementId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementId);
        return writer;
    };

    /**
     * Encodes the specified ElementPropertiesRequest message, length delimited. Does not implicitly {@link ElementPropertiesRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementPropertiesRequest
     * @static
     * @param {IElementPropertiesRequest} message ElementPropertiesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementPropertiesRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementPropertiesRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ElementPropertiesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementPropertiesRequest} ElementPropertiesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementPropertiesRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementPropertiesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elementId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementPropertiesRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementPropertiesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementPropertiesRequest} ElementPropertiesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementPropertiesRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementPropertiesRequest message.
     * @function verify
     * @memberof ElementPropertiesRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementPropertiesRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            if (!$util.isString(message.elementId))
                return "elementId: string expected";
        return null;
    };

    /**
     * Creates an ElementPropertiesRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementPropertiesRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementPropertiesRequest} ElementPropertiesRequest
     */
    ElementPropertiesRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementPropertiesRequest)
            return object;
        var message = new $root.ElementPropertiesRequest();
        if (object.elementId != null)
            message.elementId = String(object.elementId);
        return message;
    };

    /**
     * Creates a plain object from an ElementPropertiesRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementPropertiesRequest
     * @static
     * @param {ElementPropertiesRequest} message ElementPropertiesRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementPropertiesRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.elementId = "";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            object.elementId = message.elementId;
        return object;
    };

    /**
     * Converts this ElementPropertiesRequest to JSON.
     * @function toJSON
     * @memberof ElementPropertiesRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementPropertiesRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementPropertiesRequest;
})();

$root.ElementPropertiesReply = (function() {

    /**
     * Properties of an ElementPropertiesReply.
     * @exports IElementPropertiesReply
     * @interface IElementPropertiesReply
     * @property {IElementPropertiesReplyEntry|null} [root] ElementPropertiesReply root
     */

    /**
     * Constructs a new ElementPropertiesReply.
     * @exports ElementPropertiesReply
     * @classdesc Represents an ElementPropertiesReply.
     * @implements IElementPropertiesReply
     * @constructor
     * @param {IElementPropertiesReply=} [properties] Properties to set
     */
    function ElementPropertiesReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementPropertiesReply root.
     * @member {IElementPropertiesReplyEntry|null|undefined} root
     * @memberof ElementPropertiesReply
     * @instance
     */
    ElementPropertiesReply.prototype.root = null;

    /**
     * Creates a new ElementPropertiesReply instance using the specified properties.
     * @function create
     * @memberof ElementPropertiesReply
     * @static
     * @param {IElementPropertiesReply=} [properties] Properties to set
     * @returns {ElementPropertiesReply} ElementPropertiesReply instance
     */
    ElementPropertiesReply.create = function create(properties) {
        return new ElementPropertiesReply(properties);
    };

    /**
     * Encodes the specified ElementPropertiesReply message. Does not implicitly {@link ElementPropertiesReply.verify|verify} messages.
     * @function encode
     * @memberof ElementPropertiesReply
     * @static
     * @param {IElementPropertiesReply} message ElementPropertiesReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementPropertiesReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.root != null && Object.hasOwnProperty.call(message, "root"))
            $root.ElementPropertiesReplyEntry.encode(message.root, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ElementPropertiesReply message, length delimited. Does not implicitly {@link ElementPropertiesReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementPropertiesReply
     * @static
     * @param {IElementPropertiesReply} message ElementPropertiesReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementPropertiesReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementPropertiesReply message from the specified reader or buffer.
     * @function decode
     * @memberof ElementPropertiesReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementPropertiesReply} ElementPropertiesReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementPropertiesReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementPropertiesReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.root = $root.ElementPropertiesReplyEntry.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementPropertiesReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementPropertiesReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementPropertiesReply} ElementPropertiesReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementPropertiesReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementPropertiesReply message.
     * @function verify
     * @memberof ElementPropertiesReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementPropertiesReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.root != null && message.hasOwnProperty("root")) {
            var error = $root.ElementPropertiesReplyEntry.verify(message.root);
            if (error)
                return "root." + error;
        }
        return null;
    };

    /**
     * Creates an ElementPropertiesReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementPropertiesReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementPropertiesReply} ElementPropertiesReply
     */
    ElementPropertiesReply.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementPropertiesReply)
            return object;
        var message = new $root.ElementPropertiesReply();
        if (object.root != null) {
            if (typeof object.root !== "object")
                throw TypeError(".ElementPropertiesReply.root: object expected");
            message.root = $root.ElementPropertiesReplyEntry.fromObject(object.root);
        }
        return message;
    };

    /**
     * Creates a plain object from an ElementPropertiesReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementPropertiesReply
     * @static
     * @param {ElementPropertiesReply} message ElementPropertiesReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementPropertiesReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.root = null;
        if (message.root != null && message.hasOwnProperty("root"))
            object.root = $root.ElementPropertiesReplyEntry.toObject(message.root, options);
        return object;
    };

    /**
     * Converts this ElementPropertiesReply to JSON.
     * @function toJSON
     * @memberof ElementPropertiesReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementPropertiesReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementPropertiesReply;
})();

$root.ElementPropertiesReplyEntry = (function() {

    /**
     * Properties of an ElementPropertiesReplyEntry.
     * @exports IElementPropertiesReplyEntry
     * @interface IElementPropertiesReplyEntry
     * @property {string|null} [label] ElementPropertiesReplyEntry label
     * @property {string|null} [value] ElementPropertiesReplyEntry value
     * @property {Array.<IElementPropertiesReplyEntry>|null} [children] ElementPropertiesReplyEntry children
     */

    /**
     * Constructs a new ElementPropertiesReplyEntry.
     * @exports ElementPropertiesReplyEntry
     * @classdesc Represents an ElementPropertiesReplyEntry.
     * @implements IElementPropertiesReplyEntry
     * @constructor
     * @param {IElementPropertiesReplyEntry=} [properties] Properties to set
     */
    function ElementPropertiesReplyEntry(properties) {
        this.children = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementPropertiesReplyEntry label.
     * @member {string} label
     * @memberof ElementPropertiesReplyEntry
     * @instance
     */
    ElementPropertiesReplyEntry.prototype.label = "";

    /**
     * ElementPropertiesReplyEntry value.
     * @member {string} value
     * @memberof ElementPropertiesReplyEntry
     * @instance
     */
    ElementPropertiesReplyEntry.prototype.value = "";

    /**
     * ElementPropertiesReplyEntry children.
     * @member {Array.<IElementPropertiesReplyEntry>} children
     * @memberof ElementPropertiesReplyEntry
     * @instance
     */
    ElementPropertiesReplyEntry.prototype.children = $util.emptyArray;

    /**
     * Creates a new ElementPropertiesReplyEntry instance using the specified properties.
     * @function create
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {IElementPropertiesReplyEntry=} [properties] Properties to set
     * @returns {ElementPropertiesReplyEntry} ElementPropertiesReplyEntry instance
     */
    ElementPropertiesReplyEntry.create = function create(properties) {
        return new ElementPropertiesReplyEntry(properties);
    };

    /**
     * Encodes the specified ElementPropertiesReplyEntry message. Does not implicitly {@link ElementPropertiesReplyEntry.verify|verify} messages.
     * @function encode
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {IElementPropertiesReplyEntry} message ElementPropertiesReplyEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementPropertiesReplyEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        if (message.children != null && message.children.length)
            for (var i = 0; i < message.children.length; ++i)
                $root.ElementPropertiesReplyEntry.encode(message.children[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ElementPropertiesReplyEntry message, length delimited. Does not implicitly {@link ElementPropertiesReplyEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {IElementPropertiesReplyEntry} message ElementPropertiesReplyEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementPropertiesReplyEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementPropertiesReplyEntry message from the specified reader or buffer.
     * @function decode
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementPropertiesReplyEntry} ElementPropertiesReplyEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementPropertiesReplyEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementPropertiesReplyEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.label = reader.string();
                break;
            case 2:
                message.value = reader.string();
                break;
            case 3:
                if (!(message.children && message.children.length))
                    message.children = [];
                message.children.push($root.ElementPropertiesReplyEntry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementPropertiesReplyEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementPropertiesReplyEntry} ElementPropertiesReplyEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementPropertiesReplyEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementPropertiesReplyEntry message.
     * @function verify
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementPropertiesReplyEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!Array.isArray(message.children))
                return "children: array expected";
            for (var i = 0; i < message.children.length; ++i) {
                var error = $root.ElementPropertiesReplyEntry.verify(message.children[i]);
                if (error)
                    return "children." + error;
            }
        }
        return null;
    };

    /**
     * Creates an ElementPropertiesReplyEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementPropertiesReplyEntry} ElementPropertiesReplyEntry
     */
    ElementPropertiesReplyEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementPropertiesReplyEntry)
            return object;
        var message = new $root.ElementPropertiesReplyEntry();
        if (object.label != null)
            message.label = String(object.label);
        if (object.value != null)
            message.value = String(object.value);
        if (object.children) {
            if (!Array.isArray(object.children))
                throw TypeError(".ElementPropertiesReplyEntry.children: array expected");
            message.children = [];
            for (var i = 0; i < object.children.length; ++i) {
                if (typeof object.children[i] !== "object")
                    throw TypeError(".ElementPropertiesReplyEntry.children: object expected");
                message.children[i] = $root.ElementPropertiesReplyEntry.fromObject(object.children[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an ElementPropertiesReplyEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementPropertiesReplyEntry
     * @static
     * @param {ElementPropertiesReplyEntry} message ElementPropertiesReplyEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementPropertiesReplyEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.children = [];
        if (options.defaults) {
            object.label = "";
            object.value = "";
        }
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.children && message.children.length) {
            object.children = [];
            for (var j = 0; j < message.children.length; ++j)
                object.children[j] = $root.ElementPropertiesReplyEntry.toObject(message.children[j], options);
        }
        return object;
    };

    /**
     * Converts this ElementPropertiesReplyEntry to JSON.
     * @function toJSON
     * @memberof ElementPropertiesReplyEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementPropertiesReplyEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementPropertiesReplyEntry;
})();

$root.ElementAABBsRequest = (function() {

    /**
     * Properties of an ElementAABBsRequest.
     * @exports IElementAABBsRequest
     * @interface IElementAABBsRequest
     * @property {number|null} [limit] ElementAABBsRequest limit
     * @property {number|null} [offset] ElementAABBsRequest offset
     */

    /**
     * Constructs a new ElementAABBsRequest.
     * @exports ElementAABBsRequest
     * @classdesc Represents an ElementAABBsRequest.
     * @implements IElementAABBsRequest
     * @constructor
     * @param {IElementAABBsRequest=} [properties] Properties to set
     */
    function ElementAABBsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementAABBsRequest limit.
     * @member {number} limit
     * @memberof ElementAABBsRequest
     * @instance
     */
    ElementAABBsRequest.prototype.limit = 0;

    /**
     * ElementAABBsRequest offset.
     * @member {number} offset
     * @memberof ElementAABBsRequest
     * @instance
     */
    ElementAABBsRequest.prototype.offset = 0;

    /**
     * Creates a new ElementAABBsRequest instance using the specified properties.
     * @function create
     * @memberof ElementAABBsRequest
     * @static
     * @param {IElementAABBsRequest=} [properties] Properties to set
     * @returns {ElementAABBsRequest} ElementAABBsRequest instance
     */
    ElementAABBsRequest.create = function create(properties) {
        return new ElementAABBsRequest(properties);
    };

    /**
     * Encodes the specified ElementAABBsRequest message. Does not implicitly {@link ElementAABBsRequest.verify|verify} messages.
     * @function encode
     * @memberof ElementAABBsRequest
     * @static
     * @param {IElementAABBsRequest} message ElementAABBsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementAABBsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.limit);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
        return writer;
    };

    /**
     * Encodes the specified ElementAABBsRequest message, length delimited. Does not implicitly {@link ElementAABBsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementAABBsRequest
     * @static
     * @param {IElementAABBsRequest} message ElementAABBsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementAABBsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementAABBsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ElementAABBsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementAABBsRequest} ElementAABBsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementAABBsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementAABBsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.limit = reader.int32();
                break;
            case 2:
                message.offset = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementAABBsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementAABBsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementAABBsRequest} ElementAABBsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementAABBsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementAABBsRequest message.
     * @function verify
     * @memberof ElementAABBsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementAABBsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.limit != null && message.hasOwnProperty("limit"))
            if (!$util.isInteger(message.limit))
                return "limit: integer expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        return null;
    };

    /**
     * Creates an ElementAABBsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementAABBsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementAABBsRequest} ElementAABBsRequest
     */
    ElementAABBsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementAABBsRequest)
            return object;
        var message = new $root.ElementAABBsRequest();
        if (object.limit != null)
            message.limit = object.limit | 0;
        if (object.offset != null)
            message.offset = object.offset | 0;
        return message;
    };

    /**
     * Creates a plain object from an ElementAABBsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementAABBsRequest
     * @static
     * @param {ElementAABBsRequest} message ElementAABBsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementAABBsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.limit = 0;
            object.offset = 0;
        }
        if (message.limit != null && message.hasOwnProperty("limit"))
            object.limit = message.limit;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        return object;
    };

    /**
     * Converts this ElementAABBsRequest to JSON.
     * @function toJSON
     * @memberof ElementAABBsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementAABBsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementAABBsRequest;
})();

$root.ElementAABBsReply = (function() {

    /**
     * Properties of an ElementAABBsReply.
     * @exports IElementAABBsReply
     * @interface IElementAABBsReply
     * @property {Array.<IElementAABBEntry>|null} [boxes] ElementAABBsReply boxes
     */

    /**
     * Constructs a new ElementAABBsReply.
     * @exports ElementAABBsReply
     * @classdesc Represents an ElementAABBsReply.
     * @implements IElementAABBsReply
     * @constructor
     * @param {IElementAABBsReply=} [properties] Properties to set
     */
    function ElementAABBsReply(properties) {
        this.boxes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementAABBsReply boxes.
     * @member {Array.<IElementAABBEntry>} boxes
     * @memberof ElementAABBsReply
     * @instance
     */
    ElementAABBsReply.prototype.boxes = $util.emptyArray;

    /**
     * Creates a new ElementAABBsReply instance using the specified properties.
     * @function create
     * @memberof ElementAABBsReply
     * @static
     * @param {IElementAABBsReply=} [properties] Properties to set
     * @returns {ElementAABBsReply} ElementAABBsReply instance
     */
    ElementAABBsReply.create = function create(properties) {
        return new ElementAABBsReply(properties);
    };

    /**
     * Encodes the specified ElementAABBsReply message. Does not implicitly {@link ElementAABBsReply.verify|verify} messages.
     * @function encode
     * @memberof ElementAABBsReply
     * @static
     * @param {IElementAABBsReply} message ElementAABBsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementAABBsReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.boxes != null && message.boxes.length)
            for (var i = 0; i < message.boxes.length; ++i)
                $root.ElementAABBEntry.encode(message.boxes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ElementAABBsReply message, length delimited. Does not implicitly {@link ElementAABBsReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementAABBsReply
     * @static
     * @param {IElementAABBsReply} message ElementAABBsReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementAABBsReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementAABBsReply message from the specified reader or buffer.
     * @function decode
     * @memberof ElementAABBsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementAABBsReply} ElementAABBsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementAABBsReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementAABBsReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.boxes && message.boxes.length))
                    message.boxes = [];
                message.boxes.push($root.ElementAABBEntry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementAABBsReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementAABBsReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementAABBsReply} ElementAABBsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementAABBsReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementAABBsReply message.
     * @function verify
     * @memberof ElementAABBsReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementAABBsReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boxes != null && message.hasOwnProperty("boxes")) {
            if (!Array.isArray(message.boxes))
                return "boxes: array expected";
            for (var i = 0; i < message.boxes.length; ++i) {
                var error = $root.ElementAABBEntry.verify(message.boxes[i]);
                if (error)
                    return "boxes." + error;
            }
        }
        return null;
    };

    /**
     * Creates an ElementAABBsReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementAABBsReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementAABBsReply} ElementAABBsReply
     */
    ElementAABBsReply.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementAABBsReply)
            return object;
        var message = new $root.ElementAABBsReply();
        if (object.boxes) {
            if (!Array.isArray(object.boxes))
                throw TypeError(".ElementAABBsReply.boxes: array expected");
            message.boxes = [];
            for (var i = 0; i < object.boxes.length; ++i) {
                if (typeof object.boxes[i] !== "object")
                    throw TypeError(".ElementAABBsReply.boxes: object expected");
                message.boxes[i] = $root.ElementAABBEntry.fromObject(object.boxes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an ElementAABBsReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementAABBsReply
     * @static
     * @param {ElementAABBsReply} message ElementAABBsReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementAABBsReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.boxes = [];
        if (message.boxes && message.boxes.length) {
            object.boxes = [];
            for (var j = 0; j < message.boxes.length; ++j)
                object.boxes[j] = $root.ElementAABBEntry.toObject(message.boxes[j], options);
        }
        return object;
    };

    /**
     * Converts this ElementAABBsReply to JSON.
     * @function toJSON
     * @memberof ElementAABBsReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementAABBsReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementAABBsReply;
})();

$root.ElementAABBEntry = (function() {

    /**
     * Properties of an ElementAABBEntry.
     * @exports IElementAABBEntry
     * @interface IElementAABBEntry
     * @property {string|null} [elementId] ElementAABBEntry elementId
     * @property {number|null} [minX] ElementAABBEntry minX
     * @property {number|null} [minY] ElementAABBEntry minY
     * @property {number|null} [minZ] ElementAABBEntry minZ
     * @property {number|null} [maxX] ElementAABBEntry maxX
     * @property {number|null} [maxY] ElementAABBEntry maxY
     * @property {number|null} [maxZ] ElementAABBEntry maxZ
     */

    /**
     * Constructs a new ElementAABBEntry.
     * @exports ElementAABBEntry
     * @classdesc Represents an ElementAABBEntry.
     * @implements IElementAABBEntry
     * @constructor
     * @param {IElementAABBEntry=} [properties] Properties to set
     */
    function ElementAABBEntry(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ElementAABBEntry elementId.
     * @member {string} elementId
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.elementId = "";

    /**
     * ElementAABBEntry minX.
     * @member {number} minX
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.minX = 0;

    /**
     * ElementAABBEntry minY.
     * @member {number} minY
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.minY = 0;

    /**
     * ElementAABBEntry minZ.
     * @member {number} minZ
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.minZ = 0;

    /**
     * ElementAABBEntry maxX.
     * @member {number} maxX
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.maxX = 0;

    /**
     * ElementAABBEntry maxY.
     * @member {number} maxY
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.maxY = 0;

    /**
     * ElementAABBEntry maxZ.
     * @member {number} maxZ
     * @memberof ElementAABBEntry
     * @instance
     */
    ElementAABBEntry.prototype.maxZ = 0;

    /**
     * Creates a new ElementAABBEntry instance using the specified properties.
     * @function create
     * @memberof ElementAABBEntry
     * @static
     * @param {IElementAABBEntry=} [properties] Properties to set
     * @returns {ElementAABBEntry} ElementAABBEntry instance
     */
    ElementAABBEntry.create = function create(properties) {
        return new ElementAABBEntry(properties);
    };

    /**
     * Encodes the specified ElementAABBEntry message. Does not implicitly {@link ElementAABBEntry.verify|verify} messages.
     * @function encode
     * @memberof ElementAABBEntry
     * @static
     * @param {IElementAABBEntry} message ElementAABBEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementAABBEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.elementId != null && Object.hasOwnProperty.call(message, "elementId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.elementId);
        if (message.minX != null && Object.hasOwnProperty.call(message, "minX"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.minX);
        if (message.minY != null && Object.hasOwnProperty.call(message, "minY"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.minY);
        if (message.minZ != null && Object.hasOwnProperty.call(message, "minZ"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.minZ);
        if (message.maxX != null && Object.hasOwnProperty.call(message, "maxX"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.maxX);
        if (message.maxY != null && Object.hasOwnProperty.call(message, "maxY"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.maxY);
        if (message.maxZ != null && Object.hasOwnProperty.call(message, "maxZ"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.maxZ);
        return writer;
    };

    /**
     * Encodes the specified ElementAABBEntry message, length delimited. Does not implicitly {@link ElementAABBEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ElementAABBEntry
     * @static
     * @param {IElementAABBEntry} message ElementAABBEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ElementAABBEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ElementAABBEntry message from the specified reader or buffer.
     * @function decode
     * @memberof ElementAABBEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ElementAABBEntry} ElementAABBEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementAABBEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ElementAABBEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.elementId = reader.string();
                break;
            case 2:
                message.minX = reader.double();
                break;
            case 3:
                message.minY = reader.double();
                break;
            case 4:
                message.minZ = reader.double();
                break;
            case 5:
                message.maxX = reader.double();
                break;
            case 6:
                message.maxY = reader.double();
                break;
            case 7:
                message.maxZ = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ElementAABBEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ElementAABBEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ElementAABBEntry} ElementAABBEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ElementAABBEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ElementAABBEntry message.
     * @function verify
     * @memberof ElementAABBEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ElementAABBEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            if (!$util.isString(message.elementId))
                return "elementId: string expected";
        if (message.minX != null && message.hasOwnProperty("minX"))
            if (typeof message.minX !== "number")
                return "minX: number expected";
        if (message.minY != null && message.hasOwnProperty("minY"))
            if (typeof message.minY !== "number")
                return "minY: number expected";
        if (message.minZ != null && message.hasOwnProperty("minZ"))
            if (typeof message.minZ !== "number")
                return "minZ: number expected";
        if (message.maxX != null && message.hasOwnProperty("maxX"))
            if (typeof message.maxX !== "number")
                return "maxX: number expected";
        if (message.maxY != null && message.hasOwnProperty("maxY"))
            if (typeof message.maxY !== "number")
                return "maxY: number expected";
        if (message.maxZ != null && message.hasOwnProperty("maxZ"))
            if (typeof message.maxZ !== "number")
                return "maxZ: number expected";
        return null;
    };

    /**
     * Creates an ElementAABBEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ElementAABBEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ElementAABBEntry} ElementAABBEntry
     */
    ElementAABBEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.ElementAABBEntry)
            return object;
        var message = new $root.ElementAABBEntry();
        if (object.elementId != null)
            message.elementId = String(object.elementId);
        if (object.minX != null)
            message.minX = Number(object.minX);
        if (object.minY != null)
            message.minY = Number(object.minY);
        if (object.minZ != null)
            message.minZ = Number(object.minZ);
        if (object.maxX != null)
            message.maxX = Number(object.maxX);
        if (object.maxY != null)
            message.maxY = Number(object.maxY);
        if (object.maxZ != null)
            message.maxZ = Number(object.maxZ);
        return message;
    };

    /**
     * Creates a plain object from an ElementAABBEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ElementAABBEntry
     * @static
     * @param {ElementAABBEntry} message ElementAABBEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ElementAABBEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.elementId = "";
            object.minX = 0;
            object.minY = 0;
            object.minZ = 0;
            object.maxX = 0;
            object.maxY = 0;
            object.maxZ = 0;
        }
        if (message.elementId != null && message.hasOwnProperty("elementId"))
            object.elementId = message.elementId;
        if (message.minX != null && message.hasOwnProperty("minX"))
            object.minX = options.json && !isFinite(message.minX) ? String(message.minX) : message.minX;
        if (message.minY != null && message.hasOwnProperty("minY"))
            object.minY = options.json && !isFinite(message.minY) ? String(message.minY) : message.minY;
        if (message.minZ != null && message.hasOwnProperty("minZ"))
            object.minZ = options.json && !isFinite(message.minZ) ? String(message.minZ) : message.minZ;
        if (message.maxX != null && message.hasOwnProperty("maxX"))
            object.maxX = options.json && !isFinite(message.maxX) ? String(message.maxX) : message.maxX;
        if (message.maxY != null && message.hasOwnProperty("maxY"))
            object.maxY = options.json && !isFinite(message.maxY) ? String(message.maxY) : message.maxY;
        if (message.maxZ != null && message.hasOwnProperty("maxZ"))
            object.maxZ = options.json && !isFinite(message.maxZ) ? String(message.maxZ) : message.maxZ;
        return object;
    };

    /**
     * Converts this ElementAABBEntry to JSON.
     * @function toJSON
     * @memberof ElementAABBEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ElementAABBEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ElementAABBEntry;
})();

module.exports = $root;
