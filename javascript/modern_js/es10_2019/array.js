// Array.flat()
// Flattening of a multi - dimensional array:
let multi = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

multi.flat();               // [1,2,3,4,5,6,Array(4)]
multi.flat().flat();        // [1,2,3,4,5,6,7,8,9,Array(3)]
multi.flat().flat().flat(); // [1,2,3,4,5,6,7,8,9,10,11,12]
multi.flat(Infinity);       // [1,2,3,4,5,6,7,8,9,10,11,12]


// Array.flatMap()
let array = [1, 2, 3, 4, 5];
array.map(x => [x, x * 2]);

// Becomes:
[Array(2), Array(2), Array(2)]
// 0: (2)[1, 2]
// 1: (2)[2, 4]
// 2: (2)[3, 6]
// 3: (2)[4, 8]
// 4: (2)[5, 10]

// Flatten the map again:
array.flatMap(v => [v, v * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


// Stable Array.prototype.sort()
// Previous implementation of V8 used an unstable quick sort algorithm for arrays containing more than 10 items.
// A stable sorting algorithm is when two objects with equal keys appear in the
// same order in the sorted output as they appear in the unsorted input.
// But this is no longer the case.ES10 offers a stable array sort:
var fruit = [
  { name: "Apple", count: 13, },
  { name: "Pear", count: 12, },
  { name: "Banana", count: 12, },
  { name: "Strawberry", count: 11, },
  { name: "Cherry", count: 11, },
  { name: "Blackberry", count: 10, },
  { name: "Pineapple", count: 10, }
];

// Create our own sort criteria function:
let my_sort = (a, b) => a.count - b.count;

// Perform stable ES10 sort:
let sorted = fruit.sort(my_sort);

console.log(sorted);
// Console Output (items appear in reverse order):
// [
//   { name: "Blackberry", count: 10, },
//   { name: "Pineapple", count: 10, }
//   { name: "Strawberry", count: 11, },
//   { name: "Cherry", count: 11, },
//   { name: "Pear", count: 12, },
//   { name: "Banana", count: 12, },
//   { name: "Apple", count: 13, },
// ]
