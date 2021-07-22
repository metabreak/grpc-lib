import { Observable } from 'rxjs';
import { GrpcEvent } from './grpc-event';
import { GrpcMessage } from './grpc-message';
import { GrpcMessageClass } from './grpc-message-class';
import { GrpcMetadata } from './grpc-metadata';

/**
 * Settings for the implementation of GrpcClient
 */
export interface GrpcClientSettings {
  host: string;
  format?: string;
  suppressCorsPreflight?: boolean;
  withCredentials?: boolean;
}

/**
 * A transport layer client implementation interface
 * Instance of GrpcClient is created for every gRPC service client by corresponding GrpcClientFactory
 */
export interface GrpcClient<
  ST extends GrpcClientSettings = GrpcClientSettings,
> {
  /**
   * Returns a copy of current client settings
   */
  getSettings(): ST;

  /**
   * Handle unary RPC and return promise
   * @param path gRPC method path (rpc path)
   * @param req request data
   * @param metadata request metadata
   * @param reqclss request message class
   * @param resclss response message class
   */
  unaryAsPromise<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Promise<GrpcEvent<S>>;

  /**
   * Handle unary RPC and return observable
   * @param path gRPC method path (rpc path)
   * @param req request data
   * @param metadata request metadata
   * @param reqclss request message class
   * @param resclss response message class
   */
  unaryAsObservable<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>>;

  /**
   * Handle server stream RPC
   * @param path gRPC method path (rpc path)
   * @param req request data
   * @param metadata request metadata
   * @param reqclss request message class
   * @param resclss response message class
   */
  serverStream<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>>;
}

/**
 * Type of the RPC
 */
export enum GrpcCallType {
  unary,
  serverStream,
}

/**
 * This interface describes the internal gRPC request data structure
 */
export interface GrpcRequest<Q extends GrpcMessage, S extends GrpcMessage> {
  path: string;
  client: GrpcClient;
  type: GrpcCallType;
  requestData: Q;
  requestMetadata: GrpcMetadata;
  requestClass: GrpcMessageClass<Q>;
  responseClass: GrpcMessageClass<S>;
}
