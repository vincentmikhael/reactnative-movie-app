import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {styles, theme} from '../theme';
import {LinearGradient} from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : ' mt-3';
export default function MovieScreen() {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {}, [item]);
  let movieName = 'Equalizer 3';

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      {/* back button dan poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4' +
            topMargin
          }>
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon
              size={35}
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../../assets/images/moviePoster1.jpeg')}
            //source={{uri: image500(item.poster_path)}}
            style={{
              width,
              height: height * 0.55,
            }}
          />
          <LinearGradient
            colors={[
              'transparent',
              'rgba(23, 23, 23, 0.8)',
              'rgba(23, 23, 23, 1)',
            ]}
            style={{width, height: height * 0.4}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* detil film */}
      <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        {/* status, release, runtime */}
        <Text className="text-neutral-400 text-center text-base font-semibold">
          Released • 2022 • 170m
        </Text>
        {/* genre */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 text-center text-base font-semibold">
            Action •
          </Text>
          <Text className="text-neutral-400 text-center text-base font-semibold">
            Triller •
          </Text>
          <Text className="text-neutral-400 text-center text-base font-semibold">
            Dark
          </Text>
        </View>
        {/* deskripsi */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Robert McCall (Denzel Washington) kembali beraksi, kali ini ia akan
          menghadapi mafia sadis yang mengganggu teman-temannya di Italia
        </Text>
      </View>
      {/* Pemeran */}
      <Cast navigation={navigation} cast={cast} />
      <MovieList title="Film Serupa" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  );
}
