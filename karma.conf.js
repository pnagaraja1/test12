'use strict';

var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    var _config = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
          // './node_modules/zone.js/dist/zone.js',
           {pattern: './karma-shim.js', watched: false},
          { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false },
            {pattern: './src/app/**/*spec.ts', watched: true, included: false},
          './node_modules/zone.js/dist/async-test.js',
          './node_modules/zone.js/dist/sync-test.js',
          './node_modules/zone.js/dist/proxy.js',
          './node_modules/zone.js/dist/long-stack-trace-zone.js',
          './node_modules/zone.js/dist/jasmine-patch.js',
          './node_modules/zone.js/dist/async-test.js',
          './node_modules/zone.js/dist/fake-async-test.js',
        ],

        // list of files to exclude
        exclude: [],

      preprocessors: {
        './karma-shim.js': ['webpack', 'sourcemap'],
        './src/**/!(*.spec).(ts|js)': [
          'sourcemap'
        ]
      },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },

        webpackServer: {
            noInfo: true // please don't spam the console when running in karma!
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['story', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS2'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    };

    config.set(_config);

};
