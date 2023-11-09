import axios from 'axios';
import {baseUrl, posterImageUrl, apiKey} from '../constants';

const trendingMoviesEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcominggMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;

const image500 = path => (path ? `${posterImageUrl}w500${path}` : null);
const image342 = path => (path ? `${posterImageUrl}w342${path}` : null);
const image185 = path => (path ? `${posterImageUrl}w185${path}` : null);
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

export {
  image185,
  image342,
  image500,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
};
