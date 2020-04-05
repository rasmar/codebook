// Async Function
// Asynchronous code is at the core of JavaScript, and ES8 has officially added the ability
// to declare a function as async. By adding the async keyword in front of a function,
// you are able to defer the execution of code using the await statement.
// The return value of an async function is implicitly a promise object.

async function getDataFromAjax(url) {
  let data;
  try {
    data = await fetch(url);
    // This will wait 
    // until fetch returns
    fillClientStateWithData(data.json());
  } catch (error) {
    // This will execute if the
    // API returns an error
    handleAjaxError(error);
  }
}

getDataFromAjax();

// Other methods to handle async actions previously introduced in JavaScript are callbacks, promise chains, and generators.
