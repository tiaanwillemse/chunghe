
/** @jsx React.DOM */

var TodoList = React.createClass({displayName: 'TodoList',
  render: function () {
    return React.DOM.li(null, "hello world");
  }
});

var TodoApp = React.createClass({displayName: 'TodoApp',
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
      React.DOM.div(null, 
        React.DOM.h3(null, "TODO"),
        React.DOM.form( {onSubmit:this.handleSubmit}, 
          TodoList( {items:this.state.items} ),
          React.DOM.input( {onChange:this.onChange} ),
          React.DOM.button(null, 'Add #' + (this.state.items.length + 1))
        )
      )
    );
  }
});


React.renderComponent(TodoApp(null ), document.getElementById('example'))
