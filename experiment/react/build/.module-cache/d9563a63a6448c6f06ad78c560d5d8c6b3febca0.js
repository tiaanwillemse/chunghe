

var Timer = React.createClass({

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
    return <div>{'Seconds Elapsed: ' + this.state.secondsElapsed}</div>
  }
                   
});

React.renderComponent(<timer />, document.getElementById('example'))
