
/** @jsx React.DOM */


var TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function () {
    return {items: [], text: ''};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var items = this.state.items.contact([this.state.text]);
    console.log ('items', items);
    this.setState({items: items});
    console.log('items', this.state.items)
  },

  onChange: function (e) {
    this.setState({text: e.target.value});
  },

  render: function () {
    return  (
      React.DOM.div(null, 
        React.DOM.h3(null, "TODO"),
        React.DOM.form( {onSubmit:this.handleSubmit}, 
          React.DOM.input( {onChange:this.onChange} ),
          React.DOM.button(null, 'Add #' + (this.state.items.length + 1))
        )
      )
    );
  }
});


React.renderComponent(TodoApp(null ), document.getElementById('example'))
