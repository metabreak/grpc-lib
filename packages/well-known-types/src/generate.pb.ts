/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
} from '@metabreak/grpc-worker-common';
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
/**
 * Message implementation for TestMessage
 */
export class TestMessage implements GrpcMessage {
  static id = 'TestMessage';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TestMessage();
    TestMessage.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TestMessage) {
    _instance.any = _instance.any || undefined;
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.duration = _instance.duration || undefined;
    _instance.empty = _instance.empty || undefined;
    _instance.struct = _instance.struct || undefined;
    _instance.api = _instance.api || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.sourceContext = _instance.sourceContext || undefined;
    _instance.boolValue = _instance.boolValue || undefined;
    _instance.type = _instance.type || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TestMessage,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.any = new googleProtobuf002.Any();
          _reader.readMessage(
            _instance.any,
            googleProtobuf002.Any.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.timestamp = new googleProtobuf008.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf008.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.duration = new googleProtobuf004.Duration();
          _reader.readMessage(
            _instance.duration,
            googleProtobuf004.Duration.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.empty = new googleProtobuf005.Empty();
          _reader.readMessage(
            _instance.empty,
            googleProtobuf005.Empty.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.struct = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.struct,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.api = new googleProtobuf003.Api();
          _reader.readMessage(
            _instance.api,
            googleProtobuf003.Api.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.fieldMask = new googleProtobuf006.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf006.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.sourceContext = new googleProtobuf000.SourceContext();
          _reader.readMessage(
            _instance.sourceContext,
            googleProtobuf000.SourceContext.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.boolValue = new googleProtobuf009.BoolValue();
          _reader.readMessage(
            _instance.boolValue,
            googleProtobuf009.BoolValue.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.type = new googleProtobuf001.Type();
          _reader.readMessage(
            _instance.type,
            googleProtobuf001.Type.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TestMessage.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TestMessage,
    _writer: BinaryWriter
  ) {
    if (_instance.any) {
      _writer.writeMessage(
        1,
        _instance.any as any,
        googleProtobuf002.Any.serializeBinaryToWriter
      );
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        2,
        _instance.timestamp as any,
        googleProtobuf008.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.duration) {
      _writer.writeMessage(
        3,
        _instance.duration as any,
        googleProtobuf004.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.empty) {
      _writer.writeMessage(
        4,
        _instance.empty as any,
        googleProtobuf005.Empty.serializeBinaryToWriter
      );
    }
    if (_instance.struct) {
      _writer.writeMessage(
        5,
        _instance.struct as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.api) {
      _writer.writeMessage(
        6,
        _instance.api as any,
        googleProtobuf003.Api.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        7,
        _instance.fieldMask as any,
        googleProtobuf006.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.sourceContext) {
      _writer.writeMessage(
        8,
        _instance.sourceContext as any,
        googleProtobuf000.SourceContext.serializeBinaryToWriter
      );
    }
    if (_instance.boolValue) {
      _writer.writeMessage(
        9,
        _instance.boolValue as any,
        googleProtobuf009.BoolValue.serializeBinaryToWriter
      );
    }
    if (_instance.type) {
      _writer.writeMessage(
        10,
        _instance.type as any,
        googleProtobuf001.Type.serializeBinaryToWriter
      );
    }
  }

  private _any?: googleProtobuf002.Any;
  private _timestamp?: googleProtobuf008.Timestamp;
  private _duration?: googleProtobuf004.Duration;
  private _empty?: googleProtobuf005.Empty;
  private _struct?: googleProtobuf007.Struct;
  private _api?: googleProtobuf003.Api;
  private _fieldMask?: googleProtobuf006.FieldMask;
  private _sourceContext?: googleProtobuf000.SourceContext;
  private _boolValue?: googleProtobuf009.BoolValue;
  private _type?: googleProtobuf001.Type;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TestMessage to deeply clone from
   */
  constructor(_value?: RecursivePartial<TestMessage.AsObject>) {
    _value = _value || {};
    this.any = _value.any ? new googleProtobuf002.Any(_value.any) : undefined;
    this.timestamp = _value.timestamp
      ? new googleProtobuf008.Timestamp(_value.timestamp)
      : undefined;
    this.duration = _value.duration
      ? new googleProtobuf004.Duration(_value.duration)
      : undefined;
    this.empty = _value.empty
      ? new googleProtobuf005.Empty(_value.empty)
      : undefined;
    this.struct = _value.struct
      ? new googleProtobuf007.Struct(_value.struct)
      : undefined;
    this.api = _value.api ? new googleProtobuf003.Api(_value.api) : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf006.FieldMask(_value.fieldMask)
      : undefined;
    this.sourceContext = _value.sourceContext
      ? new googleProtobuf000.SourceContext(_value.sourceContext)
      : undefined;
    this.boolValue = _value.boolValue
      ? new googleProtobuf009.BoolValue(_value.boolValue)
      : undefined;
    this.type = _value.type
      ? new googleProtobuf001.Type(_value.type)
      : undefined;
    TestMessage.refineValues(this);
  }
  get any(): googleProtobuf002.Any | undefined {
    return this._any;
  }
  set any(value: googleProtobuf002.Any | undefined) {
    this._any = value;
  }
  get timestamp(): googleProtobuf008.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf008.Timestamp | undefined) {
    this._timestamp = value;
  }
  get duration(): googleProtobuf004.Duration | undefined {
    return this._duration;
  }
  set duration(value: googleProtobuf004.Duration | undefined) {
    this._duration = value;
  }
  get empty(): googleProtobuf005.Empty | undefined {
    return this._empty;
  }
  set empty(value: googleProtobuf005.Empty | undefined) {
    this._empty = value;
  }
  get struct(): googleProtobuf007.Struct | undefined {
    return this._struct;
  }
  set struct(value: googleProtobuf007.Struct | undefined) {
    this._struct = value;
  }
  get api(): googleProtobuf003.Api | undefined {
    return this._api;
  }
  set api(value: googleProtobuf003.Api | undefined) {
    this._api = value;
  }
  get fieldMask(): googleProtobuf006.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf006.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get sourceContext(): googleProtobuf000.SourceContext | undefined {
    return this._sourceContext;
  }
  set sourceContext(value: googleProtobuf000.SourceContext | undefined) {
    this._sourceContext = value;
  }
  get boolValue(): googleProtobuf009.BoolValue | undefined {
    return this._boolValue;
  }
  set boolValue(value: googleProtobuf009.BoolValue | undefined) {
    this._boolValue = value;
  }
  get type(): googleProtobuf001.Type | undefined {
    return this._type;
  }
  set type(value: googleProtobuf001.Type | undefined) {
    this._type = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TestMessage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TestMessage.AsObject {
    return {
      any: this.any ? this.any.toObject() : undefined,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      duration: this.duration ? this.duration.toObject() : undefined,
      empty: this.empty ? this.empty.toObject() : undefined,
      struct: this.struct ? this.struct.toObject() : undefined,
      api: this.api ? this.api.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      sourceContext: this.sourceContext
        ? this.sourceContext.toObject()
        : undefined,
      boolValue: this.boolValue ? this.boolValue.toObject() : undefined,
      type: this.type ? this.type.toObject() : undefined,
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): TestMessage.AsProtobufJSON {
    return {
      any: this.any ? this.any.toProtobufJSON(options) : null,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      duration: this.duration ? this.duration.toProtobufJSON(options) : null,
      empty: this.empty ? this.empty.toProtobufJSON(options) : null,
      struct: this.struct ? this.struct.toProtobufJSON(options) : null,
      api: this.api ? this.api.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      sourceContext: this.sourceContext
        ? this.sourceContext.toProtobufJSON(options)
        : null,
      boolValue: this.boolValue ? this.boolValue.toProtobufJSON(options) : null,
      type: this.type ? this.type.toProtobufJSON(options) : null,
    };
  }
}
export module TestMessage {
  /**
   * Standard JavaScript object representation for TestMessage
   */
  export interface AsObject {
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

  /**
   * Protobuf JSON representation for TestMessage
   */
  export interface AsProtobufJSON {
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
