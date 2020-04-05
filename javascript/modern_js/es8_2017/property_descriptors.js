// Object.getOwnPropertyDescriptors()
// With the movement toward functional programming and immutable data structures in JavaScript,
// getOwnPropertyDescriptors() is an added tool that can help out.
// The method returns all the own property descriptors of a given object.
// The property descriptors include value writable get set configurable enumerable.
// This can offer a safer and more thorough object copying as opposed to Object.assign()
// which directly accesses properties and symbols instead of their descriptors.
const obj = {
  hello: 'world',
  user: 'turing'
}
const clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);
