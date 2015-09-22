/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var bowerDir = 'bower_components/';

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import(bowerDir + 'hello/dist/hello.all.js');

  return app.toTree();
};
