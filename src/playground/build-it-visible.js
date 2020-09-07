let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const jsx = (
    <div>
      <h2>Visibility Toogle</h2>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Some details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();
