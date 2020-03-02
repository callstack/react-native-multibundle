import React from 'react';
import { Text } from 'react-native';
import { getTestProps } from './utils';

export default function Async() {
  return <Text {...getTestProps('asyncText')}>Async</Text>;
}
