import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class SourceContext implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): SourceContext;
    static refineValues(_instance: SourceContext): void;
    static deserializeBinaryFromReader(_instance: SourceContext, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: SourceContext, _writer: BinaryWriter): void;
    private _fileName?;
    constructor(_value?: RecursivePartial<SourceContext.AsObject>);
    get fileName(): string | undefined;
    set fileName(value: string | undefined);
    serializeBinary(): Uint8Array;
    toObject(): SourceContext.AsObject;
    toJSON(): SourceContext.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): SourceContext.AsProtobufJSON;
}
export declare module SourceContext {
    interface AsObject {
        fileName?: string;
    }
    interface AsProtobufJSON {
        fileName?: string;
    }
}
