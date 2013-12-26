

/** @jsx React.DOM */
var HelloMessage = React.createClass({displayName: 'HelloMessage',
  render: function () {
    return React.DOM.div(null, "hello world");
  }
});

React.renderComponent(HelloMessage( {name:"John"} ), document.getElementById('example'));

