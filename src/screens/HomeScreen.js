import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="-mb-2">
        <Text>HomeScreen</Text>
      </SafeAreaView>
    </View>
  );
}
