import React from 'react';
import { View } from 'react-native';
import {getMetricMetaInfo } from './utils/helper';

export default class App extends React.Component {
  render() {
    return (
      <View>
        {getMetricMetaInfo('bike').getIcon()}
      </View>
    );
  }
}
