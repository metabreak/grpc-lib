"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMessageField = void 0;
const types_1 = require("../../../input/types");
const utils_1 = require("../../../utils");
const helpers_1 = require("../../misc/helpers");
class NumberMessageField {
    proto;
    message;
    messageField;
    oneOf;
    attributeName;
    dataType;
    isPacked;
    protoDataType;
    isArray;
    isStringType;
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
        this.isStringType = helpers_1.isNumberString(this.messageField);
        switch (this.messageField.type) {
            case types_1.ProtoMessageFieldType.double:
                this.protoDataType = 'Double';
                break;
            case types_1.ProtoMessageFieldType.fixed32:
                this.protoDataType = 'Fixed32';
                break;
            case types_1.ProtoMessageFieldType.float:
                this.protoDataType = 'Float';
                break;
            case types_1.ProtoMessageFieldType.int32:
                this.protoDataType = 'Int32';
                break;
            case types_1.ProtoMessageFieldType.sfixed32:
                this.protoDataType = 'Sfixed32';
                break;
            case types_1.ProtoMessageFieldType.sint32:
                this.protoDataType = 'Sint32';
                break;
            case types_1.ProtoMessageFieldType.uint32:
                this.protoDataType = 'Uint32';
                break;
            case types_1.ProtoMessageFieldType.fixed64:
                this.protoDataType = 'Fixed64' + (this.isStringType ? 'String' : '');
                break;
            case types_1.ProtoMessageFieldType.int64:
                this.protoDataType = 'Int64' + (this.isStringType ? 'String' : '');
                break;
            case types_1.ProtoMessageFieldType.sfixed64:
                this.protoDataType = 'Sfixed64' + (this.isStringType ? 'String' : '');
                break;
            case types_1.ProtoMessageFieldType.sint64:
                this.protoDataType = 'Sint64' + (this.isStringType ? 'String' : '');
                break;
            case types_1.ProtoMessageFieldType.uint64:
                this.protoDataType = 'Uint64' + (this.isStringType ? 'String' : '');
                break;
            default:
                throw new Error('Unknown number type ' + this.messageField.type);
        }
    }
    printDeserializeBinaryFromReader(printer) {
        if (this.isPacked) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(...(_reader.readPacked${this.protoDataType}() ?? []));`);
        }
        else if (this.isArray) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(_reader.read${this.protoDataType}());`);
        }
        else {
            printer.add(`case ${this.messageField.number}: _instance.${this.attributeName} = _reader.read${this.protoDataType}();`);
        }
        printer.add('break;');
    }
    printSerializeBinaryToWriter(printer) {
        if (this.isPacked) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writePacked${this.protoDataType}(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.isArray) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writeRepeated${this.protoDataType}(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.oneOf) {
            printer.add(`if (_instance.${this.attributeName} || _instance.${this.attributeName} === ${this.isStringType ? "'0'" : '0'}) {
        _writer.write${this.protoDataType}(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.messageField.proto3Optional) {
            printer.add(`if (_instance.${this.attributeName} !== undefined && _instance.${this.attributeName} !== null) {
         _writer.write${this.protoDataType}(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else {
            printer.add(`if (_instance.${this.attributeName}) {
        _writer.write${this.protoDataType}(${this.messageField.number}, _instance.${this.attributeName});
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
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} || ${this.isStringType ? "'0'" : '0'}`);
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
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName}${this.oneOf || this.messageField.proto3Optional ? ' ?? null' : ''},`);
        }
    }
    printAsJSONMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType}${this.oneOf || this.messageField.proto3Optional ? ' | null' : ''};`);
    }
}
exports.NumberMessageField = NumberMessageField;
//# sourceMappingURL=number-message-field.js.map