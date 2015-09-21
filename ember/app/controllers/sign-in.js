import Ember from 'ember';
// import Hello from 'ember-cli-hello/app/initializers/index'

export default Ember.Controller.extend({

  actions: {
    login: function() {
      hello('joinme').login().then(function(response) {
        debugger;
      }, function(e) {
        debugger;
      })
    },
  },

});
