const { react } = require('babel-types');

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life into hands of computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component
        <Option />
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>Option component</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
