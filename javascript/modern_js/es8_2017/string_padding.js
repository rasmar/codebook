// String Padding
// Additional functionality has been added to make strings easier to work with,
// and string padding ensures that the output is the exact length desired.
// A developer can add padding to either the beginning or end of a string with
// the additional string composed of a select set of characters or empty spaces.
// The primary functions included are String.padStart() and String.padEnd().
// padStart
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6, "123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
// padEnd
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
