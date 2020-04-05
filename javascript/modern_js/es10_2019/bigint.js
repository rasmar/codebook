// BigInt — Arbitrary precision integers
// BigInt is an arbitrary - precision integer.
// What this means is that variables can now represent 2⁵³ numbers.
// And not just max out at 9007199254740992.

const limit = Number.MAX_SAFE_INTEGER;
// ⇨ 9007199254740991
limit + 1;
// ⇨ 9007199254740992
limit + 2;
// ⇨ 9007199254740992 < --- MAX_SAFE_INTEGER + 1 exceeded
const larger = 9007199254740991n;
// ⇨ 9007199254740991n
const integer = BigInt(9007199254740991); // initialize with number
// ⇨ 9007199254740991n
const same = BigInt("9007199254740991"); // initialize with "string"
// ⇨ 9007199254740991n

typeof 10;
// ⇨ 'number'
typeof 10n;
// ⇨ 'bigint'

10n === BigInt(10);
// ⇨ true
10n == 10;
// ⇨ true
