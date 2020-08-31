'use strict';

console.log('app is running');

//jsx
var template = React.createElement(
  'p',
  null,
  'JSX from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
