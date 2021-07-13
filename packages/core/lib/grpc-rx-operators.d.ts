import { GrpcEvent, GrpcMessage } from '@metabreak/grpc-worker-common';
import { Observable } from 'rxjs';
export declare function throwStatusErrors<T extends GrpcMessage>(): (source$: Observable<GrpcEvent<T>>) => Observable<GrpcEvent<T>>;
export declare function takeMessages<T extends GrpcMessage>(): (source$: Observable<GrpcEvent<T>>) => Observable<T>;
