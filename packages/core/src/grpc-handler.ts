import {
  GrpcCallType,
  GrpcEvent,
  GrpcMessage,
  GrpcRequest,
} from '@metabreak/grpc-common';
import { Observable } from 'rxjs';
import { GrpcInterceptor } from './grpc-interceptor';

/**
 * Core gRPC transport class. Implements creation and binding of RPCs to the clients.
 * There is a root GrpcHandler that handles all initial requests;
 * however for every interception a new instance of GrpcHandler is created and passed to the interceptor
 */

export class GrpcHandler {
  private interceptors: GrpcInterceptor[];

  constructor(configuredInterceptors: GrpcInterceptor | GrpcInterceptor[]) {
    this.interceptors = !configuredInterceptors
      ? []
      : Array.isArray(configuredInterceptors)
      ? configuredInterceptors
      : [configuredInterceptors];
  }

  /**
   * Handles the gRPC request passing it through the interceptors array
   * Recursively calls all interceptors with a new instance of the GrpcHandler
   * @param request a GrpcRequest to execute
   * @returns Observable of events returned by the GrpcClient implementation
   */
  handle<Q extends GrpcMessage, S extends GrpcMessage>(
    request: GrpcRequest<Q, S>,
  ): Observable<GrpcEvent<S>> {
    const interceptors = (this.interceptors || []).slice();
    const interceptor = interceptors.shift();

    if (interceptor) {
      return interceptor.intercept(request, new GrpcHandler(interceptors));
    }

    if (request.type === GrpcCallType.unary) {
      return request.client.unary(
        request.path,
        request.requestData,
        request.requestMetadata,
        request.requestClass,
        request.responseClass,
      );
    }

    return request.client.serverStream(
      request.path,
      request.requestData,
      request.requestMetadata,
      request.requestClass,
      request.responseClass,
    );
  }
}
