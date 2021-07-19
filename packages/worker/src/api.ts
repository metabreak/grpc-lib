import { Error, Metadata, Status } from 'grpc-web';
import type { GrpcWorkerClientSettings } from '@metabreak/grpc-common';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace GrpcWorkerApi {
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
    settings: GrpcWorkerClientSettings;
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

  export interface GrpcWorkerMessageRPCResponseBase<S>
    extends GrpcWorkerMessage {
    type: GrpcWorkerMessageType.rpcResponse;
    id: number;
    // responseType: GrpcWorkerMessageRPCResponseType;
    // error?: Error;
    // status?: Status;
    // response?: S;
  }
  export interface GrpcWorkerMessageRPCResponseError<S>
    extends GrpcWorkerMessageRPCResponseBase<S> {
    responseType: GrpcWorkerMessageRPCResponseType.error;
    error: Error;
  }
  export interface GrpcWorkerMessageRPCResponseStatus<S>
    extends GrpcWorkerMessageRPCResponseBase<S> {
    responseType: GrpcWorkerMessageRPCResponseType.status;
    status: Status;
  }
  export interface GrpcWorkerMessageRPCResponseData<S>
    extends GrpcWorkerMessageRPCResponseBase<S> {
    responseType: GrpcWorkerMessageRPCResponseType.data;
    response: S;
  }
  export interface GrpcWorkerMessageRPCResponseEnd<S>
    extends GrpcWorkerMessageRPCResponseBase<S> {
    responseType: GrpcWorkerMessageRPCResponseType.end;
  }

  export type GrpcWorkerMessageRPCResponse<S> =
    | GrpcWorkerMessageRPCResponseError<S>
    | GrpcWorkerMessageRPCResponseData<S>
    | GrpcWorkerMessageRPCResponseStatus<S>
    | GrpcWorkerMessageRPCResponseEnd<S>;

  export interface WorkerMessageEvent<D> extends Event {
    data: D;
  }
}
