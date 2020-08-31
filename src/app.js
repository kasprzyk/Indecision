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
var user = {
  name: 'Piotr',
  age: 27,
};
var userName = 'Piotr';
var userAge = 27;
var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
