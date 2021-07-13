"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbFile = void 0;
const services_1 = require("../../services");
const enum_1 = require("../types/enum");
const message_1 = require("../types/message");
class PbFile {
    proto;
    constructor(proto) {
        this.proto = proto;
    }
    print(printer) {
        services_1.Services.Logger.debug(`Start printing pb for ${this.proto.name}`);
        printer.add(this.proto.getImportedDependencies());
        this.proto.enumTypeList.forEach((protoEnum) => {
            const enumInstance = new enum_1.Enum(this.proto, protoEnum);
            enumInstance.print(printer);
        });
        this.proto.messageTypeList.forEach((protoMessage) => {
            const message = new message_1.Message(this.proto, protoMessage);
            message.print(printer);
        });
        services_1.Services.Logger.debug(`End printing pb for ${this.proto.name}`);
    }
}
exports.PbFile = PbFile;
//# sourceMappingURL=pb-file.js.map