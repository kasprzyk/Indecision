import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(
  <IndecisionApp options={['one', 'two']} />,
  document.getElementById('app')
);
//ReactDOM.render(<User name='Piotr' age={32} />, document.getElementById('app'));
