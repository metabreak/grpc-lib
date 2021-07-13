import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class DoubleValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): DoubleValue;
    static refineValues(_instance: DoubleValue): void;
    static deserializeBinaryFromReader(_instance: DoubleValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: DoubleValue, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<DoubleValue.AsObject>);
    get value(): number | undefined;
    set value(value: number | undefined);
    serializeBinary(): Uint8Array;
    toObject(): DoubleValue.AsObject;
    toJSON(): DoubleValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): DoubleValue.AsProtobufJSON;
}
export declare module DoubleValue {
    interface AsObject {
        value?: number;
    }
    type AsProtobufJSON = number;
}
export declare class FloatValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): FloatValue;
    static refineValues(_instance: FloatValue): void;
    static deserializeBinaryFromReader(_instance: FloatValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: FloatValue, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<FloatValue.AsObject>);
    get value(): number | undefined;
    set value(value: number | undefined);
    serializeBinary(): Uint8Array;
    toObject(): FloatValue.AsObject;
    toJSON(): FloatValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): FloatValue.AsProtobufJSON;
}
export declare module FloatValue {
    interface AsObject {
        value?: number;
    }
    type AsProtobufJSON = number;
}
export declare class Int64Value implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Int64Value;
    static refineValues(_instance: Int64Value): void;
    static deserializeBinaryFromReader(_instance: Int64Value, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Int64Value, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<Int64Value.AsObject>);
    get value(): string | undefined;
    set value(value: string | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Int64Value.AsObject;
    toJSON(): Int64Value.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Int64Value.AsProtobufJSON;
}
export declare module Int64Value {
    interface AsObject {
        value?: string;
    }
    type AsProtobufJSON = string;
}
export declare class UInt64Value implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): UInt64Value;
    static refineValues(_instance: UInt64Value): void;
    static deserializeBinaryFromReader(_instance: UInt64Value, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: UInt64Value, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<UInt64Value.AsObject>);
    get value(): string | undefined;
    set value(value: string | undefined);
    serializeBinary(): Uint8Array;
    toObject(): UInt64Value.AsObject;
    toJSON(): UInt64Value.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): UInt64Value.AsProtobufJSON;
}
export declare module UInt64Value {
    interface AsObject {
        value?: string;
    }
    type AsProtobufJSON = string;
}
export declare class Int32Value implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Int32Value;
    static refineValues(_instance: Int32Value): void;
    static deserializeBinaryFromReader(_instance: Int32Value, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Int32Value, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<Int32Value.AsObject>);
    get value(): number | undefined;
    set value(value: number | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Int32Value.AsObject;
    toJSON(): Int32Value.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Int32Value.AsProtobufJSON;
}
export declare module Int32Value {
    interface AsObject {
        value?: number;
    }
    type AsProtobufJSON = number;
}
export declare class UInt32Value implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): UInt32Value;
    static refineValues(_instance: UInt32Value): void;
    static deserializeBinaryFromReader(_instance: UInt32Value, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: UInt32Value, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<UInt32Value.AsObject>);
    get value(): number | undefined;
    set value(value: number | undefined);
    serializeBinary(): Uint8Array;
    toObject(): UInt32Value.AsObject;
    toJSON(): UInt32Value.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): UInt32Value.AsProtobufJSON;
}
export declare module UInt32Value {
    interface AsObject {
        value?: number;
    }
    type AsProtobufJSON = number;
}
export declare class BoolValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): BoolValue;
    static refineValues(_instance: BoolValue): void;
    static deserializeBinaryFromReader(_instance: BoolValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: BoolValue, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<BoolValue.AsObject>);
    get value(): boolean | undefined;
    set value(value: boolean | undefined);
    serializeBinary(): Uint8Array;
    toObject(): BoolValue.AsObject;
    toJSON(): BoolValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): BoolValue.AsProtobufJSON;
}
export declare module BoolValue {
    interface AsObject {
        value?: boolean;
    }
    type AsProtobufJSON = boolean;
}
export declare class StringValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): StringValue;
    static refineValues(_instance: StringValue): void;
    static deserializeBinaryFromReader(_instance: StringValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: StringValue, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<StringValue.AsObject>);
    get value(): string | undefined;
    set value(value: string | undefined);
    serializeBinary(): Uint8Array;
    toObject(): StringValue.AsObject;
    toJSON(): StringValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): StringValue.AsProtobufJSON;
}
export declare module StringValue {
    interface AsObject {
        value?: string;
    }
    type AsProtobufJSON = string;
}
export declare class BytesValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): BytesValue;
    static refineValues(_instance: BytesValue): void;
    static deserializeBinaryFromReader(_instance: BytesValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: BytesValue, _writer: BinaryWriter): void;
    private _value?;
    constructor(_value?: RecursivePartial<BytesValue.AsObject>);
    get value(): Uint8Array | undefined;
    set value(value: Uint8Array | undefined);
    serializeBinary(): Uint8Array;
    toObject(): BytesValue.AsObject;
    toJSON(): BytesValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): BytesValue.AsProtobufJSON;
}
export declare module BytesValue {
    interface AsObject {
        value?: Uint8Array;
    }
    type AsProtobufJSON = string;
}
