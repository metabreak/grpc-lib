export class Dependency {
  constructor(public from: string, public token: string) {}
}

const grpcCommon = {
  GrpcCallType: new Dependency('@metabreak/grpc-common', 'GrpcCallType'),
  GrpcClient: new Dependency('@metabreak/grpc-common', 'GrpcClient'),
  GrpcClientFactory: new Dependency(
    '@metabreak/grpc-common',
    'GrpcClientFactory',
  ),
  GrpcMessage: new Dependency('@metabreak/grpc-common', 'GrpcMessage'),
  GrpcMetadata: new Dependency('@metabreak/grpc-common', 'GrpcMetadata'),
  RecursivePartial: new Dependency(
    '@metabreak/grpc-common',
    'RecursivePartial',
  ),
  GrpcEvent: new Dependency('@metabreak/grpc-common', 'GrpcEvent'),
  uint8ArrayToBase64: new Dependency(
    '@metabreak/grpc-common',
    'uint8ArrayToBase64',
  ),
  GrpcMessagePool: new Dependency('@metabreak/grpc-common', 'GrpcMessagePool'),
  GrpcMessageClass: new Dependency(
    '@metabreak/grpc-common',
    'GrpcMessageClass',
  ),
  ToProtobufJSONOptions: new Dependency(
    '@metabreak/grpc-common',
    'ToProtobufJSONOptions',
  ),
};

const grpcWorker = {
  GrpcWorkerServiceClientDef: new Dependency(
    '@metabreak/grpc-worker',
    'GrpcWorkerServiceClientDef',
  ),
};

const googleProtobuf = {
  BinaryReader: new Dependency('google-protobuf', 'BinaryReader'),
  BinaryWriter: new Dependency('google-protobuf', 'BinaryWriter'),
  ByteSource: new Dependency('google-protobuf', 'ByteSource'),
};

const rxjs = {
  Observable: new Dependency('rxjs', 'Observable'),
};

export const ExternalDependencies = {
  ...googleProtobuf,
  ...grpcCommon,
  ...grpcWorker,
  ...rxjs,
};
