import { GrpcMessage } from './grpc-message';
import { GrpcMessageClass } from './grpc-message-class';
export declare class GrpcMessagePool {
    private index;
    constructor(messages: GrpcMessageClass<GrpcMessage>[]);
    add(messages: GrpcMessageClass<GrpcMessage>[]): void;
    get(id: string): GrpcMessageClass<GrpcMessage> | undefined;
}
//# sourceMappingURL=grpc-message-pool.d.ts.map