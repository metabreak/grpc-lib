"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoMessageField = void 0;
class ProtoMessageField {
    name;
    number;
    label;
    type;
    typeName;
    jsonName;
    oneofIndex;
    options;
    proto3Optional;
    constructor(value) {
        this.name = value.name;
        this.number = value.number;
        this.label = value.label;
        this.type = value.type;
        this.typeName = value.typeName;
        this.jsonName = value.jsonName;
        this.oneofIndex = value.oneofIndex;
        this.options = value.options ?? {};
        this.proto3Optional = value.proto3Optional;
    }
}
exports.ProtoMessageField = ProtoMessageField;
//# sourceMappingURL=proto-message-field.js.map