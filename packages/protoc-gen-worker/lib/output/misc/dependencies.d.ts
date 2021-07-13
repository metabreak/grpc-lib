export declare class Dependency {
    from: string;
    token: string;
    constructor(from: string, token: string);
}
export declare const ExternalDependencies: {
    Observable: Dependency;
    GrpcWorkerServiceClientDef: Dependency;
    GrpcCallType: Dependency;
    GrpcClient: Dependency;
    GrpcClientFactory: Dependency;
    GrpcMessage: Dependency;
    GrpcMetadata: Dependency;
    RecursivePartial: Dependency;
    GrpcEvent: Dependency;
    uint8ArrayToBase64: Dependency;
    GrpcMessagePool: Dependency;
    GrpcMessageClass: Dependency;
    ToProtobufJSONOptions: Dependency;
    GrpcHandler: Dependency;
    takeMessages: Dependency;
    throwStatusErrors: Dependency;
    BinaryReader: Dependency;
    BinaryWriter: Dependency;
    ByteSource: Dependency;
};
