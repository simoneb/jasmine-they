module.exports = function(config) {
  config.set({

    basePath: '..',

    frameworks: ['jasmine'],

    files: [
      'jasmine-they.js',
      'spec/*.js'
    ],

    reporters: ['progress'],

    sauceLabs: {
      username: 'simoneb',
      accessKey: process.env.SAUCE_ACCESS_KEY,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER,
      startConnect: true,
      testName: 'jasmine-they'
    },

    customLaunchers: {
      the_browser: {
        base: 'SauceLabs',
        browserName: process.env.JASMINE_BROWSER,
        platform: process.env.SAUCE_OS,
        version: process.env.SAUCE_BROWSER_VERSION
      }
    },

    browsers: ['the_browser'],

    port: 9876,

    colors: true,

    singleRun: true
  });
};
