"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoEnum = void 0;
class ProtoEnum {
    name;
    valueList;
    reservedRangeList;
    reservedNameList;
    constructor(value) {
        this.name = value.name;
        this.valueList = value.valueList;
        this.reservedRangeList = value.reservedRangeList;
        this.reservedNameList = value.reservedNameList;
    }
}
exports.ProtoEnum = ProtoEnum;
//# sourceMappingURL=proto-enum.js.map