import { GrpcMessage } from './grpc-message';
import { GrpcMetadata } from './grpc-metadata';
export declare class GrpcDataEvent<T extends GrpcMessage> {
    data: T;
    constructor(data: T);
}
export declare class GrpcStatusEvent {
    statusCode: number;
    statusMessage: string;
    metadata: GrpcMetadata;
    constructor(statusCode: number, statusMessage: string, metadata: GrpcMetadata);
}
export declare type GrpcEvent<T extends GrpcMessage> = GrpcDataEvent<T> | GrpcStatusEvent;
