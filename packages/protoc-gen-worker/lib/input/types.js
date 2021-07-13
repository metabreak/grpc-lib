"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoMessageFieldCardinality = exports.ProtoMessageFieldType = void 0;
var ProtoMessageFieldType;
(function (ProtoMessageFieldType) {
    ProtoMessageFieldType[ProtoMessageFieldType["unknown"] = 0] = "unknown";
    ProtoMessageFieldType[ProtoMessageFieldType["double"] = 1] = "double";
    ProtoMessageFieldType[ProtoMessageFieldType["float"] = 2] = "float";
    ProtoMessageFieldType[ProtoMessageFieldType["int64"] = 3] = "int64";
    ProtoMessageFieldType[ProtoMessageFieldType["uint64"] = 4] = "uint64";
    ProtoMessageFieldType[ProtoMessageFieldType["int32"] = 5] = "int32";
    ProtoMessageFieldType[ProtoMessageFieldType["fixed64"] = 6] = "fixed64";
    ProtoMessageFieldType[ProtoMessageFieldType["fixed32"] = 7] = "fixed32";
    ProtoMessageFieldType[ProtoMessageFieldType["bool"] = 8] = "bool";
    ProtoMessageFieldType[ProtoMessageFieldType["string"] = 9] = "string";
    ProtoMessageFieldType[ProtoMessageFieldType["group"] = 10] = "group";
    ProtoMessageFieldType[ProtoMessageFieldType["message"] = 11] = "message";
    ProtoMessageFieldType[ProtoMessageFieldType["bytes"] = 12] = "bytes";
    ProtoMessageFieldType[ProtoMessageFieldType["uint32"] = 13] = "uint32";
    ProtoMessageFieldType[ProtoMessageFieldType["enum"] = 14] = "enum";
    ProtoMessageFieldType[ProtoMessageFieldType["sfixed32"] = 15] = "sfixed32";
    ProtoMessageFieldType[ProtoMessageFieldType["sfixed64"] = 16] = "sfixed64";
    ProtoMessageFieldType[ProtoMessageFieldType["sint32"] = 17] = "sint32";
    ProtoMessageFieldType[ProtoMessageFieldType["sint64"] = 18] = "sint64";
})(ProtoMessageFieldType = exports.ProtoMessageFieldType || (exports.ProtoMessageFieldType = {}));
var ProtoMessageFieldCardinality;
(function (ProtoMessageFieldCardinality) {
    ProtoMessageFieldCardinality[ProtoMessageFieldCardinality["unknown"] = 0] = "unknown";
    ProtoMessageFieldCardinality[ProtoMessageFieldCardinality["optional"] = 1] = "optional";
    ProtoMessageFieldCardinality[ProtoMessageFieldCardinality["required"] = 2] = "required";
    ProtoMessageFieldCardinality[ProtoMessageFieldCardinality["repeated"] = 3] = "repeated";
})(ProtoMessageFieldCardinality = exports.ProtoMessageFieldCardinality || (exports.ProtoMessageFieldCardinality = {}));
//# sourceMappingURL=types.js.map