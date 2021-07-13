"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeMessages = exports.throwStatusErrors = void 0;
const grpc_worker_common_1 = require("@metabreak/grpc-worker-common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function throwStatusErrors() {
    return (source$) => source$.pipe(operators_1.switchMap((event) => {
        if (event instanceof grpc_worker_common_1.GrpcStatusEvent && event.statusCode) {
            return rxjs_1.throwError(() => {
                return new Error(event.statusMessage);
            });
        }
        return rxjs_1.of(event);
    }));
}
exports.throwStatusErrors = throwStatusErrors;
function takeMessages() {
    return (source$) => source$.pipe(operators_1.filter((event) => {
        return event instanceof grpc_worker_common_1.GrpcDataEvent;
    }), operators_1.map((event) => {
        return event.data;
    }));
}
exports.takeMessages = takeMessages;
//# sourceMappingURL=grpc-rx-operators.js.map