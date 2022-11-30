/**
 * Transform any callback function into promise
 * @param fn Function that accept a promise resolver and rejecter as argument
 * @returns
 */
function nocbf(
  fn: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => any
) {
  return new Promise((resolve, reject) => {
    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
}

export default nocbf;
