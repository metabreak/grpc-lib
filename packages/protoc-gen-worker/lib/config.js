"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.ConfigFiles = exports.ConfigPbwsc = exports.ConfigPbsc = exports.ConfigPbconf = exports.ConfigPb = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class ConfigPb {
    generate;
    constructor(config = {}) {
        this.generate = config.generate ?? true;
    }
}
exports.ConfigPb = ConfigPb;
class ConfigPbconf {
    generate;
    constructor(config = {}) {
        this.generate = config.generate ?? true;
    }
}
exports.ConfigPbconf = ConfigPbconf;
class ConfigPbsc {
    generate;
    serviceClientProvidedIn;
    constructor(config = {}) {
        this.generate = config.generate ?? true;
        this.serviceClientProvidedIn = config.serviceClientProvidedIn ?? 'any';
    }
}
exports.ConfigPbsc = ConfigPbsc;
class ConfigPbwsc {
    generate;
    constructor(config = {}) {
        this.generate = config.generate ?? false;
    }
}
exports.ConfigPbwsc = ConfigPbwsc;
class ConfigFiles {
    pb;
    pbsc;
    pbwsc;
    constructor(config = {}) {
        this.pb = new ConfigPb(config.pb);
        this.pbsc = new ConfigPbsc(config.pbsc);
        this.pbwsc = new ConfigPbwsc(config.pbwsc);
    }
}
exports.ConfigFiles = ConfigFiles;
class Config {
    debug;
    embedWellKnownTypes;
    files;
    static fromParameter(parameter) {
        const params = (parameter || '')
            .split(',')
            .map((p) => p.split('='))
            .reduce((r, p) => ({ ...r, [p[0]]: p[1] }), {});
        if (params.config && !fs_1.existsSync(params.config)) {
            throw new Error(`The config file "${params.config}" cannot be found`);
        }
        return new Config(params.config ? require(path_1.resolve(params.config)) : {});
    }
    constructor(config = {}) {
        this.debug = config.debug ?? false;
        this.embedWellKnownTypes = config.embedWellKnownTypes ?? false;
        this.files = new ConfigFiles(config.files ?? {});
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map