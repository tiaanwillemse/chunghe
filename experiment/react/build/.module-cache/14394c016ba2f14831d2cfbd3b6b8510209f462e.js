
/** @jsx React.DOM */
var TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function () {
                     return {hello: 'world'}
                   
  },
  render: function () {
    console.log('this.state', this.state);
    return React.DOM.h1(null, "hello world");
  }
});


React.renderComponent(TodoApp(null ), document.getElementById('example'))
