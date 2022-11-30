(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.nocb = factory());
})(this, (function () { 'use strict';

  /**
   * Transform any callback function into promise
   * @param fn Function that accept a promise resolver and rejecter as argument
   * @returns
   */
  function nocb(fn) {
      return new Promise((resolve, reject) => {
          try {
              fn(resolve, reject);
          }
          catch (e) {
              reject(e);
          }
      });
  }

  return nocb;

}));
//# sourceMappingURL=index.js.map
