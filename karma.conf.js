// Karma configuration
// Generated on Tue Oct 20 2015 22:02:49 GMT+0200 (Romance Summer Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'vendor/lodash/lodash.js',
      'vendor/angular/angular.js',
      'vendor/angular/angular-route.js',
      'vendor/angular/angular-mocks.js',
      'vendor/sinon/sinon-1.17.1.js',
      'app/*.module.js',
      'app/core/*.module.js',
      'app/core/*.config.js',
      'app/core/*.constants.js',
      'app/common/*.module.js',
      'app/common/*.filter.js',
      'app/layout/*.module.js',
      'app/layout/*.controller.js',
      'app/data/*.module.js',
      'app/data/*.constants.js',
      'app/data/*.service.js',
      'app/widgets/*.module.js',
      'app/widgets/*.directive.js',
      'app/home/*.module.js',
      'app/home/*.routes.js',
      'app/home/*.controller.js',
      'app/animals/*.module.js',
      'app/animals/*.routes.js',
      'app/animals/*.controller.js',
      'app/contact/*.module.js',
      'app/contact/*.routes.js',
      'app/contact/*.controller.js',
      'app/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
