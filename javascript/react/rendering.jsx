function Hello() {
  return(
    // THIS IS NOT HTML
    <div className='container'> 
      <h1>Let's get started!</h1>
    </div>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('mountNode'),
);


// What happens in the implicitly?
// JSX
<div className='container'>
  <h1>Let's get started!</h1>
</div>

// Is the same as
React.createElement(
  'div', { className: 'container' },
  React.createElement('h1', null, 'Let\'s get starterd!')
)
