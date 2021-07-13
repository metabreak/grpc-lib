import {
  GrpcDataEvent,
  GrpcEvent,
  GrpcMessage,
  GrpcStatusEvent,
} from '@metabreak/grpc-worker-common';
import { Observable, of, throwError } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

/**
 * RxJS operator
 * When applied to gRPC events emits error for status events with a non-zero code (includes throwStatusErrors)
 * @return Observable of gRPC events
 */
export function throwStatusErrors<T extends GrpcMessage>() {
  return (source$: Observable<GrpcEvent<T>>) =>
    source$.pipe(
      switchMap((event) => {
        if (event instanceof GrpcStatusEvent && event.statusCode) {
          return throwError(() => {
            return new Error(event.statusMessage);
          });
        }
        return of(event);
      }),
    );
}

/**
 * RxJS operator
 * When applied to gRPC events stream extracts and returns only messages
 * @return Observable of messages
 */
export function takeMessages<T extends GrpcMessage>() {
  return (source$: Observable<GrpcEvent<T>>) =>
    source$.pipe(
      filter((event: GrpcEvent<T>) => {
        return event instanceof GrpcDataEvent;
      }),
      map((event) => {
        return event as GrpcDataEvent<T>;
      }),
      map((event) => {
        return event.data;
      }),
    );
}
