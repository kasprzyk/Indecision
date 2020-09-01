console.log('app is running');

//jsx
var app = {
  title: 'test',
  subtitle: 'test',
};
var template = (
  <div>
    <h1>{app.title}</h1> <p>test</p>
    <ol>
      <li>Item</li>
    </ol>
  </div>
);
var user = {
  name: 'Piotr',
  age: 27,
  location: 'Ilawa',
};
var userName = 'Piotr';
var userAge = 27;

function getLocation(location) {
  if (location) {
    return <p>{location}</p>;
  } else {
    return 'unknown';
  }
}
var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
