/**
 * Transform any callback function into promise
 * @param fn Function that accept a promise resolver and rejecter as argument
 * @returns
 */
declare function nocb(fn: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => any): Promise<unknown>;
export { nocb as default };
