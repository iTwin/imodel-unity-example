/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import * as $protobuf from "protobufjs";
/** Properties of a RequestWrapper. */
export interface IRequestWrapper {

    /** RequestWrapper requestId */
    requestId?: (number|null);

    /** RequestWrapper selectElementIdsRequest */
    selectElementIdsRequest?: (ISelectElementIdsRequest|null);

    /** RequestWrapper exportMeshesRequest */
    exportMeshesRequest?: (IExportMeshesRequest|null);

    /** RequestWrapper textureRequest */
    textureRequest?: (ITextureRequest|null);

    /** RequestWrapper elementTooltipRequest */
    elementTooltipRequest?: (IElementTooltipRequest|null);

    /** RequestWrapper projectExtentsRequest */
    projectExtentsRequest?: (IProjectExtentsRequest|null);

    /** RequestWrapper cameraViewsRequest */
    cameraViewsRequest?: (ICameraViewsRequest|null);
}

/** Represents a RequestWrapper. */
export class RequestWrapper implements IRequestWrapper {

    /**
     * Constructs a new RequestWrapper.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestWrapper);

    /** RequestWrapper requestId. */
    public requestId: number;

    /** RequestWrapper selectElementIdsRequest. */
    public selectElementIdsRequest?: (ISelectElementIdsRequest|null);

    /** RequestWrapper exportMeshesRequest. */
    public exportMeshesRequest?: (IExportMeshesRequest|null);

    /** RequestWrapper textureRequest. */
    public textureRequest?: (ITextureRequest|null);

    /** RequestWrapper elementTooltipRequest. */
    public elementTooltipRequest?: (IElementTooltipRequest|null);

    /** RequestWrapper projectExtentsRequest. */
    public projectExtentsRequest?: (IProjectExtentsRequest|null);

    /** RequestWrapper cameraViewsRequest. */
    public cameraViewsRequest?: (ICameraViewsRequest|null);

    /** RequestWrapper msg. */
    public msg?: ("selectElementIdsRequest"|"exportMeshesRequest"|"textureRequest"|"elementTooltipRequest"|"projectExtentsRequest"|"cameraViewsRequest");

    /**
     * Creates a new RequestWrapper instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestWrapper instance
     */
    public static create(properties?: IRequestWrapper): RequestWrapper;

    /**
     * Encodes the specified RequestWrapper message. Does not implicitly {@link RequestWrapper.verify|verify} messages.
     * @param message RequestWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestWrapper message, length delimited. Does not implicitly {@link RequestWrapper.verify|verify} messages.
     * @param message RequestWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestWrapper message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestWrapper;

    /**
     * Decodes a RequestWrapper message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestWrapper;

    /**
     * Verifies a RequestWrapper message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestWrapper message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestWrapper
     */
    public static fromObject(object: { [k: string]: any }): RequestWrapper;

    /**
     * Creates a plain object from a RequestWrapper message. Also converts values to other types if specified.
     * @param message RequestWrapper
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestWrapper to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReplyWrapper. */
export interface IReplyWrapper {

    /** ReplyWrapper requestId */
    requestId?: (number|null);

    /** ReplyWrapper requestHasMoreReplies */
    requestHasMoreReplies?: (boolean|null);

    /** ReplyWrapper selectElementIdsReply */
    selectElementIdsReply?: (ISelectElementIdsReply|null);

    /** ReplyWrapper exportMeshesReply */
    exportMeshesReply?: (IExportMeshesReply|null);

    /** ReplyWrapper textureReply */
    textureReply?: (ITextureReply|null);

    /** ReplyWrapper elementTooltipReply */
    elementTooltipReply?: (IElementTooltipReply|null);

    /** ReplyWrapper projectExtentsReply */
    projectExtentsReply?: (IProjectExtentsReply|null);

    /** ReplyWrapper cameraViewsReply */
    cameraViewsReply?: (ICameraViewsReply|null);
}

/** Represents a ReplyWrapper. */
export class ReplyWrapper implements IReplyWrapper {

    /**
     * Constructs a new ReplyWrapper.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReplyWrapper);

    /** ReplyWrapper requestId. */
    public requestId: number;

    /** ReplyWrapper requestHasMoreReplies. */
    public requestHasMoreReplies: boolean;

    /** ReplyWrapper selectElementIdsReply. */
    public selectElementIdsReply?: (ISelectElementIdsReply|null);

