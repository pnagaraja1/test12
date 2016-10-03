Error.stackTraceLimit = Infinity;

require('core-js/client/shim');
require('reflect-metadata');

require('ts-helpers');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

/*
 Ok, this is kinda crazy. We can use the the context method on
 require that webpack created in order to tell webpack
 what files we actually want to require or import.
 Below, context will be a function/object with file names as keys.
 using that regex we are saying look in client/app and find
 any file that ends with '.spec.ts' and get its path. By passing in true
 we say do this recursively
 */
var appContext = require.context('./src', true, /(spec\.ts$)/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
