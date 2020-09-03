const { map } = require('core-js/fn/array');

console.log('app is running');

//jsx
var app = {
  title: 'test',
  subtitle: 'test',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};
const removeAll = () => {
  app.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const numbers = [55, 101, 1000];

const renderApp = () => {
  var template = (
    <div>
      <h1>{app.title}</h1> <p>test</p>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What should I do
      </button>
      <button onClick={removeAll}>Remove all</button>
      {numbers.map((number) => {
        return <p key={number}>Number: {number}</p>;
      })}
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();
