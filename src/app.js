console.log('app is running');

//jsx
var template = (
  <div>
    <h1>Indecision app</h1> <p>test</p>
    <ol>
      <li>Item</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Piotr Kasprzycki</h1>
    <p>Age 32</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
