
/** @jsx React.DOM */


var TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function () {
    return {items: [], text: ''};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    // this.items.con
    console.log('fn: handleSubmit');
    // this.state.items.push(this.)
  },

  onChange: function (e) {
    console.log('change', e.target)

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
