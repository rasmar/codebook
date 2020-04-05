// Modules
// Language - level support for modules for component definition.
// Codifies patterns from popular JavaScript module loaders (AMD, CommonJS).
// Runtime behaviour defined by a host - defined default loader.
// Implicitly async model – no code executes until requested modules are available and processed.

// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
// app.js
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));
// otherApp.js
import { sum, pi } from "lib/math";
alert("2π = " + sum(pi, pi));

// Some additional features include export default and export *:

// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default function (x) {
  return Math.log(x);
}
// app.js
import ln, { pi, e } from "lib/mathplusplus";
alert("2π = " + ln(e) * pi * 2);
