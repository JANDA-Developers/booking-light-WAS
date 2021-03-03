export function lastOf<T>(array: Array<T>): T | undefined {
    if (!array.length) return undefined;
    return array[array.length - 1];
  }
  