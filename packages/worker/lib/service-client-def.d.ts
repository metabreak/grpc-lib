import { GrpcCallType, GrpcMessageClass } from '@metabreak/grpc-common';
export interface GrpcWorkerRPCDef {
    type: GrpcCallType;
    reqclss: GrpcMessageClass<any>;
    resclss: GrpcMessageClass<any>;
}
export interface GrpcWorkerServiceClientDef {
    serviceId: string;
    methods: {
        [path: string]: GrpcWorkerRPCDef;
    };
}
