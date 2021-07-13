export declare class ConfigPb {
    generate: boolean;
    constructor(config?: Partial<ConfigPb>);
}
export declare class ConfigPbconf {
    generate: boolean;
    constructor(config?: Partial<ConfigPbconf>);
}
export declare class ConfigPbsc {
    generate: boolean;
    serviceClientProvidedIn: 'root' | 'any' | 'none';
    constructor(config?: Partial<ConfigPbsc>);
}
export declare class ConfigPbwsc {
    generate: boolean;
    constructor(config?: Partial<ConfigPbwsc>);
}
export declare class ConfigFiles {
    pb: ConfigPb;
    pbsc: ConfigPbsc;
    pbwsc: ConfigPbwsc;
    constructor(config?: Partial<ConfigFiles>);
}
export declare class Config {
    debug: boolean;
    embedWellKnownTypes: boolean;
    files: ConfigFiles;
    static fromParameter(parameter: string): Config;
    constructor(config?: Partial<Config>);
}
