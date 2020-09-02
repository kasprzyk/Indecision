'use strict';

console.log('app is running');

//jsx
var app = {
  title: 'test',
  subtitle: 'test',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'test'
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item'
    )
  )
);
var count = 0;
var addOne = function addOne() {};
var minusOne = function minusOne() {};
var reset = function reset() {};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
