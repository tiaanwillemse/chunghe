

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var AppView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    console.log('Backbone view initialized');
    this.render();
  },
  render: function () {
    this.$el.html('hello world');        
  }
  
});

var view = new AppView()
