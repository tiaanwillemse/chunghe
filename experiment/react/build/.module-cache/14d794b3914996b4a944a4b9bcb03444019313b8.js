

var HelloMessage = React.createClass({
  render: function () {
    return <div>{'hello ' + this.props.name}</div>        
  }
});

React.renderComponent(<HelloMessage name="John" />, document.getElementById('example'));

