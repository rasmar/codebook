// Trailing Commas in Function Parameter Lists
// An ES8 update improving developer experience is allowing trailing commas in
// function parameters lists. Trailing commas will no longer raise a SyntaxError when a comma is present.
class C {
  one(a, ) { },
  two(a, b, ) { },
}

var obj = {
  one(a, ) { },
  two(a, b, ) { },
};
function hi(a, b, ) {
  console.log(`hi ${a} and ${b}`)
}
hi('world', 'es8');

// Trailing commas at the end of objects and arrays was previously implemented in JavaScript.
// This feature generated broad adoption and has led the way for this function syntax update.

// Previously implemented legal trailing commas for objects and arrays
var obj = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
var arr = [1, 2, 3,] // note if you use more than one comma at the end, it will add to the length
