"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston = __importStar(require("winston"));
class Logger {
    logger;
    constructor(debug) {
        if (debug) {
            this.logger = winston.createLogger({
                format: winston.format.combine(winston.format.timestamp({
                    format: 'YYYY-MM-DDTHH:mm:ss.SSSS',
                }), winston.format.printf((info) => `${info.timestamp}\t${info.level}\t${info.message}`)),
                level: 'debug',
                transports: [
                    new winston.transports.File({
                        filename: './debug/log.txt',
                        options: { flags: 'w' },
                    }),
                ],
            });
        }
    }
    info(msg) {
        if (this.logger) {
            this.logger.info(msg);
        }
    }
    debug(msg) {
        if (this.logger) {
            this.logger.debug(msg);
        }
    }
    error(msg) {
        if (this.logger) {
            this.logger.error(msg);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map