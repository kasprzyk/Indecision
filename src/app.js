const obj = {
  name: 'test',
  getName() {
    return this.name;
  },
};

const getName = obj.getName.bind({ name: 'Piotr' });

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    const options = ['one', 'two', 'three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    this.props;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {}

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('test');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
