console.log('app is running');

//jsx
var app = {
  title: 'test',
  subtitle: 'test',
  options: ['One', 'Two'],
};
var template = (
  <div>
    <h1>{app.title}</h1> <p>test</p>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Options' : 'No options'}</p>
    <ol>
      <li>Item</li>
    </ol>
  </div>
);
let count = 0;
const addOne = () => {};
const minusOne = () => {};
const reset = () => {};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
