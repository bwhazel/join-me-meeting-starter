# Joinme Meeting Starter

A simple chrome extension to start an 'ad-hoc' meeting with join.me

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* A working Join.me api key for v1 of the basic api(ability to start meetings)
* Redirect URI set to the url of the extension. (If testing with a local browser window it should be set to http://localhost:4200)

## Installation

* `git clone <repository-url>` this repository
* `cd` into the `ember/` directory
* `npm install`
* `bower install`

## Running / Development

* in `ember/config/environment.js` replace the 'ENTER-API-KEY-HERE' string with your given api key.
* run `ember server` in the command line
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Building

* `ember build --production` (production)
* Change the logos in the manifest.json file to the local join.me .png files inside the `dist/` folder.
* Navigate to the `chrome://extensions/` url inside the chrome browser window
* click the `load unpacked extension` button and navigate to the `dist/` directory of the ember application, load the application from this directory.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