    /** ReplyWrapper exportMeshesReply. */
    public exportMeshesReply?: (IExportMeshesReply|null);

    /** ReplyWrapper textureReply. */
    public textureReply?: (ITextureReply|null);

    /** ReplyWrapper elementTooltipReply. */
    public elementTooltipReply?: (IElementTooltipReply|null);

    /** ReplyWrapper projectExtentsReply. */
    public projectExtentsReply?: (IProjectExtentsReply|null);

    /** ReplyWrapper cameraViewsReply. */
    public cameraViewsReply?: (ICameraViewsReply|null);

    /** ReplyWrapper msg. */
    public msg?: ("selectElementIdsReply"|"exportMeshesReply"|"textureReply"|"elementTooltipReply"|"projectExtentsReply"|"cameraViewsReply");

    /**
     * Creates a new ReplyWrapper instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReplyWrapper instance
     */
    public static create(properties?: IReplyWrapper): ReplyWrapper;

    /**
     * Encodes the specified ReplyWrapper message. Does not implicitly {@link ReplyWrapper.verify|verify} messages.
     * @param message ReplyWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReplyWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReplyWrapper message, length delimited. Does not implicitly {@link ReplyWrapper.verify|verify} messages.
     * @param message ReplyWrapper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReplyWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReplyWrapper message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReplyWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReplyWrapper;

    /**
     * Decodes a ReplyWrapper message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReplyWrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReplyWrapper;

    /**
     * Verifies a ReplyWrapper message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReplyWrapper message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReplyWrapper
     */
    public static fromObject(object: { [k: string]: any }): ReplyWrapper;

    /**
     * Creates a plain object from a ReplyWrapper message. Also converts values to other types if specified.
     * @param message ReplyWrapper
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReplyWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReplyWrapper to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SelectElementIdsRequest. */
export interface ISelectElementIdsRequest {

    /** SelectElementIdsRequest selectFilter */
    selectFilter?: (string|null);
}

/** Represents a SelectElementIdsRequest. */
export class SelectElementIdsRequest implements ISelectElementIdsRequest {

    /**
     * Constructs a new SelectElementIdsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectElementIdsRequest);

    /** SelectElementIdsRequest selectFilter. */
    public selectFilter: string;

    /**
     * Creates a new SelectElementIdsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectElementIdsRequest instance
     */
    public static create(properties?: ISelectElementIdsRequest): SelectElementIdsRequest;

    /**
     * Encodes the specified SelectElementIdsRequest message. Does not implicitly {@link SelectElementIdsRequest.verify|verify} messages.
     * @param message SelectElementIdsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectElementIdsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectElementIdsRequest message, length delimited. Does not implicitly {@link SelectElementIdsRequest.verify|verify} messages.
     * @param message SelectElementIdsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectElementIdsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectElementIdsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectElementIdsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectElementIdsRequest;

    /**
     * Decodes a SelectElementIdsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectElementIdsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectElementIdsRequest;

    /**
     * Verifies a SelectElementIdsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectElementIdsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectElementIdsRequest
     */
    public static fromObject(object: { [k: string]: any }): SelectElementIdsRequest;

    /**
     * Creates a plain object from a SelectElementIdsRequest message. Also converts values to other types if specified.
     * @param message SelectElementIdsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectElementIdsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectElementIdsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SelectElementIdsReply. */
export interface ISelectElementIdsReply {

    /** SelectElementIdsReply elementIds */
    elementIds?: (string[]|null);
}

/** Represents a SelectElementIdsReply. */
export class SelectElementIdsReply implements ISelectElementIdsReply {

    /**
     * Constructs a new SelectElementIdsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectElementIdsReply);

    /** SelectElementIdsReply elementIds. */
    public elementIds: string[];

    /**
     * Creates a new SelectElementIdsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectElementIdsReply instance
     */
    public static create(properties?: ISelectElementIdsReply): SelectElementIdsReply;

    /**
     * Encodes the specified SelectElementIdsReply message. Does not implicitly {@link SelectElementIdsReply.verify|verify} messages.
     * @param message SelectElementIdsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectElementIdsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectElementIdsReply message, length delimited. Does not implicitly {@link SelectElementIdsReply.verify|verify} messages.
     * @param message SelectElementIdsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectElementIdsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectElementIdsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectElementIdsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectElementIdsReply;

    /**
     * Decodes a SelectElementIdsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectElementIdsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectElementIdsReply;

    /**
     * Verifies a SelectElementIdsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectElementIdsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectElementIdsReply
     */
    public static fromObject(object: { [k: string]: any }): SelectElementIdsReply;

