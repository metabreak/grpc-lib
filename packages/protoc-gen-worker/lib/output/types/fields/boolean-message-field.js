"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanMessageField = void 0;
const types_1 = require("../../../input/types");
const utils_1 = require("../../../utils");
const helpers_1 = require("../../misc/helpers");
class BooleanMessageField {
    proto;
    message;
    messageField;
    oneOf;
    attributeName;
    dataType;
    isArray;
    isPacked;
    constructor(proto, message, messageField, oneOf) {
        this.proto = proto;
        this.message = message;
        this.messageField = messageField;
        this.oneOf = oneOf;
        this.attributeName = utils_1.camelizeSafe(this.messageField.name);
        this.isArray =
            this.messageField.label === types_1.ProtoMessageFieldCardinality.repeated;
        this.isPacked = helpers_1.isPacked(this.proto, this.messageField);
        this.dataType = helpers_1.getDataType(this.proto, this.messageField);
    }
    printDeserializeBinaryFromReader(printer) {
        if (this.isPacked) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(...(_reader.readPackedBool() ?? []));`);
        }
        else if (this.isArray) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(_reader.readBool());`);
        }
        else {
            printer.add(`case ${this.messageField.number}: _instance.${this.attributeName} = _reader.readBool();`);
        }
        printer.add('break;');
    }
    printSerializeBinaryToWriter(printer) {
        if (this.isPacked) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writePackedBool(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.isArray) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writeRepeatedBool(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.oneOf) {
            printer.add(`if (_instance.${this.attributeName} || _instance.${this.attributeName} === false) {
        _writer.writeBool(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.messageField.proto3Optional) {
            printer.add(`if (_instance.${this.attributeName} !== undefined && _instance.${this.attributeName} !== null) {
        _writer.writeBool(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else {
            printer.add(`if (_instance.${this.attributeName}) {
        _writer.writeBool(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
    }
    printPrivateAttribute(printer) {
        printer.add(`private _${this.attributeName}?: ${this.dataType};`);
    }
    printInitializer(printer) {
        if (this.isArray) {
            printer.add(`this.${this.attributeName} = (_value.${this.attributeName} ?? []).slice();`);
        }
        else {
            printer.add(`this.${this.attributeName} = _value.${this.attributeName}`);
        }
    }
    printDefaultValueSetter(printer) {
        if (this.oneOf || this.messageField.proto3Optional) {
            return;
        }
        else if (this.isArray) {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} ?? []`);
        }
        else {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} ?? false`);
        }
    }
    printGetter(printer) {
        printer.add(`get ${this.attributeName}(): ${this.dataType} | undefined { return this._${this.attributeName} }`);
    }
    printSetter(printer) {
        printer.add(`set ${this.attributeName}(value: ${this.dataType} | undefined) {
      ${this.oneOf ? this.oneOf.createFieldSetterAddon(this.messageField) : ''}
      this._${this.attributeName} = value;
    }`);
    }
    printToObjectMapping(printer) {
        if (this.isArray) {
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).slice(),`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName},`);
        }
    }
    printAsObjectMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType};`);
    }
    printToProtobufJSONMapping(printer) {
        if (this.isArray) {
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).slice(),`);
        }
        else if (this.messageField.proto3Optional) {
            printer.add(`${this.attributeName}: this.${this.attributeName} === undefined ? null : this.${this.attributeName},`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName},`);
        }
    }
    printAsJSONMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType}${this.messageField.proto3Optional ? ' | null' : ''};`);
    }
}
exports.BooleanMessageField = BooleanMessageField;
//# sourceMappingURL=boolean-message-field.js.map