import React, { useEffect, useState } from "react";
import { AppRegistry, View, Text } from "react-native";
import Multibundle from "react-native-multibundle";

AppRegistry.registerComponent("Example", () => () => {
  const [RootComponent, setRootComponent] = useState(() => () => (
    <View>
      <Text>initial</Text>
    </View>
  ));

  useEffect(() => {
    (async () => {
      await Multibundle.loadBundle("host");

      setRootComponent(() => Multibundle.getBundleExport("host"));
    })();
  }, []);

  return <RootComponent />;
});
