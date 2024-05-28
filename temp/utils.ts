export const delay = <T = undefined>(ms: number, data?: T): Promise<T> =>
    new Promise((resolve) => setTimeout(resolve, ms, data));

export function nonEmptyArray<T>(array?: readonly T[]): array is [T, ...T[]] {
    return Array.isArray(array) && array.length > 0;
}
