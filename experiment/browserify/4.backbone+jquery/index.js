


var Backbone = require('backbone');
var $ = require('jquery/dist/jquery')(window);
Backbone.$ = $;

var AppView = Backbone.View.extend({
  initialize: function () {
    console.log('Backbone view initialized');
  }
});

var view = new AppView()
