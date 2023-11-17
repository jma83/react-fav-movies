import { useCallback, useMemo, useState } from 'react';
import { MovieSearchData, MovieSearchRawData, MoviesRawData } from '../types';
import useLikedMovies from './useLikedMovies.ts';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function useMovies() {
  const [movies, setMovies] = useState([] as MovieSearchData[]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSearch, setCurrentSearch] = useState('');
  const likedMoviesHook = useLikedMovies();
  const { likedMoviesIds } = likedMoviesHook;

  const currentMovies = useMemo(() => {
    return movies.map(movie => ({
      ...movie,
      isLiked: likedMoviesIds.includes(movie.id),
    }));
  }, [likedMoviesIds, movies]);

  const handleParseMovie = (
    movieSearch: MovieSearchRawData,
  ): MovieSearchData => {
    const { Title, imdbID, Poster, Year, Type } = movieSearch;
    return {
      id: imdbID,
      title: Title,
      poster: Poster,
      year: Year,
      type: Type,
      isLiked: likedMoviesIds.includes(imdbID),
    };
  };

  const fetchMoviesFromSource = async (search: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`,
    );
    const movies: MoviesRawData = await response.json();
    console.log("movies", movies.Search.length);
    if (movies.Response === 'False') {
      throw new Error(movies.Error!);
    }
    return movies;
  };

  const handleGetMovies = useCallback(
    async (search: string) => {
      if (currentSearch === search && search.length < 3) {
        return;
      }
      try {
        setCurrentSearch(search);
        setIsLoading(true);
        const movies = await fetchMoviesFromSource(search);
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
    },
    [currentSearch],
  );

  console.log('render', movies.length);

  return {
    movies: currentMovies,
    setMovies,
    handleGetMovies,
    isLoading,
    setIsLoading,
    currentSearch,
    setCurrentSearch,
    fetchMoviesFromSource,
    likedMoviesHook
  };
}
