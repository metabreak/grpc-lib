"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMessageField = void 0;
const types_1 = require("../../../input/types");
const utils_1 = require("../../../utils");
const helpers_1 = require("../../misc/helpers");
class MessageMessageField {
    proto;
    message;
    messageField;
    oneOf;
    attributeName;
    dataType;
    asObjectDataType;
    asJSONDataType;
    messageClassName;
    isArray;
    constructor(proto, message, messageField, oneOf) {
        this.proto = proto;
        this.message = message;
        this.messageField = messageField;
        this.oneOf = oneOf;
        this.attributeName = utils_1.camelizeSafe(this.messageField.name);
        this.isArray =
            this.messageField.label === types_1.ProtoMessageFieldCardinality.repeated;
        this.messageClassName = this.proto.getRelativeTypeName(this.messageField.typeName);
        this.dataType = helpers_1.getDataType(this.proto, this.messageField);
        this.asObjectDataType = helpers_1.getDataType(this.proto, this.messageField, {
            asObjectDataType: true,
        });
        this.asJSONDataType = helpers_1.getDataType(this.proto, this.messageField, {
            asProtobufJSONDataType: true,
        });
    }
    printDeserializeBinaryFromReader(printer) {
        const varName = `messageInitializer${this.messageField.number}`;
        if (this.isArray) {
            printer.add(`case ${this.messageField.number}:
        const ${varName} = new ${this.messageClassName}();
        _reader.readMessage(${varName}, ${this.messageClassName}.deserializeBinaryFromReader);
        (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(${varName});`);
        }
        else {
            printer.add(`case ${this.messageField.number}:
        _instance.${this.attributeName} = new ${this.messageClassName}();
        _reader.readMessage(_instance.${this.attributeName}, ${this.messageClassName}.deserializeBinaryFromReader);`);
        }
        printer.add('break;');
    }
    printSerializeBinaryToWriter(printer) {
        if (this.isArray) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writeRepeatedMessage(${this.messageField.number}, _instance.${this.attributeName} as any, ${this.messageClassName}.serializeBinaryToWriter);
      }`);
        }
        else {
            printer.add(`if (_instance.${this.attributeName}) {
        _writer.writeMessage(${this.messageField.number}, _instance.${this.attributeName} as any, ${this.messageClassName}.serializeBinaryToWriter);
      }`);
        }
    }
    printPrivateAttribute(printer) {
        printer.add(`private _${this.attributeName}?: ${this.dataType};`);
    }
    printInitializer(printer) {
        if (this.isArray) {
            printer.add(`this.${this.attributeName} = (_value.${this.attributeName} ?? []).map(m => new ${this.messageClassName}(m));`);
        }
        else {
            printer.add(`this.${this.attributeName} = _value.${this.attributeName} ? new ${this.messageClassName}(_value.${this.attributeName}) : undefined;`);
        }
    }
    printDefaultValueSetter(printer) {
        if (this.oneOf) {
            return;
        }
        else if (this.isArray) {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} ?? []`);
        }
        else {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} || undefined`);
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
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).map(m => m.toObject()),`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName} ? this.${this.attributeName}.toObject() : undefined,`);
        }
    }
    printAsObjectMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.asObjectDataType};`);
    }
    printToProtobufJSONMapping(printer) {
        if (this.isArray) {
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).map(m => m.toProtobufJSON(options)),`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName} ? this.${this.attributeName}.toProtobufJSON(options) : null,`);
        }
    }
    printAsJSONMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.asJSONDataType} | null;`);
    }
}
exports.MessageMessageField = MessageMessageField;
//# sourceMappingURL=message-message-field.js.map