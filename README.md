# react-native-multibundle

This native modules allows you to use multiple bundles in your React Native app. It can be used directly as a standalone native module or as a reference for implementing your custom native module, septic to your needs.

This project is still __work in progress__:

- [ ] https://github.com/facebook/react-native/pull/27844
- [ ] https://github.com/facebook/react-native/pull/27855
- [ ] https://github.com/facebook/react-native/pull/27875
- [ ] Refinements & cleanup

Apart from the changes in the RN (see React Native PRs above), you will need a bundles that will create a valid bundles that can work together and:

1. Each non-initial bundle is available under `global[bundleName]` or `this[bundleName]` (when this refers to top-level global variable), for example bundle `app0` should be available under `global['app0']` or `this['app0']`.
2. Each non-initial bundle's entry point must be exported as `default` export.

## Running E2E tests

E2E are based on Appium/WDIO and are located in `Example/e2e` directory.

### Prerequisites

- iOS: `carthage` (`brew install carthage`) and installed Pods (`cd ios && pod install`)
- Android: running Android Emulator

To build the Example app and run E2E tests run:

- `yarn e2e:ios`
- `yarn e2e:android`

To only run E2E without building an app (assuming it was built before):

- `yarn e2e:run-ios`
- `yarn e2e:run-android`

__Please make sure you have Android Emulator already running.__

If iOS E2E test is crashing with message _unable to create session_, please make sure the following commands works:

```bash
cd Example/node_modules/appium-webdriveragent && \
carthage bootstrap --platform iOS,tvOS
```

If it fails, you need to tweak build/derived data paths in Xcode preferences:

Go to _XCode_ -> _Preferences_ -> _Locations_ and set `Derived Data` to `Default`, then click _Advanced_ and select `Unique`.