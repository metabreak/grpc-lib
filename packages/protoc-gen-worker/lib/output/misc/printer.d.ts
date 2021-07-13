import { Dependency } from './interfaces';
export declare class Printer {
    private dependencies;
    private code;
    constructor();
    addDeps(...deps: Dependency[]): void;
    add(code: string): void;
    addLine(code: string): void;
    newLine(): void;
    finalize(): string;
    private createLeadingComment;
    private createDependenciesCode;
    private prettify;
}
