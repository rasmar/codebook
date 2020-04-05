// Object.values and Object.entries
// These methods add additional options to iterate through objects.
// Object.values can be viewed as a more declarative way of executing a for...of loop.
// It returns an array of the values for all enumerable keys in the object(excluding values in the prototype chain).
const obj = {
  me: 'I',
  hello: 'love',
  js: 'ES8',
  secrets: 42
}
const result = Object.values(obj);
console.log(result); // ["I", "love", "ES8", 42]

// The Object.entries method returns an array of arrays with the key and value in each sub - array.
const obj = {
  me: 'I',
  hello: 'love',
  js: 'ES8',
  secrets: 42
}
const result = Object.entries(obj);
console.log(result); // [["me", "I"], ["hello", "love"], ["js", "ES8"], ["secrets", 42]]

// Note that both methods will work for any enumerable data structure such as strings and arrays.
// The method will coerce the item into an object.
// Other methods to iterate objects previously introduced are Object.keys(obj), for...in, and for...of.
