

var TodoList = React.createClass({

});



var TodoApp = React.createClass({
  getInitialState: function () {
                   
  },
  render: function () {
    console.log('this.state', this.state);
            
  }
});


React.renderComponent(<TodoApp />, document.getElementById('example'))
