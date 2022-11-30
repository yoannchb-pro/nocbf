/**
 * Transform any callback function into promise
 * @param fn Function that accept a promise resolver and rejecter as argument
 * @returns
 */
declare function nocbf(fn: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => any): Promise<unknown>;
export { nocbf as default };