    /**
     * Creates a plain object from a SelectElementIdsReply message. Also converts values to other types if specified.
     * @param message SelectElementIdsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectElementIdsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectElementIdsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ExportMeshesRequest. */
export interface IExportMeshesRequest {

    /** ExportMeshesRequest elementIds */
    elementIds?: (string[]|null);

    /** ExportMeshesRequest chordTol */
    chordTol?: (number|null);
}

/** Represents an ExportMeshesRequest. */
export class ExportMeshesRequest implements IExportMeshesRequest {

    /**
     * Constructs a new ExportMeshesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExportMeshesRequest);

    /** ExportMeshesRequest elementIds. */
    public elementIds: string[];

    /** ExportMeshesRequest chordTol. */
    public chordTol: number;

    /**
     * Creates a new ExportMeshesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExportMeshesRequest instance
     */
    public static create(properties?: IExportMeshesRequest): ExportMeshesRequest;

    /**
     * Encodes the specified ExportMeshesRequest message. Does not implicitly {@link ExportMeshesRequest.verify|verify} messages.
     * @param message ExportMeshesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExportMeshesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExportMeshesRequest message, length delimited. Does not implicitly {@link ExportMeshesRequest.verify|verify} messages.
     * @param message ExportMeshesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExportMeshesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExportMeshesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExportMeshesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExportMeshesRequest;

    /**
     * Decodes an ExportMeshesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExportMeshesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExportMeshesRequest;

    /**
     * Verifies an ExportMeshesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExportMeshesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExportMeshesRequest
     */
    public static fromObject(object: { [k: string]: any }): ExportMeshesRequest;

    /**
     * Creates a plain object from an ExportMeshesRequest message. Also converts values to other types if specified.
     * @param message ExportMeshesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExportMeshesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExportMeshesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ExportMeshesReply. */
export interface IExportMeshesReply {

    /** ExportMeshesReply elementId */
    elementId?: (string|null);

    /** ExportMeshesReply color */
    color?: (number|null);

    /** ExportMeshesReply indexCount */
    indexCount?: (number|null);

    /** ExportMeshesReply vertexCount */
    vertexCount?: (number|null);

    /** ExportMeshesReply meshData */
    meshData?: (Uint8Array|null);

    /** ExportMeshesReply textureId */
    textureId?: (string|null);
}

/** Represents an ExportMeshesReply. */
export class ExportMeshesReply implements IExportMeshesReply {

    /**
     * Constructs a new ExportMeshesReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExportMeshesReply);

    /** ExportMeshesReply elementId. */
    public elementId: string;

    /** ExportMeshesReply color. */
    public color: number;

    /** ExportMeshesReply indexCount. */
    public indexCount: number;

    /** ExportMeshesReply vertexCount. */
    public vertexCount: number;

    /** ExportMeshesReply meshData. */
    public meshData: Uint8Array;

    /** ExportMeshesReply textureId. */
    public textureId: string;

    /**
     * Creates a new ExportMeshesReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExportMeshesReply instance
     */
    public static create(properties?: IExportMeshesReply): ExportMeshesReply;

    /**
     * Encodes the specified ExportMeshesReply message. Does not implicitly {@link ExportMeshesReply.verify|verify} messages.
     * @param message ExportMeshesReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExportMeshesReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExportMeshesReply message, length delimited. Does not implicitly {@link ExportMeshesReply.verify|verify} messages.
     * @param message ExportMeshesReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExportMeshesReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExportMeshesReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExportMeshesReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExportMeshesReply;

    /**
     * Decodes an ExportMeshesReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExportMeshesReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExportMeshesReply;

    /**
     * Verifies an ExportMeshesReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExportMeshesReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExportMeshesReply
     */
    public static fromObject(object: { [k: string]: any }): ExportMeshesReply;

    /**
     * Creates a plain object from an ExportMeshesReply message. Also converts values to other types if specified.
     * @param message ExportMeshesReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExportMeshesReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExportMeshesReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TextureRequest. */
export interface ITextureRequest {

