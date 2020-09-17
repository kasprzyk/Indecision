import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
// const layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.content}
//       <p>footer</p>
//     </div>
//   );
// };

// const template = (
//   <div>
//     <h1>Page title</h1>
//     <p>This is my page</p>
//   </div>
// );

ReactDOM.render(
  <IndecisionApp options={['one', 'two']} />,
  document.getElementById('app')
);
//ReactDOM.render(<Layout content={template} />, document.getElementById('app'));
