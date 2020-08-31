'use strict';

console.log('app is running');

//jsx
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision app'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'test'
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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Piotr Kasprzycki'
  ),
  React.createElement(
    'p',
    null,
    'Age 32'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
