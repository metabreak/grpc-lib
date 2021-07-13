"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const grpc_common_1 = require("@metabreak/grpc-common");
const google_protobuf_1 = require("google-protobuf");
class DoubleValue {
    static id = 'google.protobuf.DoubleValue';
    static deserializeBinary(bytes) {
        const instance = new DoubleValue();
        DoubleValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readDouble();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DoubleValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeDouble(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        DoubleValue.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        DoubleValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.DoubleValue = DoubleValue;
class FloatValue {
    static id = 'google.protobuf.FloatValue';
    static deserializeBinary(bytes) {
        const instance = new FloatValue();
        FloatValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        FloatValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeFloat(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        FloatValue.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        FloatValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.FloatValue = FloatValue;
class Int64Value {
    static id = 'google.protobuf.Int64Value';
    static deserializeBinary(bytes) {
        const instance = new Int64Value();
        Int64Value.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || '0';
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readInt64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Int64Value.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeInt64String(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        Int64Value.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Int64Value.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.Int64Value = Int64Value;
class UInt64Value {
    static id = 'google.protobuf.UInt64Value';
    static deserializeBinary(bytes) {
        const instance = new UInt64Value();
        UInt64Value.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || '0';
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readUint64String();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UInt64Value.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeUint64String(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        UInt64Value.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        UInt64Value.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.UInt64Value = UInt64Value;
class Int32Value {
    static id = 'google.protobuf.Int32Value';
    static deserializeBinary(bytes) {
        const instance = new Int32Value();
        Int32Value.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Int32Value.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeInt32(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        Int32Value.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Int32Value.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.Int32Value = Int32Value;
class UInt32Value {
    static id = 'google.protobuf.UInt32Value';
    static deserializeBinary(bytes) {
        const instance = new UInt32Value();
        UInt32Value.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readUint32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UInt32Value.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeUint32(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        UInt32Value.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        UInt32Value.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.UInt32Value = UInt32Value;
class BoolValue {
    static id = 'google.protobuf.BoolValue';
    static deserializeBinary(bytes) {
        const instance = new BoolValue();
        BoolValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || false;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BoolValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeBool(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        BoolValue.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        BoolValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.BoolValue = BoolValue;
class StringValue {
    static id = 'google.protobuf.StringValue';
    static deserializeBinary(bytes) {
        const instance = new StringValue();
        StringValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || '';
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StringValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value) {
            _writer.writeString(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        StringValue.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        StringValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value;
    }
}
exports.StringValue = StringValue;
class BytesValue {
    static id = 'google.protobuf.BytesValue';
    static deserializeBinary(bytes) {
        const instance = new BytesValue();
        BytesValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.value = _instance.value || new Uint8Array();
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.value = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BytesValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.value && _instance.value.length) {
            _writer.writeBytes(1, _instance.value);
        }
    }
    _value;
    constructor(_value) {
        _value = _value || {};
        this.value = _value.value;
        BytesValue.refineValues(this);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        BytesValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            value: this.value ? this.value.subarray(0) : new Uint8Array(),
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.value ? grpc_common_1.uint8ArrayToBase64(this.value) : '';
    }
}
exports.BytesValue = BytesValue;
//# sourceMappingURL=wrappers.pb.js.map