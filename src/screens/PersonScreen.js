import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme';
import MovieList from '../components/MovieList';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : ' my-3';

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView
        className={
          'z-20 w-full flex-row justify-between items-center px-4' +
          verticalMargin
        }>
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
          <HeartIcon size={35} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>
      {/* person details */}
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1,
          }}>
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
            <Image
              source={require('../../assets/images/castImage1.jpeg')}
              style={{height: height * 0.43, width: width * 0.74}}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            London, United Kingdom
          </Text>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1964-09-02</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">64.23</Text>
            </View>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Denzel Hayes Washington, Jr. (born December 28, 1954) is an American
            actor, screenwriter, director and film producer. He first rose to
            prominence when he joined the cast of the medical drama St.
            Elsewhere, playing Dr. Philip Chandler for six years. He has
            received much critical acclaim for his work in film since the 1990s,
            including for his portrayals of real-life figures, such as Steve
            Biko, Malcolm X, Rubin ‘Hurricane’ Carter, Melvin B. Tolson, Frank
            Lucas, and Herman Boone. Washington has received two Academy Awards,
            two Golden Globe awards, and a Tony Award. He is notable for winning
            the Best Supporting Actor Oscar for his part in Glory in 1989, and
            the Academy Award for Best Actor in 2001 for his role in the film
            Training Day.
          </Text>
        </View>
        {/* daftar film */}
        <MovieList title={'Riwayat Perfilman'} data={personMovies} />
      </View>
    </ScrollView>
  );
}
