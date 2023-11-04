import {View, Text, StatusBar, Platform} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {styles} from '../theme';

const ios = Platform.OS === 'ios';
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar */}
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>K</Text>
            atalog <Text style={styles.text}>F</Text>ilm
          </Text>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </View>
      </SafeAreaView>
    </View>
  );
}
