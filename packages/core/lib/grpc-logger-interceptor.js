"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcLoggerInterceptor = void 0;
const grpc_common_1 = require("@metabreak/grpc-common");
const operators_1 = require("rxjs/operators");
class GrpcLoggerInterceptor {
    dataStyle = 'color: #5c7ced;';
    errorStyle = 'color: red;';
    statusOkStyle = 'color: #0ffcf5;';
    settings;
    constructor(settings = {}) {
        this.settings = {
            enabled: settings.enabled ?? true,
            logClientSettings: settings.logClientSettings ?? true,
            logMetadata: settings.logMetadata ?? true,
            logStatusCodeOk: settings.logStatusCodeOk ?? false,
            requestMapper: settings.requestMapper ?? ((msg) => msg.toObject()),
            responseMapper: settings.responseMapper ?? ((msg) => msg.toObject()),
        };
    }
    intercept(request, next) {
        if (this.settings.enabled) {
            const start = Date.now();
            return next.handle(request).pipe(operators_1.tap((event) => {
                const style = event instanceof grpc_common_1.GrpcDataEvent
                    ? this.dataStyle
                    : event.statusCode !== 0
                        ? this.errorStyle
                        : this.statusOkStyle;
                const openGroup = () => console.groupCollapsed(`%c${Date.now() - start}ms -> ${request.path}`, style);
                const printSettings = () => {
                    if (this.settings.logClientSettings) {
                        console.log('%csc', style, request.client.getSettings());
                    }
                };
                const printMetadata = () => {
                    if (this.settings.logMetadata) {
                        console.log('%c**', style, request.requestMetadata.toObject());
                    }
                };
                const printRequest = () => {
                    if (this.settings?.requestMapper) {
                        console.log('%c>>', style, this.settings.requestMapper(request.requestData));
                    }
                };
                const closeGroup = () => console.groupEnd();
                if (event instanceof grpc_common_1.GrpcDataEvent) {
                    openGroup();
                    printSettings();
                    printRequest();
                    printMetadata();
                    if (this.settings.responseMapper) {
                        console.log('%c<<', style, this.settings.responseMapper(event.data));
                    }
                    closeGroup();
                }
                else if (event.statusCode !== 0) {
                    openGroup();
                    printSettings();
                    printRequest();
                    printMetadata();
                    console.log('%c<<', style, event);
                    closeGroup();
                }
                else if (event.statusCode === 0 && this.settings.logStatusCodeOk) {
                    openGroup();
                    printSettings();
                    printRequest();
                    printMetadata();
                    console.log('%c<<', style, event);
                    closeGroup();
                }
            }));
        }
        return next.handle(request);
    }
}
exports.GrpcLoggerInterceptor = GrpcLoggerInterceptor;
//# sourceMappingURL=grpc-logger-interceptor.js.map