// Karma configuration
// Generated on Wed Oct 16 2013 00:31:55 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '..',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'jasmine-they.js', included: true},
      {pattern: '**/*spec.js', included: true}
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: process.env.CI
  });
};
