import Ember from 'ember';

export default Ember.Controller.extend({

  signedIn: false,

  actions: {
    login: function() {
      const _this = this;

      // Use hello.js Join.me adaptor to authenticate
      hello.login('joinme', {'scope' : 'start_meeting'}).then(function() {
        return _this.set('signedIn', true);
      }, function() {
        _this.set('error', 'Theres been an issue signing into joinme');
      });
    },

    logout: function(){
      const _this = this;

      hello.logout('joinme').then(function() {
        return _this.set('signedIn', false);
      }, function() {
        _this.set('error', 'Theres been an issue logging out of joinme');
      });
    },

    startMeeting: function(){
      const token = hello.getAuthResponse('joinme').access_token

      Ember.$.ajax({
        beforeSend: function (request){
          request.setRequestHeader("Authorization", 'Bearer ' + hello.getAuthResponse('joinme').access_token);
          request.setRequestHeader("Content-Type", 'application/json');
        },
        url: "https://api.join.me/v1/meetings/start",
        type: "POST",
        data: { "startWithPersonalUrl" : true }
      }).then(function(response) {
          // At this point, open new window with join me response url - API not recieving the response correctly
          return response;
      });
    },
  }

});
