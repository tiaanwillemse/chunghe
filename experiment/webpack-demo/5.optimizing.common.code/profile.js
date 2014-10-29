            
/** @jsx React.DOM */

var React = require('react');
var _ = require('underscore');

var ProfileComponent = React.createClass({
  render: function () {
    return <h1>Profile page</h1>
  }
})
console.log('container', document.getElementById('app'))

React.renderComponent(<ProfileComponent />, document.getElementById('app'));
