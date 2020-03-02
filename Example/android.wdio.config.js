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
      platformName: 'Android',
      deviceName: 'Android Emulator',
      app: path.resolve(
        __dirname,
        './android/app/build/outputs/apk/debug/app-debug.apk'
      ),
      automationName: 'UiAutomator2',
    },
  ],
  logLevel: 'info',
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