    /** TextureRequest textureId */
    textureId?: (string|null);
}

/** Represents a TextureRequest. */
export class TextureRequest implements ITextureRequest {

    /**
     * Constructs a new TextureRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextureRequest);

    /** TextureRequest textureId. */
    public textureId: string;

    /**
     * Creates a new TextureRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextureRequest instance
     */
    public static create(properties?: ITextureRequest): TextureRequest;

    /**
     * Encodes the specified TextureRequest message. Does not implicitly {@link TextureRequest.verify|verify} messages.
     * @param message TextureRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextureRequest message, length delimited. Does not implicitly {@link TextureRequest.verify|verify} messages.
     * @param message TextureRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextureRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextureRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextureRequest;

    /**
     * Decodes a TextureRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextureRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextureRequest;

    /**
     * Verifies a TextureRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextureRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextureRequest
     */
    public static fromObject(object: { [k: string]: any }): TextureRequest;

    /**
     * Creates a plain object from a TextureRequest message. Also converts values to other types if specified.
     * @param message TextureRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextureRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TextureReply. */
export interface ITextureReply {

    /** TextureReply textureId */
    textureId?: (string|null);

    /** TextureReply textureData */
    textureData?: (Uint8Array|null);
}

/** Represents a TextureReply. */
export class TextureReply implements ITextureReply {

    /**
     * Constructs a new TextureReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextureReply);

    /** TextureReply textureId. */
    public textureId: string;

    /** TextureReply textureData. */
    public textureData: Uint8Array;

    /**
     * Creates a new TextureReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextureReply instance
     */
    public static create(properties?: ITextureReply): TextureReply;

    /**
     * Encodes the specified TextureReply message. Does not implicitly {@link TextureReply.verify|verify} messages.
     * @param message TextureReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextureReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextureReply message, length delimited. Does not implicitly {@link TextureReply.verify|verify} messages.
     * @param message TextureReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextureReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextureReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextureReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextureReply;

    /**
     * Decodes a TextureReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextureReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextureReply;

    /**
     * Verifies a TextureReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextureReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextureReply
     */
    public static fromObject(object: { [k: string]: any }): TextureReply;

    /**
     * Creates a plain object from a TextureReply message. Also converts values to other types if specified.
     * @param message TextureReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextureReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextureReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ElementTooltipRequest. */
export interface IElementTooltipRequest {

    /** ElementTooltipRequest elementId */
    elementId?: (string|null);
}

/** Represents an ElementTooltipRequest. */
export class ElementTooltipRequest implements IElementTooltipRequest {

    /**
     * Constructs a new ElementTooltipRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IElementTooltipRequest);

    /** ElementTooltipRequest elementId. */
    public elementId: string;

    /**
     * Creates a new ElementTooltipRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ElementTooltipRequest instance
     */
    public static create(properties?: IElementTooltipRequest): ElementTooltipRequest;

    /**
     * Encodes the specified ElementTooltipRequest message. Does not implicitly {@link ElementTooltipRequest.verify|verify} messages.
     * @param message ElementTooltipRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IElementTooltipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ElementTooltipRequest message, length delimited. Does not implicitly {@link ElementTooltipRequest.verify|verify} messages.
     * @param message ElementTooltipRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IElementTooltipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ElementTooltipRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ElementTooltipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ElementTooltipRequest;

    /**
     * Decodes an ElementTooltipRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ElementTooltipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ElementTooltipRequest;

    /**
     * Verifies an ElementTooltipRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ElementTooltipRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ElementTooltipRequest
     */
    public static fromObject(object: { [k: string]: any }): ElementTooltipRequest;

    /**
     * Creates a plain object from an ElementTooltipRequest message. Also converts values to other types if specified.
     * @param message ElementTooltipRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ElementTooltipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ElementTooltipRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ElementTooltipReply. */
export interface IElementTooltipReply {

    /** ElementTooltipReply elementId */
    elementId?: (string|null);

    /** ElementTooltipReply classLabel */
    classLabel?: (string|null);

    /** ElementTooltipReply categoryLabel */
    categoryLabel?: (string|null);

    /** ElementTooltipReply modelLabel */
    modelLabel?: (string|null);
}

/** Represents an ElementTooltipReply. */
export class ElementTooltipReply implements IElementTooltipReply {

