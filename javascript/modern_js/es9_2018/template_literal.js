// Template literal revision
// When a template literal(${ food } is tasty) is immediately
// preceded by an expression(fn'${food} is tasty'), it is called a tagged template literal.
// A tagged template comes in handy when you want to parse a template literal with a function(fn).
// Consider:

function fn(string, substitute) {
  if (substitute === 'empanadas') {
    substitute = 'milanesas with mashed potatoes';
  }
  return substitute + string[1];
}
const food = 'empanadas';
const result = fn`${food} are tasty!`;
console.log(result); // Prints milanesas with mashed potatoes are tasty!
