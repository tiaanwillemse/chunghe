
Backbone = require('backbone');

var Router = Backbone.Router.extend({

  routes: {
    'profile': 'profile',
  },

  profile: function (id) {
    console.log('profile');
    require.ensure([], function () {
      require('./profile').render();
    });
  }
});


router = new Router()
Backbone.history.start();
