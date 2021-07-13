import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@metabreak/grpc-worker-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from './google/protobuf/source-context.pb';
import * as googleProtobuf001 from './google/protobuf/type.pb';
import * as googleProtobuf002 from './google/protobuf/any.pb';
import * as googleProtobuf003 from './google/protobuf/api.pb';
import * as googleProtobuf004 from './google/protobuf/duration.pb';
import * as googleProtobuf005 from './google/protobuf/empty.pb';
import * as googleProtobuf006 from './google/protobuf/field-mask.pb';
import * as googleProtobuf007 from './google/protobuf/struct.pb';
import * as googleProtobuf008 from './google/protobuf/timestamp.pb';
import * as googleProtobuf009 from './google/protobuf/wrappers.pb';
export declare class TestMessage implements GrpcMessage {
    static id: string;
    static deserializeBinary(bytes: ByteSource): TestMessage;
    static refineValues(_instance: TestMessage): void;
    static deserializeBinaryFromReader(_instance: TestMessage, _reader: BinaryReader): void;
    static serializeBinaryToWriter(_instance: TestMessage, _writer: BinaryWriter): void;
    private _any?;
    private _timestamp?;
    private _duration?;
    private _empty?;
    private _struct?;
    private _api?;
    private _fieldMask?;
    private _sourceContext?;
    private _boolValue?;
    private _type?;
    constructor(_value?: RecursivePartial<TestMessage.AsObject>);
    get any(): googleProtobuf002.Any | undefined;
    set any(value: googleProtobuf002.Any | undefined);
    get timestamp(): googleProtobuf008.Timestamp | undefined;
    set timestamp(value: googleProtobuf008.Timestamp | undefined);
    get duration(): googleProtobuf004.Duration | undefined;
    set duration(value: googleProtobuf004.Duration | undefined);
    get empty(): googleProtobuf005.Empty | undefined;
    set empty(value: googleProtobuf005.Empty | undefined);
    get struct(): googleProtobuf007.Struct | undefined;
    set struct(value: googleProtobuf007.Struct | undefined);
    get api(): googleProtobuf003.Api | undefined;
    set api(value: googleProtobuf003.Api | undefined);
    get fieldMask(): googleProtobuf006.FieldMask | undefined;
    set fieldMask(value: googleProtobuf006.FieldMask | undefined);
    get sourceContext(): googleProtobuf000.SourceContext | undefined;
    set sourceContext(value: googleProtobuf000.SourceContext | undefined);
    get boolValue(): googleProtobuf009.BoolValue | undefined;
    set boolValue(value: googleProtobuf009.BoolValue | undefined);
    get type(): googleProtobuf001.Type | undefined;
    set type(value: googleProtobuf001.Type | undefined);
    serializeBinary(): Uint8Array;
    toObject(): TestMessage.AsObject;
    toJSON(): TestMessage.AsObject;
    toProtobufJSON(options?: ToProtobufJSONOptions): TestMessage.AsProtobufJSON;
}
export declare module TestMessage {
    interface AsObject {
        any?: googleProtobuf002.Any.AsObject;
        timestamp?: googleProtobuf008.Timestamp.AsObject;
        duration?: googleProtobuf004.Duration.AsObject;
        empty?: googleProtobuf005.Empty.AsObject;
        struct?: googleProtobuf007.Struct.AsObject;
        api?: googleProtobuf003.Api.AsObject;
        fieldMask?: googleProtobuf006.FieldMask.AsObject;
        sourceContext?: googleProtobuf000.SourceContext.AsObject;
        boolValue?: googleProtobuf009.BoolValue.AsObject;
        type?: googleProtobuf001.Type.AsObject;
    }
    interface AsProtobufJSON {
        any?: googleProtobuf002.Any.AsProtobufJSON | null;
        timestamp?: googleProtobuf008.Timestamp.AsProtobufJSON | null;
        duration?: googleProtobuf004.Duration.AsProtobufJSON | null;
        empty?: googleProtobuf005.Empty.AsProtobufJSON | null;
        struct?: googleProtobuf007.Struct.AsProtobufJSON | null;
        api?: googleProtobuf003.Api.AsProtobufJSON | null;
        fieldMask?: googleProtobuf006.FieldMask.AsProtobufJSON | null;
        sourceContext?: googleProtobuf000.SourceContext.AsProtobufJSON | null;
        boolValue?: googleProtobuf009.BoolValue.AsProtobufJSON | null;
        type?: googleProtobuf001.Type.AsProtobufJSON | null;
    }
}
