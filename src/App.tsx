import './App.css';
import { HeaderNavbar } from './components/HeaderNavbar.tsx';
import { AsideBar } from './components/AsideBar.tsx';
import { FilmsList } from './components/FilmsList.tsx';
import { useEffect, useId, useState } from 'react';
import moviesData from './data/movies.json';
import { MovieSearchData, MovieSearchRawData, MoviesRawData } from './types';

const useMovies = () => {
  const [movies, setMovies] = useState([] as MovieSearchData[]);

  useEffect(() => {
    handleGetMovies();
  }, [])

  const handleGetMovies = () => {
    const movies: MoviesRawData = moviesData as MoviesRawData;
    const moviesSearched: MovieSearchData[] = movies.Search.map(
      (searchMovie: MovieSearchRawData) => {
        const { Title, imdbID, Poster, Year, Type } = searchMovie;
        return {
          id: crypto.randomUUID(),
          title: Title,
          imdbID: imdbID,
          poster: Poster,
          year: Year,
          type: Type,
        };
      },
    );

    setMovies(moviesSearched);
  };

  return { movies, setMovies, handleGetMovies };
};

function App() {
  const { movies } = useMovies();
  return (
    <>
      <HeaderNavbar />
      <main>
        <AsideBar />
        <FilmsList movies={movies} />
      </main>
    </>
  );
}

export default App;
