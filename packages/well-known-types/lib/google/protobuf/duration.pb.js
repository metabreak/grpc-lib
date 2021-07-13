"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
const google_protobuf_1 = require("google-protobuf");
class Duration {
    static id = 'google.protobuf.Duration';
    static deserializeBinary(bytes) {
        const instance = new Duration();
        Duration.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.seconds = _instance.seconds || '0';
        _instance.nanos = _instance.nanos || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.seconds = _reader.readInt64String();
                    break;
                case 2:
                    _instance.nanos = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Duration.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.seconds) {
            _writer.writeInt64String(1, _instance.seconds);
        }
        if (_instance.nanos) {
            _writer.writeInt32(2, _instance.nanos);
        }
    }
    _seconds;
    _nanos;
    constructor(_value) {
        _value = _value || {};
        this.seconds = _value.seconds;
        this.nanos = _value.nanos;
        Duration.refineValues(this);
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(value) {
        this._seconds = value;
    }
    get nanos() {
        return this._nanos;
    }
    set nanos(value) {
        this._nanos = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Duration.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            seconds: this.seconds,
            nanos: this.nanos,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return parseInt(this.seconds || '0') + (this.nanos || 0) / 1e9 + 's';
    }
}
exports.Duration = Duration;
//# sourceMappingURL=duration.pb.js.map