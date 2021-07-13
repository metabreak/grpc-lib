export declare class GrpcMetadata {
    private map;
    constructor(initial?: {
        [prop: string]: string;
    });
    set(name: string, value: string): void;
    get(name: string): string | undefined;
    has(name: string): boolean;
    clone(): GrpcMetadata;
    toObject(): {};
}
//# sourceMappingURL=grpc-metadata.d.ts.map