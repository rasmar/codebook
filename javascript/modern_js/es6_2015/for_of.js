// Iterators + For..Of
// Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable.
// Generalize for..in to custom iterator - based iteration with for..of.
// Don’t require realizing an array, enabling lazy design patterns like LINQ.

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}

// Iteration is based on these duck - typed interfaces(using TypeScript type syntax for exposition only):

interface IteratorResult {
  done: boolean;
  value: any;
}
interface Iterator {
  next(): IteratorResult;
}
interface Iterable {
  [Symbol.iterator](): Iterator
}
