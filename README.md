# react-native-multibundle

This native modules allows you to use multiple bundles in your React Native app. It can be used directly as a standalone native module or as a reference for implementing your custom native module, septic yo your needs.

This project is still __work in progress__:

- [ ] https://github.com/facebook/react-native/pull/27844
- [ ] https://github.com/facebook/react-native/pull/27855
- [ ] https://github.com/facebook/react-native/pull/27875
- [ ] Refinements & cleanup

Apart from the changes in the RN (see React Native PRs above), you will need a bundles that will create a valid bundles that can work together and:

1. Each non-initial bundle is available under `global[bundleName]` or `this[bundleName]` (when this refers to top-level global variable), for example bundle `app0` should be available under `global['app0']` or `this['app0']`.
2. Each non-initial bundle's entry point must be exported as `default` export.
