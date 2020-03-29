// Rest operator
// Inside object destructuring patterns, the rest operator(...) copies all enumerable
// own properties of the destructuring source(foo) into its operand( const { }),
// except those that were already mentioned in the object literal.

const foo = {
  empanadas: 6,
  milanesas: 2,
  yerba: "1 Kg",
};
const { yerba, ...rest } = foo;
console.log(yerba); // Prints "1 Kg"
console.log(rest); // Prints {empanadas: 6, milanesas: 2}

// We can do it inside of a function, to handle named parameters

function func({ yerba, ...rest }) { // rest operator
  /** 
  * You can eat empanadas and drink mate here using property rest.empanadas 
  * and yerba.
  */
};

// We can use the rest operator at most once and it must be last.

const { ...rest, yerba } = foo; // syntax error, must be last.
const { ...rest, ...others } = foo; // syntax error, 2 operators.
