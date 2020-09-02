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

const renderApp = () => {
  var template = (
    <div>
      <h1>{app.title}</h1> <p>test</p>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        <li>Item</li>
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
