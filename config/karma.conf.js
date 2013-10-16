module.exports = function(config) {
  config.set({

    basePath: '..',

    frameworks: ['jasmine'],

    files: [
      'jasmine-they.js',
      'spec/*.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome', 'PhantomJS'],

    singleRun: true
  });
};
