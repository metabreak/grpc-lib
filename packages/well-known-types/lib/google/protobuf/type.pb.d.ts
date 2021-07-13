import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '../../google/protobuf/any.pb';
import * as googleProtobuf001 from '../../google/protobuf/source-context.pb';
export declare enum Syntax {
    SYNTAX_PROTO2 = 0,
    SYNTAX_PROTO3 = 1
}
export declare class Type implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Type;
    static refineValues(_instance: Type): void;
    static deserializeBinaryFromReader(_instance: Type, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Type, _writer: BinaryWriter): void;
    private _name?;
    private _fields?;
    private _oneofs?;
    private _options?;
    private _sourceContext?;
    private _syntax?;
    constructor(_value?: RecursivePartial<Type.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get fields(): Field[] | undefined;
    set fields(value: Field[] | undefined);
    get oneofs(): string[] | undefined;
    set oneofs(value: string[] | undefined);
    get options(): Option[] | undefined;
    set options(value: Option[] | undefined);
    get sourceContext(): googleProtobuf001.SourceContext | undefined;
    set sourceContext(value: googleProtobuf001.SourceContext | undefined);
    get syntax(): Syntax | undefined;
    set syntax(value: Syntax | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Type.AsObject;
    toJSON(): Type.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Type.AsProtobufJSON;
}
export declare module Type {
    interface AsObject {
        name?: string;
        fields?: Field.AsObject[];
        oneofs?: string[];
        options?: Option.AsObject[];
        sourceContext?: googleProtobuf001.SourceContext.AsObject;
        syntax?: Syntax;
    }
    interface AsProtobufJSON {
        name?: string;
        fields?: Field.AsProtobufJSON[] | null;
        oneofs?: string[];
        options?: Option.AsProtobufJSON[] | null;
        sourceContext?: googleProtobuf001.SourceContext.AsProtobufJSON | null;
        syntax?: string;
    }
}
export declare class Field implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Field;
    static refineValues(_instance: Field): void;
    static deserializeBinaryFromReader(_instance: Field, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Field, _writer: BinaryWriter): void;
    private _kind?;
    private _cardinality?;
    private _number?;
    private _name?;
    private _typeUrl?;
    private _oneofIndex?;
    private _packed?;
    private _options?;
    private _jsonName?;
    private _defaultValue?;
    constructor(_value?: RecursivePartial<Field.AsObject>);
    get kind(): Field.Kind | undefined;
    set kind(value: Field.Kind | undefined);
    get cardinality(): Field.Cardinality | undefined;
    set cardinality(value: Field.Cardinality | undefined);
    get number(): number | undefined;
    set number(value: number | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get typeUrl(): string | undefined;
    set typeUrl(value: string | undefined);
    get oneofIndex(): number | undefined;
    set oneofIndex(value: number | undefined);
    get packed(): boolean | undefined;
    set packed(value: boolean | undefined);
    get options(): Option[] | undefined;
    set options(value: Option[] | undefined);
    get jsonName(): string | undefined;
    set jsonName(value: string | undefined);
    get defaultValue(): string | undefined;
    set defaultValue(value: string | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Field.AsObject;
    toJSON(): Field.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Field.AsProtobufJSON;
}
export declare module Field {
    interface AsObject {
        kind?: Field.Kind;
        cardinality?: Field.Cardinality;
        number?: number;
        name?: string;
        typeUrl?: string;
        oneofIndex?: number;
        packed?: boolean;
        options?: Option.AsObject[];
        jsonName?: string;
        defaultValue?: string;
    }
    interface AsProtobufJSON {
        kind?: string;
        cardinality?: string;
        number?: number;
        name?: string;
        typeUrl?: string;
        oneofIndex?: number;
        packed?: boolean;
        options?: Option.AsProtobufJSON[] | null;
        jsonName?: string;
        defaultValue?: string;
    }
    enum Kind {
        TYPE_UNKNOWN = 0,
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18
    }
    enum Cardinality {
        CARDINALITY_UNKNOWN = 0,
        CARDINALITY_OPTIONAL = 1,
        CARDINALITY_REQUIRED = 2,
        CARDINALITY_REPEATED = 3
    }
}
export declare class Enum implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Enum;
    static refineValues(_instance: Enum): void;
    static deserializeBinaryFromReader(_instance: Enum, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Enum, _writer: BinaryWriter): void;
    private _name?;
    private _enumvalue?;
    private _options?;
    private _sourceContext?;
    private _syntax?;
    constructor(_value?: RecursivePartial<Enum.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get enumvalue(): EnumValue[] | undefined;
    set enumvalue(value: EnumValue[] | undefined);
    get options(): Option[] | undefined;
    set options(value: Option[] | undefined);
    get sourceContext(): googleProtobuf001.SourceContext | undefined;
    set sourceContext(value: googleProtobuf001.SourceContext | undefined);
    get syntax(): Syntax | undefined;
    set syntax(value: Syntax | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Enum.AsObject;
    toJSON(): Enum.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Enum.AsProtobufJSON;
}
export declare module Enum {
    interface AsObject {
        name?: string;
        enumvalue?: EnumValue.AsObject[];
        options?: Option.AsObject[];
        sourceContext?: googleProtobuf001.SourceContext.AsObject;
        syntax?: Syntax;
    }
    interface AsProtobufJSON {
        name?: string;
        enumvalue?: EnumValue.AsProtobufJSON[] | null;
        options?: Option.AsProtobufJSON[] | null;
        sourceContext?: googleProtobuf001.SourceContext.AsProtobufJSON | null;
        syntax?: string;
    }
}
export declare class EnumValue implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): EnumValue;
    static refineValues(_instance: EnumValue): void;
    static deserializeBinaryFromReader(_instance: EnumValue, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: EnumValue, _writer: BinaryWriter): void;
    private _name?;
    private _number?;
    private _options?;
    constructor(_value?: RecursivePartial<EnumValue.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get number(): number | undefined;
    set number(value: number | undefined);
    get options(): Option[] | undefined;
    set options(value: Option[] | undefined);
    serializeBinary(): Uint8Array;
    toObject(): EnumValue.AsObject;
    toJSON(): EnumValue.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): EnumValue.AsProtobufJSON;
}
export declare module EnumValue {
    interface AsObject {
        name?: string;
        number?: number;
        options?: Option.AsObject[];
    }
    interface AsProtobufJSON {
        name?: string;
        number?: number;
        options?: Option.AsProtobufJSON[] | null;
    }
}
export declare class Option implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): Option;
    static refineValues(_instance: Option): void;
    static deserializeBinaryFromReader(_instance: Option, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: Option, _writer: BinaryWriter): void;
    private _name?;
    private _value?;
    constructor(_value?: RecursivePartial<Option.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get value(): googleProtobuf000.Any | undefined;
    set value(value: googleProtobuf000.Any | undefined);
    serializeBinary(): Uint8Array;
    toObject(): Option.AsObject;
    toJSON(): Option.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): Option.AsProtobufJSON;
}
export declare module Option {
    interface AsObject {
        name?: string;
        value?: googleProtobuf000.Any.AsObject;
    }
    interface AsProtobufJSON {
        name?: string;
        value?: googleProtobuf000.Any.AsProtobufJSON | null;
    }
}
