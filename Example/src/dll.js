import React, { useEffect, useState } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Multibundle from 'react-native-multibundle';

AppRegistry.registerComponent(
  'Example',
  () => () => {
    const [RootComponent, setRootComponent] = useState(() => () => (
      <View>
        <Text>initial</Text>
      </View>
    ));

    useEffect(() => {
      (async () => {
        await Multibundle.loadBundle('host');

        console.log(
          Multibundle.isBundleLoaded('host'),
          Object.keys(global),
          process.env.HAUL_BUNDLES
        );
        setRootComponent(() => Multibundle.getBundleExport('host'));
        // console.log(Multibundle.getBundleExport('host'));
      })();
    }, []);

    console.log(RootComponent);

    return <RootComponent />;
  }
);
