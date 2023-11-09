import { useCallback, useState } from 'react';
import moviesData from '../data/movies.json';
import { MovieSearchData, MovieSearchRawData, MoviesRawData } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;
const isFake = false;

export default function useMovies() {
  const [movies, setMovies] = useState([] as MovieSearchData[]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");
  // const [likedMovies, setLikedMovies] = useState([] as string[]);


  const handleParseMovie = (movieSearch: MovieSearchRawData) => {
    const { Title, imdbID, Poster, Year, Type } = movieSearch;
    return {
      id: imdbID,
      title: Title,
      poster: Poster,
      year: Year,
      type: Type,
    };
  };

  const fetchMoviesFromSource = async (search: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`,
    );
    const movies: MoviesRawData = await response.json();
    if (movies.Response === 'False') {
      throw new Error(movies.Error!);
    }
    console.log('movies', movies);
    return movies;
  };

  const handleGetMovies = useCallback(async (search: string) => {
    if (currentSearch === search) {
      return;
    }
    try {
      setCurrentSearch(search);
      setIsLoading(true);
      const movies = isFake ? moviesData as MoviesRawData : await fetchMoviesFromSource(search);
      const moviesSearched: MovieSearchData[] = movies.Search.map(
        (searchMovie: MovieSearchRawData) => handleParseMovie(searchMovie),
      );
      setMovies(moviesSearched);
    } catch (e) {
      console.log('Errorazo', e);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentSearch]);

  console.log("render", movies.length);

  return { movies, setMovies, handleGetMovies, isLoading, setIsLoading, currentSearch, setCurrentSearch };
}