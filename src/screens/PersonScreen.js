import {View, Text, Dimensions, Platform} from 'react-native';
import React from 'react';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : ' mt-3';

export default function PersonScreen() {
  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  );
}
