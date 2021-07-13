"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const types_1 = require("../../input/types");
const dependencies_1 = require("../misc/dependencies");
const helpers_1 = require("../misc/helpers");
const enum_1 = require("./enum");
const boolean_message_field_1 = require("./fields/boolean-message-field");
const bytes_message_field_1 = require("./fields/bytes-message-field");
const enum_message_field_1 = require("./fields/enum-message-field");
const map_message_field_1 = require("./fields/map-message-field");
const message_message_field_1 = require("./fields/message-message-field");
const number_message_field_1 = require("./fields/number-message-field");
const string_message_field_1 = require("./fields/string-message-field");
const oneof_1 = require("./oneof");
const any_wkt_1 = require("./well-known-types/any.wkt");
const api_wkt_1 = require("./well-known-types/api.wkt");
const duration_wkt_1 = require("./well-known-types/duration.wkt");
const empty_wkt_1 = require("./well-known-types/empty.wkt");
const field_mask_wkt_1 = require("./well-known-types/field-mask.wkt");
const source_context_wkt_1 = require("./well-known-types/source-context.wkt");
const struct_wkt_1 = require("./well-known-types/struct.wkt");
const timestamp_wkt_1 = require("./well-known-types/timestamp.wkt");
const type_wkt_1 = require("./well-known-types/type.wkt");
const wrappers_wkt_1 = require("./well-known-types/wrappers.wkt");
class Message {
    proto;
    message;
    messageFields;
    oneOfs;
    wkt;
    constructor(proto, message) {
        this.proto = proto;
        this.message = message;
        if (this.proto.pb_package === 'google.protobuf') {
            switch (this.message.name) {
                case 'Any':
                    this.wkt = new any_wkt_1.AnyWKT();
                    break;
                case 'Api':
                    this.wkt = new api_wkt_1.ApiWKT();
                    break;
                case 'BoolValue':
                    this.wkt = new wrappers_wkt_1.BoolValueWKT();
                    break;
                case 'BytesValue':
                    this.wkt = new wrappers_wkt_1.BytesValueWKT();
                    break;
                case 'DoubleValue':
                    this.wkt = new wrappers_wkt_1.DoubleValueWKT();
                    break;
                case 'Duration':
                    this.wkt = new duration_wkt_1.DurationWKT();
                    break;
                case 'Empty':
                    this.wkt = new empty_wkt_1.EmptyWKT();
                    break;
                case 'Enum':
                    this.wkt = new type_wkt_1.EnumWKT();
                    break;
                case 'EnumValue':
                    this.wkt = new type_wkt_1.EnumValueWKT();
                    break;
                case 'Field':
                    this.wkt = new type_wkt_1.FieldWKT();
                    break;
                case 'FieldMask':
                    this.wkt = new field_mask_wkt_1.FieldMaskWKT();
                    break;
                case 'FloatValue':
                    this.wkt = new wrappers_wkt_1.FloatValueWKT();
                    break;
                case 'Int32Value':
                    this.wkt = new wrappers_wkt_1.Int32ValueWKT();
                    break;
                case 'Int64Value':
                    this.wkt = new wrappers_wkt_1.Int64ValueWKT();
                    break;
                case 'ListValue':
                    this.wkt = new struct_wkt_1.ListValueWKT();
                    break;
                case 'Method':
                    this.wkt = new api_wkt_1.MethodWKT();
                    break;
                case 'Mixin':
                    this.wkt = new api_wkt_1.MixinWKT();
                    break;
                case 'Option':
                    this.wkt = new type_wkt_1.OptionWKT();
                    break;
                case 'SourceContext':
                    this.wkt = new source_context_wkt_1.SourceContextWKT();
                    break;
                case 'StringValue':
                    this.wkt = new wrappers_wkt_1.StringValueWKT();
                    break;
                case 'Struct':
                    this.wkt = new struct_wkt_1.StructWKT();
                    break;
                case 'Timestamp':
                    this.wkt = new timestamp_wkt_1.TimestampWKT();
                    break;
                case 'Type':
                    this.wkt = new type_wkt_1.TypeWKT();
                    break;
                case 'UInt32Value':
                    this.wkt = new wrappers_wkt_1.UInt32ValueWKT();
                    break;
                case 'UInt64Value':
                    this.wkt = new wrappers_wkt_1.UInt64ValueWKT();
                    break;
                case 'Value':
                    this.wkt = new struct_wkt_1.ValueWKT();
                    break;
            }
        }
        const allOneOfs = this.message.oneofDeclList.map((od) => new oneof_1.OneOf(this.proto, this.message, od));
        this.oneOfs = allOneOfs.filter((oneOf) => !oneOf.isSyntheticOneOf());
        this.messageFields = this.message.fieldList.map((field) => {
            const oneOf = typeof field.oneofIndex === 'number' && !field.proto3Optional
                ? allOneOfs[field.oneofIndex]
                : undefined;
            if (helpers_1.isFieldMap(this.proto, field)) {
                return new map_message_field_1.MapMessageField(this.proto, this.message, field, oneOf);
            }
            else if (helpers_1.isFieldMessage(field)) {
                return new message_message_field_1.MessageMessageField(this.proto, this.message, field, oneOf);
            }
            else {
                switch (field.type) {
                    case types_1.ProtoMessageFieldType.bool:
                        return new boolean_message_field_1.BooleanMessageField(this.proto, this.message, field, oneOf);
                    case types_1.ProtoMessageFieldType.bytes:
                        return new bytes_message_field_1.BytesMessageField(this.proto, this.message, field, oneOf);
                    case types_1.ProtoMessageFieldType.enum:
                        return new enum_message_field_1.EnumMessageField(this.proto, this.message, field, oneOf);
                    case types_1.ProtoMessageFieldType.string:
                        return new string_message_field_1.StringMessageField(this.proto, this.message, field, oneOf);
                    case types_1.ProtoMessageFieldType.double:
                    case types_1.ProtoMessageFieldType.fixed32:
                    case types_1.ProtoMessageFieldType.float:
                    case types_1.ProtoMessageFieldType.int32:
                    case types_1.ProtoMessageFieldType.sfixed32:
                    case types_1.ProtoMessageFieldType.sint32:
                    case types_1.ProtoMessageFieldType.uint32:
                    case types_1.ProtoMessageFieldType.fixed64:
                    case types_1.ProtoMessageFieldType.int64:
                    case types_1.ProtoMessageFieldType.sfixed64:
                    case types_1.ProtoMessageFieldType.sint64:
                    case types_1.ProtoMessageFieldType.uint64:
                        return new number_message_field_1.NumberMessageField(this.proto, this.message, field, oneOf);
                    default:
                        throw new Error('Unknown data type ' + field.type);
                }
            }
        });
    }
    print(printer) {
        printer.addDeps(dependencies_1.ExternalDependencies.BinaryReader, dependencies_1.ExternalDependencies.BinaryWriter, dependencies_1.ExternalDependencies.ByteSource, dependencies_1.ExternalDependencies.GrpcMessage, dependencies_1.ExternalDependencies.RecursivePartial);
        const messageId = (this.proto.pb_package ? this.proto.pb_package + '.' : '') +
            this.message.name;
        const wktUrl = 'https://developers.google.com/protocol-buffers/docs/reference/google.protobuf';
        const constructorComment = this.wkt
            ? `Well known type, more at ${wktUrl}`
            : `Message implementation for ${messageId}`;
        printer.addLine(`
    /**
     * ${constructorComment}
     */
    export class ${this.message.name} implements GrpcMessage {

      static id = '${messageId}';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new ${this.message.name}();
        ${this.message.name}.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
      }
    `);
        this.wkt?.printStaticMethods?.(printer);
        this.printStaticRefineValues(printer);
        printer.newLine();
        this.printStaticDeserializeBinaryFromReader(printer);
        printer.newLine();
        this.printStaticSerializeBinaryToWriter(printer);
        printer.newLine();
        this.messageFields.forEach((f) => {
            f.printPrivateAttribute(printer);
            printer.newLine();
        });
        printer.newLine();
        this.oneOfs.forEach((oneof) => {
            oneof.printPrivateAttribute(printer);
            printer.newLine();
        });
        this.printConstructor(printer);
        this.printGettersAndSetters(printer);
        this.oneOfs.forEach((oneof) => {
            oneof.printGetter(printer);
            printer.newLine();
        });
        printer.addLine(`
      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        ${this.message.name}.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }
    `);
        this.printToObject(printer);
        this.printToJSON(printer);
        this.printToProtobufJSON(printer);
        this.wkt?.printMemberMethods?.(printer);
        printer.addLine('}');
        this.printSubTypes(printer);
    }
    printStaticRefineValues(printer) {
        printer.addLine(`
      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: ${this.message.name}) {
    `);
        this.messageFields.forEach((f) => {
            f.printDefaultValueSetter(printer);
            printer.newLine();
        });
        printer.addLine('}');
    }
    printStaticDeserializeBinaryFromReader(printer) {
        printer.addLine(`
      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(_instance: ${this.message.name}, _reader: BinaryReader) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {`);
        this.messageFields.forEach((f) => {
            f.printDeserializeBinaryFromReader(printer);
            printer.newLine();
        });
        printer.addLine(`default: _reader.skipField();
          }
        }

        ${this.message.name}.refineValues(_instance);
      }`);
    }
    printStaticSerializeBinaryToWriter(printer) {
        printer.addLine(`
      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(_instance: ${this.message.name}, _writer: BinaryWriter) {
    `);
        this.messageFields.forEach((f) => {
            f.printSerializeBinaryToWriter(printer);
            printer.newLine();
        });
        printer.addLine('}');
    }
    printGettersAndSetters(printer) {
        this.messageFields.forEach((f) => {
            f.printGetter(printer);
            printer.newLine();
            f.printSetter(printer);
            printer.newLine();
        });
    }
    printConstructor(printer) {
        printer.addLine(`
      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of ${this.message.name} to deeply clone from
       */
      constructor(_value?: RecursivePartial<${this.message.name}.AsObject>) {
    `);
        printer.addLine('_value = _value || {};');
        this.messageFields.forEach((f) => {
            f.printInitializer(printer);
            printer.newLine();
        });
        printer.addLine(`${this.message.name}.refineValues(this);`);
        printer.addLine('}');
    }
    printAsObjectInterface(printer) {
        printer.addLine(`
      /**
       * Standard JavaScript object representation for ${this.message.name}
       */
      export interface AsObject {
    `);
        this.messageFields.forEach((f) => {
            f.printAsObjectMapping(printer);
            printer.newLine();
        });
        printer.addLine('}');
    }
    printToObject(printer) {
        printer.addLine(`
      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): ${this.message.name}.AsObject {
    `);
        printer.addLine('return {');
        this.messageFields.forEach((f) => {
            f.printToObjectMapping(printer);
            printer.newLine();
        });
        printer.addLine('};');
        printer.addLine('}');
    }
    printAsJSONInterface(printer) {
        printer.addLine(`
      /**
       * Protobuf JSON representation for ${this.message.name}
       */`);
        if (this.wkt?.printAsProtobufJSON) {
            this.wkt.printAsProtobufJSON(printer);
        }
        else {
            printer.addLine(`export interface AsProtobufJSON {`);
            this.messageFields.forEach((f) => {
                f.printAsJSONMapping(printer);
                printer.newLine();
            });
            printer.addLine('}');
        }
    }
    printToJSON(printer) {
        printer.addLine(`
      /**
       * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
       */
      toJSON() { return this.toObject(); }
    `);
    }
    printToProtobufJSON(printer) {
        printer.addDeps(dependencies_1.ExternalDependencies.ToProtobufJSONOptions);
        printer.addLine(`
      /**
       * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
       * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
       * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
       */`);
        printer.addLine(`toProtobufJSON(
      // @ts-ignore
      options?: ToProtobufJSONOptions
    ): ${this.message.name}.AsProtobufJSON {`);
        if (this.wkt?.printToProtobufJSON) {
            this.wkt.printToProtobufJSON(printer);
        }
        else {
            printer.addLine('return {');
            this.messageFields.forEach((f) => {
                f.printToProtobufJSONMapping(printer);
                printer.newLine();
            });
            printer.addLine('};');
        }
        printer.addLine('}');
    }
    printSubTypes(printer) {
        printer.addLine(`export module ${this.message.name} {`);
        this.printAsObjectInterface(printer);
        this.printAsJSONInterface(printer);
        this.oneOfs.forEach((oneof) => oneof.printEnum(printer));
        this.message.enumTypeList.forEach((protoEnum) => new enum_1.Enum(this.proto, protoEnum).print(printer));
        this.message.nestedTypeList.forEach((protoMessage) => new Message(this.proto, protoMessage).print(printer));
        printer.addLine('}');
    }
}
exports.Message = Message;
//# sourceMappingURL=message.js.map