
/** @jsx React.DOM */

React = require('react');

HelloComponent = React.createClass({
  render: function () {
    return <h1>hello world</h1>        
  }
});

React.renderComponent(<HelloComponent />, document.getElementById('app'));


