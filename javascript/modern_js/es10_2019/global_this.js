// Standardized globalThis object
// The global this was not standardized before ES10.
// In production code you would “standardize” it across multiple platforms on your own by writing this monstrosity:
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

// But even this didn‘t always work.So ES10 added the globalThis object
// which should be used from now on to access global scope on any platform:
// Access global array constructor
globalThis.Array(0, 1, 2);
// ⇨[0, 1, 2]

// Similar to window.v = { flag: true } in <= ES5
globalThis.v = { flag: true };

console.log(globalThis.v);
// ⇨ { flag: true }
