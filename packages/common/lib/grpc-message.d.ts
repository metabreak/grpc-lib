import { GrpcMessagePool } from './grpc-message-pool';
export interface GrpcMessage {
    serializeBinary(): Uint8Array;
    toObject(): any;
    toJSON(): any;
    toProtobufJSON(options?: ToProtobufJSONOptions): any;
}
export interface ToProtobufJSONOptions {
    messagePool?: GrpcMessagePool;
}
//# sourceMappingURL=grpc-message.d.ts.map