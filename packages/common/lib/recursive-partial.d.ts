export declare type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends Uint8Array ? T[P] : T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P];
};
//# sourceMappingURL=recursive-partial.d.ts.map