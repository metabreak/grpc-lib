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
