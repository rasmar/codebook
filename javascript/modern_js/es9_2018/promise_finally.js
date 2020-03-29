// Promise.finally
// ES2018 introduces a new callback that is always executed,
// no matter if then or catch is called.

fetch(url)
  .then()
  .catch()
  .finally(() => console.log(`I'm always called!`));
