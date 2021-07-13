import { FileDescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';
import { ProtoEnum } from './proto-enum';
import { ProtoMessage } from './proto-message';
import { ProtoService } from './proto-service';
export interface MessageIndexMeta {
    proto: Proto;
    message?: ProtoMessage;
    enum?: ProtoEnum;
}
export declare class Proto {
    name: string;
    pb_package: string;
    dependencyList: string[];
    publicDependencyList: number[];
    weakDependencyList: number[];
    messageTypeList: ProtoMessage[];
    enumTypeList: ProtoEnum[];
    serviceList: ProtoService[];
    extensionList: any[];
    syntax: string;
    resolved: {
        dependencies: Proto[];
        publicDependencies: Proto[];
        allDependencies: Proto[];
    };
    messageIndex: Map<string, MessageIndexMeta>;
    constructor(value: FileDescriptorProto.AsObject);
    private index;
    setupDependencies(protos: Proto[]): void;
    resolveTransitiveDependencies(): void;
    resolveTypeMetadata(pbType: string): MessageIndexMeta;
    getDependencyPackageName(dependency: Proto): string;
    getRelativeTypeName(pbType: string, thisProtoPackageName?: string): string;
    getImportedDependencies(): string;
    getGeneratedFileBaseName(): string;
}
