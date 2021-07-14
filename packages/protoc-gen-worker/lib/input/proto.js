"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proto = void 0;
const services_1 = require("../services");
const utils_1 = require("../utils");
const proto_enum_1 = require("./proto-enum");
const proto_message_1 = require("./proto-message");
const proto_service_1 = require("./proto-service");
class Proto {
    name;
    pb_package;
    dependencyList;
    publicDependencyList;
    weakDependencyList;
    messageTypeList;
    enumTypeList;
    serviceList;
    extensionList;
    syntax;
    resolved = {};
    messageIndex = new Map();
    constructor(value) {
        this.name = value.name ?? '';
        this.pb_package = value.pb_package ?? '';
        this.dependencyList = value.dependencyList ?? [];
        this.publicDependencyList = value.publicDependencyList;
        this.weakDependencyList = value.weakDependencyList;
        this.messageTypeList = (value.messageTypeList ?? []).map((e) => new proto_message_1.ProtoMessage(e));
        this.enumTypeList = value.enumTypeList.map((e) => new proto_enum_1.ProtoEnum(e));
        this.serviceList = value.serviceList.map((e) => new proto_service_1.ProtoService(e));
        this.extensionList = value.extensionList;
        this.syntax = value.syntax ?? '';
        this.index();
    }
    index() {
        const indexEnums = (path, enums) => {
            enums.forEach((oneEnum) => {
                this.messageIndex.set(path + '.' + oneEnum.name, {
                    proto: this,
                    enum: oneEnum,
                });
            });
        };
        const indexMessages = (path, submessages) => {
            submessages.forEach((message) => {
                const fullname = path + '.' + message.name;
                this.messageIndex.set(fullname, {
                    proto: this,
                    message,
                });
                indexMessages(fullname, message.nestedTypeList);
                indexEnums(fullname, message.enumTypeList);
            });
        };
        indexMessages(this.pb_package ? '.' + this.pb_package : '', this.messageTypeList);
        indexEnums(this.pb_package ? '.' + this.pb_package : '', this.enumTypeList);
    }
    setupDependencies(protos) {
        this.resolved.dependencies = this.dependencyList.map((d) => protos.find((pp) => pp.name === d));
        this.resolved.publicDependencies = this.resolved.dependencies.filter((_, i) => this.publicDependencyList.includes(i));
    }
    resolveTransitiveDependencies() {
        const getTransitiveDependencies = (protos) => {
            return protos.reduce((res, proto) => {
                return [
                    ...res,
                    ...proto.resolved.dependencies,
                    ...getTransitiveDependencies(proto.resolved.publicDependencies),
                ];
            }, []);
        };
        this.resolved.allDependencies = [
            ...new Set([
                ...getTransitiveDependencies(this.resolved.dependencies),
                ...this.resolved.dependencies,
            ]),
        ];
    }
    resolveTypeMetadata(pbType) {
        let meta = this.messageIndex.get(pbType);
        if (meta) {
            return meta;
        }
        meta = undefined;
        this.resolved.allDependencies.forEach((proto) => {
            if (!meta) {
                try {
                    meta = proto.resolveTypeMetadata(pbType);
                }
                catch (ex) { }
            }
        });
        if (meta) {
            return meta;
        }
        throw new Error('Error finding ' + pbType);
    }
    getDependencyPackageName(dependency) {
        const name = dependency.pb_package
            ? dependency.pb_package
                .replace(/\.([a-z])/g, (v) => v.toUpperCase())
                .replace(/\./g, '')
            : 'noPackage';
        const index = String(this.resolved.allDependencies.indexOf(dependency)).padStart(3, '0');
        return name + index;
    }
    getRelativeTypeName(pbType, thisProtoPackageName = '') {
        services_1.Services.Logger.debug(`Getting relative type "${pbType}" name from package "${thisProtoPackageName}"`);
        const meta = this.resolveTypeMetadata(pbType);
        const [, , , typeName] = pbType.match(/^\.(([a-z0-9._]*)\.)?([A-Za-z0-9._]+$)/);
        if (meta.proto === this) {
            return ((thisProtoPackageName ? thisProtoPackageName + '.' : '') + typeName);
        }
        return this.getDependencyPackageName(meta.proto) + '.' + typeName;
    }
    getImportedDependencies() {
        const root = Array(this.name.split('/').length - 1)
            .fill('..')
            .join('/');
        return this.resolved.allDependencies
            .map((pp) => {
            const isWKT = pp.pb_package === 'google.protobuf';
            const genwkt = services_1.Services.Config.embedWellKnownTypes;
            const path = genwkt || (!genwkt && !isWKT)
                ? `${root || '.'}/${pp.getGeneratedFileBaseName()}`
                : '@metabreak/grpc-well-known-types';
            return `import * as ${this.getDependencyPackageName(pp)} from '${path}';`;
        })
            .join('\n');
    }
    getGeneratedFileBaseName() {
        return `${utils_1.dasherize(this.name.replace(/\.proto$/, ''))}.pb`;
    }
}
exports.Proto = Proto;
//# sourceMappingURL=proto.js.map