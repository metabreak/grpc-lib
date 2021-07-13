export class Dependency {
  constructor(public from: string, public token: string) {}
}

const ngxGrpcCommon = {
  GrpcCallType: new Dependency('@metabreak/grpc-worker-common', 'GrpcCallType'),
  GrpcClient: new Dependency('@metabreak/grpc-worker-common', 'GrpcClient'),
  GrpcClientFactory: new Dependency(
    '@metabreak/grpc-worker-common',
    'GrpcClientFactory',
  ),
  GrpcMessage: new Dependency('@metabreak/grpc-worker-common', 'GrpcMessage'),
  GrpcMetadata: new Dependency('@metabreak/grpc-worker-common', 'GrpcMetadata'),
  RecursivePartial: new Dependency(
    '@metabreak/grpc-worker-common',
    'RecursivePartial',
  ),
  GrpcEvent: new Dependency('@metabreak/grpc-worker-common', 'GrpcEvent'),
  uint8ArrayToBase64: new Dependency(
    '@metabreak/grpc-worker-common',
    'uint8ArrayToBase64',
  ),
  GrpcMessagePool: new Dependency(
    '@metabreak/grpc-worker-common',
    'GrpcMessagePool',
  ),
  GrpcMessageClass: new Dependency(
    '@metabreak/grpc-worker-common',
    'GrpcMessageClass',
  ),
  ToProtobufJSONOptions: new Dependency(
    '@metabreak/grpc-worker-common',
    'ToProtobufJSONOptions',
  ),
};

const ngxGrpcCore = {
  GrpcHandler: new Dependency('@metabreak/grpc-worker-core', 'GrpcHandler'),
  takeMessages: new Dependency('@metabreak/grpc-worker-core', 'takeMessages'),
  throwStatusErrors: new Dependency(
    '@metabreak/grpc-worker-core',
    'throwStatusErrors',
  ),
  GRPC_CLIENT_FACTORY: new Dependency(
    '@metabreak/grpc-worker-core',
    'GRPC_CLIENT_FACTORY',
  ),
};

const ngxGrpcWorker = {
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
  ...ngxGrpcCore,
  ...ngxGrpcCommon,
  ...ngxGrpcWorker,
  ...rxjs,
};
