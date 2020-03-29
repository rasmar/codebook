// Spread operator
// In right side object literals({ ...foo, water: "1 L" }),
// the spread operator(...) inserts all enumerable own properties
//  of its operand(foo) into the object created(bar) via the literal:

const foo = {
  empanadas: 6,
  milanesas: 2,
  yerba: "1 Kg",
};
const bar = { ...foo, water: "1 L" };
console.log(bar); // Prints 
/**
* {
*   empanadas: 6,
*   milanesas: 2,
*   yerba: "1 Kg",
*   water: "1 L",
**/


// If we have conflicts with keys(empanadas), last one wins(empanadas : 12).
// This is useful to override default keys.

const foo = {
  empanadas: 6,
  milanesas: 2,
  yerba: "1 Kg",
};
const bar = { ...foo, empanadas: 12 };
console.log(bar); // Prints 
/**
* {
*   empanadas: 12,
*   milanesas: 2,
*   yerba: "1 Kg",
**/
