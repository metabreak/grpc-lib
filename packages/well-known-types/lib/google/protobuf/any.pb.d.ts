import { GrpcMessage, GrpcMessageClass, GrpcMessagePool, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Any implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Any;
    private static prefix;
    static pack(msg: GrpcMessage): Any;
    static refineValues(_instance: Any): void;
    static deserializeBinaryFromReader(_instance: Any, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Any, _writer: BinaryWriter): void;
    private _typeUrl?;
    private _value?;
    constructor(_value?: RecursivePartial<Any.AsObject>);
    get typeUrl(): string | undefined;
    set typeUrl(value: string | undefined);
    get value(): Uint8Array | undefined;
    set value(value: Uint8Array | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Any.AsObject;
    toJSON(): Any.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Any.AsProtobufJSON;
    getPackedMessageId(): string | null;
    getPackedMessageType(messagePool: GrpcMessagePool, throwWhenNotInThePool?: boolean): GrpcMessageClass<GrpcMessage> | null;
    unpack<M extends GrpcMessage>(messagePool: GrpcMessagePool): M;
    pack(msg: GrpcMessage): void;
}
export declare module Any {
    interface AsObject {
        typeUrl?: string;
        value?: Uint8Array;
    }
    type AsProtobufJSON = {
        '@type': string;
        value?: string;
        [prop: string]: any;
    };
}
