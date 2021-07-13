import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class FieldMask implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): FieldMask;
    static refineValues(_instance: FieldMask): void;
    static deserializeBinaryFromReader(_instance: FieldMask, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: FieldMask, _writer: BinaryWriter): void;
    private _paths?;
    constructor(_value?: RecursivePartial<FieldMask.AsObject>);
    get paths(): string[] | undefined;
    set paths(value: string[] | undefined);
    serializeBinary(): Uint8Array;
    toObject(): FieldMask.AsObject;
    toJSON(): FieldMask.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): FieldMask.AsProtobufJSON;
}
export declare module FieldMask {
    interface AsObject {
        paths?: string[];
    }
    type AsProtobufJSON = string;
}
