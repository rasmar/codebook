// string.prototype.matchAll()

// If you run a Google search for javascript string match all the first result will be
// something like: How do I write a regular expression to “match all”?
// Top results will suggest using String.match with a regular expression and / g
// …or RegExp.exec and / or RegExp.test with /g
// First, let’s take a look at how the older spec worked.
// String.match with string argument only returns the first match:

let string = "Hello";
let matches = string.match("l");
console.log(matches[0]); // "l"

// But String.match with a regular expression and the / g flag does return multiple matches:
let string = "Hello";
let ret = string.match(/l/g); // (2) [“l”, “l”];

// Regular Expression Capture Groups
// Capturing groups in regex is simply extracting a pattern from() parenthesis.
// You can capture groups with /regex/.exec(string) and with string.match.
// Regular capture group is created by wrapping a pattern in (pattern).
// But to create groups property on resulting object it is: (? <name>pattern).
// To create a new group name, simply prepend ?<name> inside brackets and in the result
// it the grouped (pattern) match will become groups.name attached to the match object.
// Here’s a practical example:
const string = 'black*raven lime*parrot white*seagull';

// Here match.groups.color & match.groups.bird are created:
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
while (match = regex.exec(string)) {
  let value = match[0];
  let index = match.index;
  let input = match.input;
  console.log(`${value} at ${index} with '${input}'`);
  console.log(match.groups.color);
  console.log(match.groups.bird);
}

// black * raven at 0 with 'black*raven lime*parrot white*seagull'
// black
// raven
// lime * parrot at 11 with 'black*raven lime*parrot white*seagull'
// lime
// parrot
// white * seagull at 23 with 'black*raven lime*parrot white*seagull'
// white
// seagull

// regex.exec method needs to be called multiple times to walk the entire set of the search results.
// During each iteration when .exec is called, the next result is revealed (it doesn’t return all matches right away.)
// Hence while loop.

// Good reasons to use.matchAll()
// - It can be more elegant when using with capture groups.
// - A capture group is simply the part of regular expression with ( ) that extracts a pattern.
// - It returns an iterator instead of array.Iterators on their own are useful.
// - An iterator can be converted to an array using spread operator(…)
// - It avoids regular expressions with /g flag… useful when an unknown regular expression is retrieved
// from database or outside source and used together with the archaic RegEx object.
// - Regular expressions created using RegEx object cannot be chained using the dot(.) operator.
// - Advanced: RegEx object changes internal.lastIndex property that tracks last matching position.
// This can wreck havoc in complex cases.

// Match all occurrences of the letters: "e" or "l" 
let iterator = "hello".matchAll(/[el]/);
for (const match of iterator)
  console.log(match);

const string = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/;
for (const match of string.matchAll(regex)) {
  let value = match[0];
  let index = match.index;
  let input = match.input;
  console.log(`${value} at ${index} with '${input}'`);
  console.log(match.groups.color);
  console.log(match.groups.bird);
}
