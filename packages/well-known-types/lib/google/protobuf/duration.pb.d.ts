import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Duration implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Duration;
    static refineValues(_instance: Duration): void;
    static deserializeBinaryFromReader(_instance: Duration, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Duration, _writer: BinaryWriter): void;
    private _seconds?;
    private _nanos?;
    constructor(_value?: RecursivePartial<Duration.AsObject>);
    get seconds(): string | undefined;
    set seconds(value: string | undefined);
    get nanos(): number | undefined;
    set nanos(value: number | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Duration.AsObject;
    toJSON(): Duration.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Duration.AsProtobufJSON;
}
export declare module Duration {
    interface AsObject {
        seconds?: string;
        nanos?: number;
    }
    type AsProtobufJSON = string;
}
