import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Empty implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Empty;
    static refineValues(_instance: Empty): void;
    static deserializeBinaryFromReader(_instance: Empty, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Empty, _writer: BinaryWriter): void;
    constructor(_value?: RecursivePartial<Empty.AsObject>);
    serializeBinary(): Uint8Array;
    toObject(): Empty.AsObject;
    toJSON(): Empty.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Empty.AsProtobufJSON;
}
export declare module Empty {
    interface AsObject {
    }
    interface AsProtobufJSON {
    }
}
