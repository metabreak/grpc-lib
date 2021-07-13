import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf001 from '../../google/protobuf/source-context.pb';
import * as googleProtobuf002 from '../../google/protobuf/type.pb';
export declare class Api implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Api;
    static refineValues(_instance: Api): void;
    static deserializeBinaryFromReader(_instance: Api, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Api, _writer: BinaryWriter): void;
    private _name?;
    private _methods?;
    private _options?;
    private _version?;
    private _sourceContext?;
    private _mixins?;
    private _syntax?;
    constructor(_value?: RecursivePartial<Api.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get methods(): Method[] | undefined;
    set methods(value: Method[] | undefined);
    get options(): googleProtobuf002.Option[] | undefined;
    set options(value: googleProtobuf002.Option[] | undefined);
    get version(): string | undefined;
    set version(value: string | undefined);
    get sourceContext(): googleProtobuf001.SourceContext | undefined;
    set sourceContext(value: googleProtobuf001.SourceContext | undefined);
    get mixins(): Mixin[] | undefined;
    set mixins(value: Mixin[] | undefined);
    get syntax(): googleProtobuf002.Syntax | undefined;
    set syntax(value: googleProtobuf002.Syntax | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Api.AsObject;
    toJSON(): Api.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Api.AsProtobufJSON;
}
export declare module Api {
    interface AsObject {
        name?: string;
        methods?: Method.AsObject[];
        options?: googleProtobuf002.Option.AsObject[];
        version?: string;
        sourceContext?: googleProtobuf001.SourceContext.AsObject;
        mixins?: Mixin.AsObject[];
        syntax?: googleProtobuf002.Syntax;
    }
    interface AsProtobufJSON {
        name?: string;
        methods?: Method.AsProtobufJSON[] | null;
        options?: googleProtobuf002.Option.AsProtobufJSON[] | null;
        version?: string;
        sourceContext?: googleProtobuf001.SourceContext.AsProtobufJSON | null;
        mixins?: Mixin.AsProtobufJSON[] | null;
        syntax?: string;
    }
}
export declare class Method implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Method;
    static refineValues(_instance: Method): void;
    static deserializeBinaryFromReader(_instance: Method, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Method, _writer: BinaryWriter): void;
    private _name?;
    private _requestTypeUrl?;
    private _requestStreaming?;
    private _responseTypeUrl?;
    private _responseStreaming?;
    private _options?;
    private _syntax?;
    constructor(_value?: RecursivePartial<Method.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get requestTypeUrl(): string | undefined;
    set requestTypeUrl(value: string | undefined);
    get requestStreaming(): boolean | undefined;
    set requestStreaming(value: boolean | undefined);
    get responseTypeUrl(): string | undefined;
    set responseTypeUrl(value: string | undefined);
    get responseStreaming(): boolean | undefined;
    set responseStreaming(value: boolean | undefined);
    get options(): googleProtobuf002.Option[] | undefined;
    set options(value: googleProtobuf002.Option[] | undefined);
    get syntax(): googleProtobuf002.Syntax | undefined;
    set syntax(value: googleProtobuf002.Syntax | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Method.AsObject;
    toJSON(): Method.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Method.AsProtobufJSON;
}
export declare module Method {
    interface AsObject {
        name?: string;
        requestTypeUrl?: string;
        requestStreaming?: boolean;
        responseTypeUrl?: string;
        responseStreaming?: boolean;
        options?: googleProtobuf002.Option.AsObject[];
        syntax?: googleProtobuf002.Syntax;
    }
    interface AsProtobufJSON {
        name?: string;
        requestTypeUrl?: string;
        requestStreaming?: boolean;
        responseTypeUrl?: string;
        responseStreaming?: boolean;
        options?: googleProtobuf002.Option.AsProtobufJSON[] | null;
        syntax?: string;
    }
}
export declare class Mixin implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Mixin;
    static refineValues(_instance: Mixin): void;
    static deserializeBinaryFromReader(_instance: Mixin, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Mixin, _writer: BinaryWriter): void;
    private _name?;
    private _root?;
    constructor(_value?: RecursivePartial<Mixin.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get root(): string | undefined;
    set root(value: string | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Mixin.AsObject;
    toJSON(): Mixin.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Mixin.AsProtobufJSON;
}
export declare module Mixin {
    interface AsObject {
        name?: string;
        root?: string;
    }
    interface AsProtobufJSON {
        name?: string;
        root?: string;
    }
}
