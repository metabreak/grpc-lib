"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoMessage = void 0;
const proto_enum_1 = require("./proto-enum");
const proto_message_field_1 = require("./proto-message-field");
const proto_oneof_1 = require("./proto-oneof");
class ProtoMessage {
    name;
    fieldList;
    extensionList;
    nestedTypeList;
    enumTypeList;
    extensionRangeList;
    oneofDeclList;
    reservedRangeList;
    reservedNameList;
    options;
    constructor(value) {
        this.name = value.name;
        this.fieldList = (value.fieldList || []).map((mf) => new proto_message_field_1.ProtoMessageField(mf || {}));
        this.extensionList = value.extensionList;
        this.nestedTypeList = value.nestedTypeList.map((t) => new ProtoMessage(t));
        this.enumTypeList = value.enumTypeList.map((e) => new proto_enum_1.ProtoEnum(e));
        this.extensionRangeList = value.extensionRangeList;
        this.oneofDeclList = (value.oneofDeclList || []).map((d) => new proto_oneof_1.ProtoOneof(d));
        this.reservedRangeList = value.reservedRangeList;
        this.reservedNameList = value.reservedNameList;
        this.options = value.options || {};
    }
}
exports.ProtoMessage = ProtoMessage;
//# sourceMappingURL=proto-message.js.map