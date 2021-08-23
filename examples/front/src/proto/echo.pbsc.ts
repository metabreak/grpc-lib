/* tslint:disable */
/* eslint-disable */

// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
// File was generated at: 2021-08-23T19:34:01.938Z

import { GrpcClient, GrpcEvent, GrpcMetadata } from '@metabreak/grpc-common';
import { Observable } from 'rxjs';

import * as thisProto from './echo.pb';
import * as googleProtobuf000 from '@metabreak/grpc-well-known-types';

/**
 * Service client implementation for echo.EchoService
 */
export class EchoServiceService {
  constructor(private client: GrpcClient) {}

  /**
   * Unary RPC for /echo.EchoService/EchoOnce
   * @param requestData Request data
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EchoResponse>
   */
  echoOnceAsObservable(
    grpcRequest: thisProto.EchoRequest,
    grpcMetadata: GrpcMetadata,
  ): Observable<GrpcEvent<thisProto.EchoResponse>> {
    return this.client.unaryAsObservable(
      '/echo.EchoService/EchoOnce',
      grpcRequest,
      grpcMetadata,
      thisProto.EchoRequest,
      thisProto.EchoResponse,
    );
  }

  /**
   * Unary RPC for /echo.EchoService/EchoOnce
   * @param requestData Request data
   * @param requestMetadata Request metadata
   * @returns Promise<thisProto.EchoResponse>
   */
  echoOnceAsPromise(
    grpcRequest: thisProto.EchoRequest,
    grpcMetadata: GrpcMetadata,
  ): Promise<GrpcEvent<thisProto.EchoResponse>> {
    return this.client.unaryAsPromise(
      '/echo.EchoService/EchoOnce',
      grpcRequest,
      grpcMetadata,
      thisProto.EchoRequest,
      thisProto.EchoResponse,
    );
  }

  echoOnce(
    requestData: thisProto.EchoRequest.AsObject,
    requestMetadata: Record<string, string>,
    asPromise: true,
  ): Promise<GrpcEvent<thisProto.EchoResponse>>;
  echoOnce(
    requestData: thisProto.EchoRequest.AsObject,
    requestMetadata: Record<string, string>,
    asPromise: false,
  ): Observable<GrpcEvent<thisProto.EchoResponse>>;
  echoOnce(
    requestData: thisProto.EchoRequest.AsObject = {},
    requestMetadata: Record<string, string> = {},
    asPromise = false,
  ) {
    const grpcRequest = new thisProto.EchoRequest(requestData);
    const grpcMetadata = new GrpcMetadata(requestMetadata);

    if (asPromise) {
      return this.echoOnceAsPromise(grpcRequest, grpcMetadata);
    }

    return this.echoOnceAsObservable(grpcRequest, grpcMetadata);
  }

  /**
   * Unary RPC for /echo.EchoService/EchoStream
   * @param requestData Request data
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EchoResponse>
   */
  echoStream(
    requestData: thisProto.EchoRequest.AsObject = {},
    requestMetadata: Record<string, string> = {},
  ): Observable<GrpcEvent<thisProto.EchoResponse>> {
    const grpcRequest = new thisProto.EchoRequest(requestData);
    const grpcMetadata = new GrpcMetadata(requestMetadata);

    return this.client.serverStream(
      '/echo.EchoService/EchoStream',
      grpcRequest,
      grpcMetadata,
      thisProto.EchoRequest,
      thisProto.EchoResponse,
    );
  }

  /**
   * Unary RPC for /echo.EchoService/EchoComplexStream
   * @param requestData Request data
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EchoComplexResponse>
   */
  echoComplexStream(
    requestData: thisProto.EchoComplexRequest.AsObject = {},
    requestMetadata: Record<string, string> = {},
  ): Observable<GrpcEvent<thisProto.EchoComplexResponse>> {
    const grpcRequest = new thisProto.EchoComplexRequest(requestData);
    const grpcMetadata = new GrpcMetadata(requestMetadata);

    return this.client.serverStream(
      '/echo.EchoService/EchoComplexStream',
      grpcRequest,
      grpcMetadata,
      thisProto.EchoComplexRequest,
      thisProto.EchoComplexResponse,
    );
  }
}
