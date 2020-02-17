import { withPolyfills, makeConfig } from '@haul-bundler/preset-0.60';
import path from 'path';

const transform = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native': path.join(__dirname, 'node_modules/react-native'),
    'react-native-multibundle': path.join(__dirname, '../'),
  };
};

export default makeConfig({
  templates: {
    filename: {
      ios: '[bundleName].ios.bundle',
    },
  },
  features: {
    multiBundle: 2,
  },
  bundles: {
    index: {
      entry: withPolyfills(
        ['./src/dll.js', 'react', 'react-native', 'react-navigation'],
        {
          additionalSetupFiles: ['./src/dll.js'],
        }
      ),
      dll: true,
      type: 'indexed-ram-bundle',
      transform,
    },
    host: {
      entry: './src/host.js',
      dependsOn: ['index'],
      app: true,
      transform,
    },
    app0: {
      entry: './src/app0',
      type: 'basic-bundle',
      dependsOn: ['index'],
      app: true,
    },
    app1: {
      entry: './src/app1',
      type: 'basic-bundle',
      dependsOn: ['index'],
      app: true,
    },
  },
});
