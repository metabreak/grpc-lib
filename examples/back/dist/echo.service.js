"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoServiceServiceImpl = void 0;
var timestamp_pb_1 = require("google-protobuf/google/protobuf/timestamp_pb");
var grpc_1 = require("grpc");
var echo_pb_1 = require("./proto/echo_pb");
function createTimestamp(date) {
    var ts = new timestamp_pb_1.Timestamp();
    ts.fromDate(date);
    return ts;
}
var EchoServiceServiceImpl = /** @class */ (function () {
    function EchoServiceServiceImpl() {
        var _this = this;
        this.echoStream = function (call) { return __awaiter(_this, void 0, void 0, function () {
            var message, _loop_1, i, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = call.request.getMessage();
                        console.log("Received message: " + message);
                        _loop_1 = function (i) {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            setTimeout(function () {
                                                if (call.cancelled) {
                                                    console.log('Request is cancelled');
                                                    reject();
                                                    // return;
                                                }
                                                var messageBack = "Response " + (i + 1) + " for \"" + message + "\"";
                                                console.log("Responding with: " + messageBack);
                                                var response = new echo_pb_1.EchoResponse();
                                                response.setMessage(messageBack);
                                                response.setTimestamp(createTimestamp(new Date()));
                                                call.write(response);
                                                if (call.request.getShouldthrow()) {
                                                    call.emit('error', {
                                                        code: grpc_1.status.INTERNAL,
                                                        message: 'Internal error',
                                                    });
                                                    reject();
                                                    // return;
                                                }
                                                resolve(undefined);
                                            }, 1000);
                                        })];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        meta = new grpc_1.Metadata();
                        meta.set('x-custom-header-1', 'bla');
                        call.end(meta);
                        return [2 /*return*/];
                }
            });
        }); };
        this.echoOnce = function (call, callback) {
            var message = call.request.getMessage();
            console.log("Received message: " + message);
            if (call.request.getShouldthrow()) {
                var trailer = new grpc_1.Metadata();
                trailer.set('x-custom-header-1', 'wow');
                var metadata = new grpc_1.Metadata();
                trailer.set('x-custom-header-1', 'wow,');
                callback({
                    code: grpc_1.status.INTERNAL,
                    details: 'Internal error',
                    metadata: metadata,
                }, null, trailer);
                return;
            }
            var response = new echo_pb_1.EchoResponse();
            var messageBack = "Response for \"" + message + "\"";
            response.setMessage(messageBack);
            response.setTimestamp(createTimestamp(new Date()));
            console.log("Responding with: " + messageBack);
            callback(null, response);
        };
    }
    return EchoServiceServiceImpl;
}());
exports.EchoServiceServiceImpl = EchoServiceServiceImpl;
//# sourceMappingURL=echo.service.js.map