import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Timestamp implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Timestamp;
    static fromDate(date: Date): Timestamp;
    static fromISOString(isoDate: string): Timestamp;
    static refineValues(_instance: Timestamp): void;
    static deserializeBinaryFromReader(_instance: Timestamp, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Timestamp, _writer: BinaryWriter): void;
    private _seconds?;
    private _nanos?;
    constructor(_value?: RecursivePartial<Timestamp.AsObject>);
    get seconds(): string | undefined;
    set seconds(value: string | undefined);
    get nanos(): number | undefined;
    set nanos(value: number | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Timestamp.AsObject;
    toJSON(): Timestamp.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Timestamp.AsProtobufJSON;
    fromDate(date: Date): void;
    toDate(): Date;
    fromISOString(isoDate: string): void;
    toISOString(): string;
}
export declare module Timestamp {
    interface AsObject {
        seconds?: string;
        nanos?: number;
    }
    type AsProtobufJSON = string;
}
