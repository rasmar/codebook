// Asynchronous Iteration
// The previously explained way of iterating is synchronous,
// it doesn’t work for asynchronous sources. For example, in the following code,
// fetchCoinValues()
// can't deliver its asynchronous data via synchronous iteration:

for (const coinValue of fetchCoinValues(['ETH', 'XMR', 'BTC', 'LTC', 'BAT'])) {
  console.log(coinValue);
}

// ES2018 specifies a new protocol for async iteration:
//   Async iterables are marked via Symbol.asyncIterator.
//   Method.next() of an async iterator returns a Promise or NextElement.
// With this new protocol, we are able to await for an asynchronous fetched coinValue

for await (const coinValue of fetchCoinValues(['ETH', 'XMR', 'BTC', 'LTC', 'BAT'])) {
  console.log(coinValue);
}
