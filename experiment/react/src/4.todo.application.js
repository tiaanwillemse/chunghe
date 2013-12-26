
/** @jsx React.DOM */

var TodoList = React.createClass({
  createItem: function (text) {
    return <li>{text}</li>
  },

  render: function () {
    return <ul>{this.props.items.map(this.createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function () {
    return {items: [], text: ''};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var items = this.state.items.concat([this.state.text]);
    this.setState({items: items, text: ''});
  },

  onChange: function (e) {
    this.setState({text: e.target.value});
  },

  render: function () {
    return  (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <TodoList items={this.state.items} />
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});


React.renderComponent(<TodoApp />, document.getElementById('example'))
