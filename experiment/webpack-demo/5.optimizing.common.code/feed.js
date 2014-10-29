            
/** @jsx React.DOM */

var React = require('react');

var FeedComponent = React.createClass({
  render: function () {
    return <h1>Feed page</h1>
  }
})

React.renderComponent(<FeedComponent />, document.getElementById('app'));
