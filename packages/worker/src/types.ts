import type { Error, Metadata, Status } from 'grpc-web';
import type { GrpcClientSettings } from '@metabreak/grpc-common';

export enum GrpcWorkerMessageType {
  serviceClientConfig,
  rpcRequest,
  rpcCancel,
  rpcResponse,
}

export interface GrpcWorkerMessage {
  type: GrpcWorkerMessageType;
}

export interface GrpcWorkerMessageServiceClientConfig
  extends GrpcWorkerMessage {
  type: GrpcWorkerMessageType.serviceClientConfig;
  serviceId: string;
  settings: GrpcClientSettings;
}

export interface GrpcWorkerMessageRPCRequest<Q> extends GrpcWorkerMessage {
  type: GrpcWorkerMessageType.rpcRequest;
  id: number;
  serviceId: string;
  path: string;
  request: Q;
  metadata: Metadata;
}

export interface GrpcWorkerMessageRPCCancel extends GrpcWorkerMessage {
  type: GrpcWorkerMessageType.rpcCancel;
  id: number;
}

export enum GrpcWorkerMessageRPCResponseType {
  error,
  status,
  data,
  end,
}

export interface GrpcWorkerMessageRPCResponseBase extends GrpcWorkerMessage {
  type: GrpcWorkerMessageType.rpcResponse;
  id: number;
}

export interface GrpcWorkerMessageRPCResponseError
  extends GrpcWorkerMessageRPCResponseBase {
  responseType: GrpcWorkerMessageRPCResponseType.error;
  error: Error;
}

export interface GrpcWorkerMessageRPCResponseStatus
  extends GrpcWorkerMessageRPCResponseBase {
  responseType: GrpcWorkerMessageRPCResponseType.status;
  status: Status;
}

export interface GrpcWorkerMessageRPCResponseData<S>
  extends GrpcWorkerMessageRPCResponseBase {
  responseType: GrpcWorkerMessageRPCResponseType.data;
  response: S;
}

export interface GrpcWorkerMessageRPCResponseEnd
  extends GrpcWorkerMessageRPCResponseBase {
  responseType: GrpcWorkerMessageRPCResponseType.end;
}

export type GrpcWorkerMessageRPCResponse<S> =
  | GrpcWorkerMessageRPCResponseError
  | GrpcWorkerMessageRPCResponseData<S>
  | GrpcWorkerMessageRPCResponseStatus
  | GrpcWorkerMessageRPCResponseEnd;

export interface WorkerMessageEvent<D> extends Event {
  data: D;
}
