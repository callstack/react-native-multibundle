const path = require('path');

exports.config = {
  runner: 'local',
  port: 4723,
  services: ['appium'],
  specs: ['./e2e/**/*.test.js'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      platformName: 'iOS',
      platformVersion: '13.2',
      deviceName: 'iPhone 11',
      app: path.join(
        __dirname,
        './ios/build/Example.xcarchive/Products/Applications/Example.app'
      ),
      automationName: 'XCUITest',
    },
  ],
  logLevel: 'debug',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler: function() {
      // NOOP
    },
  },
};
