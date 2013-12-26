

var TodoList = React.createClass({

});



var TodoApp = React.createClass({
  getInitialState: function () {
                   
  },
  render: function () {
    console.log('this.state', this.state);
    return <h1>hello world</h1>;
            
  }
});


React.renderComponent(<TodoApp />, document.getElementById('example'))
