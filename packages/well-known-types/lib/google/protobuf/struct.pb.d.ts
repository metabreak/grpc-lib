import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum NullValue {
    NULL_VALUE = 0
}
export declare class Struct implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Struct;
    static refineValues(_instance: Struct): void;
    static deserializeBinaryFromReader(_instance: Struct, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Struct, _writer: BinaryWriter): void;
    private _fields?;
    constructor(_value?: RecursivePartial<Struct.AsObject>);
    get fields(): {
        [prop: string]: Value;
    } | undefined;
    set fields(value: {
        [prop: string]: Value;
    } | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Struct.AsObject;
    toJSON(): Struct.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Struct.AsProtobufJSON;
}
export declare module Struct {
    interface AsObject {
        fields?: {
            [prop: string]: Value;
        };
    }
    type AsProtobufJSON = {
        [prop: string]: Value.AsProtobufJSON;
    };
    class FieldsEntry implements GrpcMessage {
        static id: string;
        static deserializeBinary(bytes: ByteSource): FieldsEntry;
        static refineValues(_instance: FieldsEntry): void;
        static deserializeBinaryFromReader(_instance: FieldsEntry, _reader: BinaryReader): void;
        static serializeBinaryToWriter(_instance: FieldsEntry, _writer: BinaryWriter): void;
        private _key?;
        private _value?;
        constructor(_value?: RecursivePartial<FieldsEntry.AsObject>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): Value | undefined;
        set value(value: Value | undefined);
        serializeBinary(): Uint8Array;
        toObject(): FieldsEntry.AsObject;
        toJSON(): FieldsEntry.AsObject;
        toProtobufJSON(options?: ToProtobufJSONOptions): FieldsEntry.AsProtobufJSON;
    }
    module FieldsEntry {
        interface AsObject {
            key?: string;
            value?: Value.AsObject;
        }
        interface AsProtobufJSON {
            key?: string;
            value?: Value.AsProtobufJSON | null;
        }
    }
}
export declare class Value implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Value;
    static refineValues(_instance: Value): void;
    static deserializeBinaryFromReader(_instance: Value, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Value, _writer: BinaryWriter): void;
    private _nullValue?;
    private _numberValue?;
    private _stringValue?;
    private _boolValue?;
    private _structValue?;
    private _listValue?;
    private _kind;
    constructor(_value?: RecursivePartial<Value.AsObject>);
    get nullValue(): NullValue | undefined;
    set nullValue(value: NullValue | undefined);
    get numberValue(): number | undefined;
    set numberValue(value: number | undefined);
    get stringValue(): string | undefined;
    set stringValue(value: string | undefined);
    get boolValue(): boolean | undefined;
    set boolValue(value: boolean | undefined);
    get structValue(): Struct | undefined;
    set structValue(value: Struct | undefined);
    get listValue(): ListValue | undefined;
    set listValue(value: ListValue | undefined);
    get kind(): Value.KindCase;
    serializeBinary(): Uint8Array;
    toObject(): Value.AsObject;
    toJSON(): Value.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Value.AsProtobufJSON;
}
export declare module Value {
    interface AsObject {
        nullValue?: NullValue;
        numberValue?: number;
        stringValue?: string;
        boolValue?: boolean;
        structValue?: Struct.AsObject;
        listValue?: ListValue.AsObject;
    }
    type AsProtobufJSON = null | string | number | boolean | Struct.AsProtobufJSON | Value.AsProtobufJSON[];
    enum KindCase {
        none = 0,
        nullValue = 1,
        numberValue = 2,
        stringValue = 3,
        boolValue = 4,
        structValue = 5,
        listValue = 6
    }
}
export declare class ListValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): ListValue;
    static refineValues(_instance: ListValue): void;
    static deserializeBinaryFromReader(_instance: ListValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: ListValue, _writer: BinaryWriter): void;
    private _values?;
    constructor(_value?: RecursivePartial<ListValue.AsObject>);
    get values(): Value[] | undefined;
    set values(value: Value[] | undefined);
    serializeBinary(): Uint8Array;
    toObject(): ListValue.AsObject;
    toJSON(): ListValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): ListValue.AsProtobufJSON;
}
export declare module ListValue {
    interface AsObject {
        values?: Value.AsObject[];
    }
    type AsProtobufJSON = Value.AsProtobufJSON[];
}
