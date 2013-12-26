
/** @jsx React.DOM */
var TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function () {
    return {items: []}
  },

  handleSubmit: function (e) {
    e.preventDefault();
    // this.items.con
    console.log('fn: handleSubmit');
  },

  render: function () {
    return  (
      React.DOM.div(null, 
        React.DOM.h3(null, "TODO"),
        React.DOM.form( {onSubmit:this.handleSubmit}, 
          React.DOM.input( {type:"text"} ),
          React.DOM.button(null, "submit")
        )
      )
    );
  }
});


React.renderComponent(TodoApp(null ), document.getElementById('example'))
