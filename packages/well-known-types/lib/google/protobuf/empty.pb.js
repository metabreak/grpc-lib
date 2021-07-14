"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
const google_protobuf_1 = require("google-protobuf");
class Empty {
    static id = 'google.protobuf.Empty';
    static deserializeBinary(bytes) {
        const instance = new Empty();
        Empty.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) { }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                default:
                    _reader.skipField();
            }
        }
        Empty.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) { }
    constructor(_value) {
        _value = _value ?? {};
        Empty.refineValues(this);
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Empty.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {};
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {};
    }
}
exports.Empty = Empty;
//# sourceMappingURL=empty.pb.js.map