    /**
     * Constructs a new ElementTooltipReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IElementTooltipReply);

    /** ElementTooltipReply elementId. */
    public elementId: string;

    /** ElementTooltipReply classLabel. */
    public classLabel: string;

    /** ElementTooltipReply categoryLabel. */
    public categoryLabel: string;

    /** ElementTooltipReply modelLabel. */
    public modelLabel: string;

    /**
     * Creates a new ElementTooltipReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ElementTooltipReply instance
     */
    public static create(properties?: IElementTooltipReply): ElementTooltipReply;

    /**
     * Encodes the specified ElementTooltipReply message. Does not implicitly {@link ElementTooltipReply.verify|verify} messages.
     * @param message ElementTooltipReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IElementTooltipReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ElementTooltipReply message, length delimited. Does not implicitly {@link ElementTooltipReply.verify|verify} messages.
     * @param message ElementTooltipReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IElementTooltipReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ElementTooltipReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ElementTooltipReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ElementTooltipReply;

    /**
     * Decodes an ElementTooltipReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ElementTooltipReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ElementTooltipReply;

    /**
     * Verifies an ElementTooltipReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ElementTooltipReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ElementTooltipReply
     */
    public static fromObject(object: { [k: string]: any }): ElementTooltipReply;

    /**
     * Creates a plain object from an ElementTooltipReply message. Also converts values to other types if specified.
     * @param message ElementTooltipReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ElementTooltipReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ElementTooltipReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ProjectExtentsRequest. */
export interface IProjectExtentsRequest {
}

/** Represents a ProjectExtentsRequest. */
export class ProjectExtentsRequest implements IProjectExtentsRequest {

    /**
     * Constructs a new ProjectExtentsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProjectExtentsRequest);

    /**
     * Creates a new ProjectExtentsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProjectExtentsRequest instance
     */
    public static create(properties?: IProjectExtentsRequest): ProjectExtentsRequest;

    /**
     * Encodes the specified ProjectExtentsRequest message. Does not implicitly {@link ProjectExtentsRequest.verify|verify} messages.
     * @param message ProjectExtentsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProjectExtentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProjectExtentsRequest message, length delimited. Does not implicitly {@link ProjectExtentsRequest.verify|verify} messages.
     * @param message ProjectExtentsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProjectExtentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProjectExtentsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProjectExtentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProjectExtentsRequest;

    /**
     * Decodes a ProjectExtentsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProjectExtentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProjectExtentsRequest;

    /**
     * Verifies a ProjectExtentsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProjectExtentsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProjectExtentsRequest
     */
    public static fromObject(object: { [k: string]: any }): ProjectExtentsRequest;

    /**
     * Creates a plain object from a ProjectExtentsRequest message. Also converts values to other types if specified.
     * @param message ProjectExtentsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProjectExtentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProjectExtentsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ProjectExtentsReply. */
export interface IProjectExtentsReply {

    /** ProjectExtentsReply minX */
    minX?: (number|null);

    /** ProjectExtentsReply minY */
    minY?: (number|null);

    /** ProjectExtentsReply minZ */
    minZ?: (number|null);

    /** ProjectExtentsReply maxX */
    maxX?: (number|null);

    /** ProjectExtentsReply maxY */
    maxY?: (number|null);

    /** ProjectExtentsReply maxZ */
    maxZ?: (number|null);
}

/** Represents a ProjectExtentsReply. */
export class ProjectExtentsReply implements IProjectExtentsReply {

    /**
     * Constructs a new ProjectExtentsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProjectExtentsReply);

    /** ProjectExtentsReply minX. */
    public minX: number;

    /** ProjectExtentsReply minY. */
    public minY: number;

    /** ProjectExtentsReply minZ. */
    public minZ: number;

    /** ProjectExtentsReply maxX. */
    public maxX: number;

    /** ProjectExtentsReply maxY. */
    public maxY: number;

    /** ProjectExtentsReply maxZ. */
    public maxZ: number;

    /**
     * Creates a new ProjectExtentsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProjectExtentsReply instance
     */
    public static create(properties?: IProjectExtentsReply): ProjectExtentsReply;

