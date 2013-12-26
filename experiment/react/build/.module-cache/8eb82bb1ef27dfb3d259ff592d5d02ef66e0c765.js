

/** @jsx React.DOM */
var Timer = React.createClass({displayName: 'Timer',

  getInitialState: function () {
    return {secondsElapsed: 0};
  },

  ticket: function () {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },

  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnMount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    return React.DOM.div(null, 'Seconds Elapsed: ' + this.state.secondsElapsed)
  }
                   
});

React.renderComponent(timer(null ), document.getElementById('example'));
