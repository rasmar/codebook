const render = () => {
  document.getElementById('mountNode').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      'div',
      null,
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString())
    ),
    document.getElementById('mountNode2')
  );
};

setInterval(render, 1000);

// React updates only elements that really changed, because it keep the virtual DOM state in the memory
// Typical JS approach would regenerate whole DOM elements set