    /**
     * Encodes the specified ProjectExtentsReply message. Does not implicitly {@link ProjectExtentsReply.verify|verify} messages.
     * @param message ProjectExtentsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProjectExtentsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProjectExtentsReply message, length delimited. Does not implicitly {@link ProjectExtentsReply.verify|verify} messages.
     * @param message ProjectExtentsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProjectExtentsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProjectExtentsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProjectExtentsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProjectExtentsReply;

    /**
     * Decodes a ProjectExtentsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProjectExtentsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProjectExtentsReply;

    /**
     * Verifies a ProjectExtentsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProjectExtentsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProjectExtentsReply
     */
    public static fromObject(object: { [k: string]: any }): ProjectExtentsReply;

    /**
     * Creates a plain object from a ProjectExtentsReply message. Also converts values to other types if specified.
     * @param message ProjectExtentsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProjectExtentsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProjectExtentsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CameraViewsRequest. */
export interface ICameraViewsRequest {
}

/** Represents a CameraViewsRequest. */
export class CameraViewsRequest implements ICameraViewsRequest {

    /**
     * Constructs a new CameraViewsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICameraViewsRequest);

    /**
     * Creates a new CameraViewsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CameraViewsRequest instance
     */
    public static create(properties?: ICameraViewsRequest): CameraViewsRequest;

    /**
     * Encodes the specified CameraViewsRequest message. Does not implicitly {@link CameraViewsRequest.verify|verify} messages.
     * @param message CameraViewsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICameraViewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CameraViewsRequest message, length delimited. Does not implicitly {@link CameraViewsRequest.verify|verify} messages.
     * @param message CameraViewsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICameraViewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CameraViewsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CameraViewsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CameraViewsRequest;

    /**
     * Decodes a CameraViewsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CameraViewsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CameraViewsRequest;

    /**
     * Verifies a CameraViewsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CameraViewsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CameraViewsRequest
     */
    public static fromObject(object: { [k: string]: any }): CameraViewsRequest;

    /**
     * Creates a plain object from a CameraViewsRequest message. Also converts values to other types if specified.
     * @param message CameraViewsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CameraViewsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CameraViewsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CameraViewsReply. */
export interface ICameraViewsReply {

    /** CameraViewsReply elementId */
    elementId?: (string|null);

    /** CameraViewsReply displayLabel */
    displayLabel?: (string|null);

    /** CameraViewsReply eyePointX */
    eyePointX?: (number|null);

    /** CameraViewsReply eyePointY */
    eyePointY?: (number|null);

    /** CameraViewsReply eyePointZ */
    eyePointZ?: (number|null);

    /** CameraViewsReply yaw */
    yaw?: (number|null);

    /** CameraViewsReply pitch */
    pitch?: (number|null);

    /** CameraViewsReply roll */
    roll?: (number|null);
}

/** Represents a CameraViewsReply. */
export class CameraViewsReply implements ICameraViewsReply {

    /**
     * Constructs a new CameraViewsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICameraViewsReply);

    /** CameraViewsReply elementId. */
    public elementId: string;

    /** CameraViewsReply displayLabel. */
    public displayLabel: string;

    /** CameraViewsReply eyePointX. */
    public eyePointX: number;

    /** CameraViewsReply eyePointY. */
    public eyePointY: number;

    /** CameraViewsReply eyePointZ. */
    public eyePointZ: number;

    /** CameraViewsReply yaw. */
    public yaw: number;

    /** CameraViewsReply pitch. */
    public pitch: number;

    /** CameraViewsReply roll. */
    public roll: number;

    /**
     * Creates a new CameraViewsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CameraViewsReply instance
     */
    public static create(properties?: ICameraViewsReply): CameraViewsReply;

    /**
     * Encodes the specified CameraViewsReply message. Does not implicitly {@link CameraViewsReply.verify|verify} messages.
     * @param message CameraViewsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICameraViewsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CameraViewsReply message, length delimited. Does not implicitly {@link CameraViewsReply.verify|verify} messages.
     * @param message CameraViewsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICameraViewsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CameraViewsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CameraViewsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CameraViewsReply;

    /**
     * Decodes a CameraViewsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CameraViewsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CameraViewsReply;

    /**
     * Verifies a CameraViewsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CameraViewsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CameraViewsReply
     */
    public static fromObject(object: { [k: string]: any }): CameraViewsReply;

    /**
     * Creates a plain object from a CameraViewsReply message. Also converts values to other types if specified.
     * @param message CameraViewsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CameraViewsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CameraViewsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
