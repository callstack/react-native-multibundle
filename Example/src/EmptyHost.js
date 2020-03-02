import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTestProps } from './utils';

export default function EmptyRootComponent() {
  return (
    <View style={styles.container} {...getTestProps('emptyHostView')}>
      <Text style={styles.text} {...getTestProps('emptyHostText')}>
        Host is empty
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: '#282828',
  },
});
