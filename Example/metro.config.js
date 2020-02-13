/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const escape = require('escape-string-regexp');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  watchFolders: [path.join(__dirname, '../')],
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          if (name === 'react-native-multibundle') {
            return path.join(__dirname, '../');
          }

          return path.join(__dirname, 'node_modules', name);
        },
      },
    ),
    blacklistRE: blacklist([
      new RegExp(`^${escape(path.join(__dirname, '../node_modules'))}\\/.*$`),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
