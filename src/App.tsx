import './App.css';
import { HeaderNavbar } from './components/HeaderNavbar.tsx';
import { AsideBar } from './components/AsideBar.tsx';
import { FilmsList } from './components/FilmsList.tsx';
import { useState } from 'react';
import moviesData from './data/movies.json';
import { MovieSearchData, MovieSearchRawData, MoviesRawData } from './types';

const isFake = false;

const useMovies = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([] as MovieSearchData[]);
  const [isLoading, setIsLoading] = useState(false);

  const handleParseMovie = (movieSearch: MovieSearchRawData) => {
    const { Title, imdbID, Poster, Year, Type } = movieSearch;
    return {
      id: crypto.randomUUID(),
      title: Title,
      imdbID: imdbID,
      poster: Poster,
      year: Year,
      type: Type,
    };
  };

  const fetchMoviesFromSource = async (search: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
    );
    const movies: MoviesRawData = await response.json();
    if (movies.Response === 'False') {
      throw new Error(movies.Error!);
    }
    console.log('movies', movies);
    return movies;
  };

  const handleGetMovies = async (search: string) => {
    try {
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
  };

  return { movies, setMovies, handleGetMovies, isLoading, setIsLoading };
};

function App() {
  const { movies, handleGetMovies, isLoading } = useMovies();
  return (
    <>
      <HeaderNavbar />
      <main>
        <AsideBar searchMovies={handleGetMovies} />
        <FilmsList movies={movies} isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
