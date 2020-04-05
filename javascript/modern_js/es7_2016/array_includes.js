// Array.prototype.includes()
// This feature introduces a more readable syntax for checking if an array contains an element.
// With ES6 and lower, to check if an array contained an element you had to use indexOf,
// which checks the index in the array, and returns - 1 if the element is not there.

// Since - 1 is evaluated as a true value, you could not do for example

if (![1, 2].indexOf(3)) {
  console.log('Not found')
}

// With this feature introduced in ES2016 we can do
if (![1, 2].includes(3)) {
  console.log('Not found')
}
