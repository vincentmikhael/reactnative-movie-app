import {View, Text, StatusBar, Platform, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {styles} from '../theme';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';

const ios = Platform.OS === 'ios';
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* daftar film trending dengan carousel */}
        <TrendingMovies data={trending} />

        {/* daftar film akan tayang */}
        <MovieList title="Akan Tayang" data={upcoming} />

        {/* daftar film rating tertinggi */}
        <MovieList title="Rating Teratas" data={topRated} />
      </ScrollView>
    </View>
  );
}
