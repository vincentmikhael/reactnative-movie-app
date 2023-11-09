import axios from 'axios';
import {baseUrl, apiKey} from '../constants';
import {err} from 'react-native-svg/lib/typescript/xml';

const trendingMoviesEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcominggMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error:', error);
    return {};
  }
};

const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
const fetchUpcomingMovies = () => {
  return apiCall(upcominggMoviesEndpoint);
};
const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export {fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies};
