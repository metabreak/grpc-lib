export class GrpcMetadata {
  private map: Map<string, string>;

  constructor(initial: Record<string, string> = {}) {
    this.map = Object.keys(initial).reduce((accumulator, currentKey) => {
      return accumulator.set(currentKey, initial[currentKey]);
    }, new Map<string, string>());
  }

  set(name: string, value: string): void {
    this.map.set(name, value);
  }

  get(name: string): string | undefined {
    return this.map.get(name);
  }

  has(name: string): boolean {
    return this.map.has(name);
  }

  clone(): GrpcMetadata {
    return new GrpcMetadata(this.toObject());
  }

  toObject(): Record<string, string> {
    const keysArray = [...this.map.keys()];
    return keysArray.reduce((accumulator, currentKey) => {
      const currentValue = this.map.get(currentKey);

      if (currentValue) {
        return {
          ...accumulator,
          [currentKey]: currentValue,
        };
      }

      return accumulator;
    }, {} as Record<string, string>);
  }
}
