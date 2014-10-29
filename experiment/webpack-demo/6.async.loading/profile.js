
/** @jsx React.DOM */

var React = require('react');

var ProfileComponent = React.createClass({
  render: function () {
    return <div>hello feed page</div>
  }
});

module.exports = {
  render: function () {
    console.log('render');
    React.renderComponent(<ProfileComponent />, document.getElementById('app'))
  }
}
