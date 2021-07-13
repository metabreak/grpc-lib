"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Any = void 0;
const google_protobuf_1 = require("google-protobuf");
class Any {
    static id = 'google.protobuf.Any';
    static deserializeBinary(bytes) {
        const instance = new Any();
        Any.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static prefix = 'type.googleapis.com/';
    static pack(msg) {
        const any = new Any();
        any.pack(msg);
        return any;
    }
    static refineValues(_instance) {
        _instance.typeUrl = _instance.typeUrl || '';
        _instance.value = _instance.value || new Uint8Array();
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.typeUrl = _reader.readString();
                    break;
                case 2:
                    _instance.value = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Any.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.typeUrl) {
            _writer.writeString(1, _instance.typeUrl);
        }
        if (_instance.value && _instance.value.length) {
            _writer.writeBytes(2, _instance.value);
        }
    }
    _typeUrl;
    _value;
    constructor(_value) {
        _value = _value || {};
        this.typeUrl = _value.typeUrl;
        this.value = _value.value;
        Any.refineValues(this);
    }
    get typeUrl() {
        return this._typeUrl;
    }
    set typeUrl(value) {
        this._typeUrl = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Any.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            typeUrl: this.typeUrl,
            value: this.value ? this.value.subarray(0) : new Uint8Array(),
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        if (!options?.messagePool) {
            throw new Error(`Message pool is required to cast Any to JSON`);
        }
        const msg = this.unpack(options.messagePool);
        if (!msg) {
            return { '@type': this.typeUrl };
        }
        const json = msg.toProtobufJSON(options);
        if (typeof json !== 'object') {
            return { '@type': this.typeUrl, value: json };
        }
        return { ...json, '@type': this.typeUrl };
    }
    getPackedMessageId() {
        if (!this.typeUrl) {
            return null;
        }
        if (!this.typeUrl.startsWith(Any.prefix)) {
            throw new Error(`Type URL does not start with ${Any.prefix}`);
        }
        return this.typeUrl.substr(Any.prefix.length);
    }
    getPackedMessageType(messagePool, throwWhenNotInThePool = true) {
        const id = this.getPackedMessageId();
        if (!id) {
            return null;
        }
        const msgClass = messagePool.get(id);
        if (!msgClass) {
            if (throwWhenNotInThePool) {
                throw new Error(`Message with identifier '${this.typeUrl}' is not present in message pool`);
            }
            else {
                return null;
            }
        }
        return msgClass;
    }
    unpack(messagePool) {
        const messageClass = this.getPackedMessageType(messagePool);
        if (!messageClass) {
            throw new Error(`Message type cannot be resolved`);
        }
        if (!this.value) {
            throw new Error(`Cannot unpack value that is unset`);
        }
        return messageClass.deserializeBinary(this.value);
    }
    pack(msg) {
        const { id } = msg.constructor;
        if (!id) {
            throw new Error(`Message is invalid or does not have an id`);
        }
        this.typeUrl = `${Any.prefix}${id}`;
        this.value = msg.serializeBinary();
    }
}
exports.Any = Any;
//# sourceMappingURL=any.pb.js.map