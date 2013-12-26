
/** @jsx React.DOM */

var TodoList = React.createClass({displayName: 'TodoList',

});



var TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function () {
                   
  },
  render: function () {
    console.log('this.state', this.state);
    return React.DOM.h1(null, "hello world");
            
  }
});


React.renderComponent(TodoApp(null ), document.getElementById('example'))
