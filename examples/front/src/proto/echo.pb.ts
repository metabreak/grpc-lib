/* tslint:disable */
/* eslint-disable */

// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
// File was generated at: 2021-08-23T19:34:02.190Z

import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
} from '@metabreak/grpc-common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

import * as googleProtobuf000 from '@metabreak/grpc-well-known-types';
/**
 * Message implementation for echo.EchoRequest
 */
export class EchoRequest implements GrpcMessage {
  static id = 'echo.EchoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EchoRequest();
    EchoRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EchoRequest) {
    _instance.message = _instance.message || '';
    _instance.shouldThrow = _instance.shouldThrow ?? false;
    _instance.timestamp = _instance.timestamp || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EchoRequest,
    _reader: BinaryReader,
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        case 2:
          _instance.shouldThrow = _reader.readBool();
          break;
        case 3:
          _instance.timestamp = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader,
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EchoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EchoRequest,
    _writer: BinaryWriter,
  ) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
    if (_instance.shouldThrow) {
      _writer.writeBool(2, _instance.shouldThrow);
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        3,
        _instance.timestamp as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter,
      );
    }
  }

  private _message?: string;
  private _shouldThrow?: boolean;
  private _timestamp?: googleProtobuf000.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EchoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<EchoRequest.AsObject>) {
    _value = _value ?? {};
    this.message = _value.message;
    this.shouldThrow = _value.shouldThrow;
    this.timestamp = _value.timestamp
      ? new googleProtobuf000.Timestamp(_value.timestamp)
      : undefined;
    EchoRequest.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  get shouldThrow(): boolean | undefined {
    return this._shouldThrow;
  }
  set shouldThrow(value: boolean | undefined) {
    this._shouldThrow = value;
  }
  get timestamp(): googleProtobuf000.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf000.Timestamp | undefined) {
    this._timestamp = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EchoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EchoRequest.AsObject {
    return {
      message: this.message,
      shouldThrow: this.shouldThrow,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
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
    options?: ToProtobufJSONOptions,
  ): EchoRequest.AsProtobufJSON {
    return {
      message: this.message,
      shouldThrow: this.shouldThrow,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
    };
  }
}
export module EchoRequest {
  /**
   * Standard JavaScript object representation for EchoRequest
   */
  export interface AsObject {
    message?: string;
    shouldThrow?: boolean;
    timestamp?: googleProtobuf000.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for EchoRequest
   */
  export interface AsProtobufJSON {
    message?: string;
    shouldThrow?: boolean;
    timestamp?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for echo.EchoResponse
 */
export class EchoResponse implements GrpcMessage {
  static id = 'echo.EchoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EchoResponse();
    EchoResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EchoResponse) {
    _instance.message = _instance.message || '';
    _instance.timestamp = _instance.timestamp || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EchoResponse,
    _reader: BinaryReader,
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        case 2:
          _instance.timestamp = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader,
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EchoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EchoResponse,
    _writer: BinaryWriter,
  ) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        2,
        _instance.timestamp as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter,
      );
    }
  }

  private _message?: string;
  private _timestamp?: googleProtobuf000.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EchoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<EchoResponse.AsObject>) {
    _value = _value ?? {};
    this.message = _value.message;
    this.timestamp = _value.timestamp
      ? new googleProtobuf000.Timestamp(_value.timestamp)
      : undefined;
    EchoResponse.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  get timestamp(): googleProtobuf000.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf000.Timestamp | undefined) {
    this._timestamp = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EchoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EchoResponse.AsObject {
    return {
      message: this.message,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
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
    options?: ToProtobufJSONOptions,
  ): EchoResponse.AsProtobufJSON {
    return {
      message: this.message,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
    };
  }
}
export module EchoResponse {
  /**
   * Standard JavaScript object representation for EchoResponse
   */
  export interface AsObject {
    message?: string;
    timestamp?: googleProtobuf000.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for EchoResponse
   */
  export interface AsProtobufJSON {
    message?: string;
    timestamp?: googleProtobuf000.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for echo.EchoComplexRequest
 */
export class EchoComplexRequest implements GrpcMessage {
  static id = 'echo.EchoComplexRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EchoComplexRequest();
    EchoComplexRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes),
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EchoComplexRequest) {
    _instance.chunksize = _instance.chunksize || 0;
    _instance.updates = _instance.updates || 0;
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EchoComplexRequest,
    _reader: BinaryReader,
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.chunksize = _reader.readInt64();
          break;
        case 2:
          _instance.updates = _reader.readInt64();
          break;
        case 3:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    EchoComplexRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EchoComplexRequest,
    _writer: BinaryWriter,
  ) {
    if (_instance.chunksize) {
      _writer.writeInt64(1, _instance.chunksize);
    }
    if (_instance.updates) {
      _writer.writeInt64(2, _instance.updates);
    }
    if (_instance.message) {
      _writer.writeString(3, _instance.message);
    }
  }

  private _chunksize?: number;
  private _updates?: number;
  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EchoComplexRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<EchoComplexRequest.AsObject>) {
    _value = _value ?? {};
    this.chunksize = _value.chunksize;
    this.updates = _value.updates;
    this.message = _value.message;
    EchoComplexRequest.refineValues(this);
  }
  get chunksize(): number | undefined {
    return this._chunksize;
  }
  set chunksize(value: number | undefined) {
    this._chunksize = value;
  }
  get updates(): number | undefined {
    return this._updates;
  }
  set updates(value: number | undefined) {
    this._updates = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EchoComplexRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EchoComplexRequest.AsObject {
    return {
      chunksize: this.chunksize,
      updates: this.updates,
      message: this.message,
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
    options?: ToProtobufJSONOptions,
  ): EchoComplexRequest.AsProtobufJSON {
    return {
      chunksize: this.chunksize,
      updates: this.updates,
      message: this.message,
    };
  }
}
export module EchoComplexRequest {
  /**
   * Standard JavaScript object representation for EchoComplexRequest
   */
  export interface AsObject {
    chunksize?: number;
    updates?: number;
    message?: string;
  }

  /**
   * Protobuf JSON representation for EchoComplexRequest
   */
  export interface AsProtobufJSON {
    chunksize?: number;
    updates?: number;
    message?: string;
  }
}

/**
 * Message implementation for echo.EchoComplexResponse
 */
export class EchoComplexResponse implements GrpcMessage {
  static id = 'echo.EchoComplexResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EchoComplexResponse();
    EchoComplexResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes),
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EchoComplexResponse) {
    _instance.chunk = _instance.chunk || 0;
    _instance.messagges = _instance.messagges ?? [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EchoComplexResponse,
    _reader: BinaryReader,
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.chunk = _reader.readInt64();
          break;
        case 2:
          (_instance.messagges = _instance.messagges ?? []).push(
            _reader.readString(),
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EchoComplexResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EchoComplexResponse,
    _writer: BinaryWriter,
  ) {
    if (_instance.chunk) {
      _writer.writeInt64(1, _instance.chunk);
    }
    if (_instance.messagges && _instance.messagges.length) {
      _writer.writeRepeatedString(2, _instance.messagges);
    }
  }

  private _chunk?: number;
  private _messagges?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EchoComplexResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<EchoComplexResponse.AsObject>) {
    _value = _value ?? {};
    this.chunk = _value.chunk;
    this.messagges = (_value.messagges ?? []).slice();
    EchoComplexResponse.refineValues(this);
  }
  get chunk(): number | undefined {
    return this._chunk;
  }
  set chunk(value: number | undefined) {
    this._chunk = value;
  }
  get messagges(): string[] | undefined {
    return this._messagges;
  }
  set messagges(value: string[] | undefined) {
    this._messagges = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EchoComplexResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EchoComplexResponse.AsObject {
    return {
      chunk: this.chunk,
      messagges: (this.messagges ?? []).slice(),
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
    options?: ToProtobufJSONOptions,
  ): EchoComplexResponse.AsProtobufJSON {
    return {
      chunk: this.chunk,
      messagges: (this.messagges ?? []).slice(),
    };
  }
}
export module EchoComplexResponse {
  /**
   * Standard JavaScript object representation for EchoComplexResponse
   */
  export interface AsObject {
    chunk?: number;
    messagges?: string[];
  }

  /**
   * Protobuf JSON representation for EchoComplexResponse
   */
  export interface AsProtobufJSON {
    chunk?: number;
    messagges?: string[];
  }
}
