export declare class Logger {
    private logger?;
    constructor(debug: boolean);
    info(msg: string): void;
    debug(msg: string): void;
    error(msg: string): void;
}
