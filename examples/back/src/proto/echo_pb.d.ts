// package: echo
// file: echo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class EchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EchoRequest;
  getShouldthrow(): boolean;
  setShouldthrow(value: boolean): EchoRequest;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EchoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EchoRequest,
  ): EchoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: EchoRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(
    message: EchoRequest,
    reader: jspb.BinaryReader,
  ): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message: string;
    shouldthrow: boolean;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class EchoResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EchoResponse;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EchoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EchoResponse,
  ): EchoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: EchoResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponse;
  static deserializeBinaryFromReader(
    message: EchoResponse,
    reader: jspb.BinaryReader,
  ): EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    message: string;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class EchoComplexRequest extends jspb.Message {
  getChunksize(): number;
  setChunksize(value: number): EchoComplexRequest;
  getUpdates(): number;
  setUpdates(value: number): EchoComplexRequest;
  getMessage(): string;
  setMessage(value: string): EchoComplexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoComplexRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EchoComplexRequest,
  ): EchoComplexRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: EchoComplexRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EchoComplexRequest;
  static deserializeBinaryFromReader(
    message: EchoComplexRequest,
    reader: jspb.BinaryReader,
  ): EchoComplexRequest;
}

export namespace EchoComplexRequest {
  export type AsObject = {
    chunksize: number;
    updates: number;
    message: string;
  };
}

export class EchoComplexResponse extends jspb.Message {
  getChunk(): number;
  setChunk(value: number): EchoComplexResponse;
  clearMessaggesList(): void;
  getMessaggesList(): Array<string>;
  setMessaggesList(value: Array<string>): EchoComplexResponse;
  addMessagges(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoComplexResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EchoComplexResponse,
  ): EchoComplexResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: EchoComplexResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EchoComplexResponse;
  static deserializeBinaryFromReader(
    message: EchoComplexResponse,
    reader: jspb.BinaryReader,
  ): EchoComplexResponse;
}

export namespace EchoComplexResponse {
  export type AsObject = {
    chunk: number;
    messaggesList: Array<string>;
  };
}
