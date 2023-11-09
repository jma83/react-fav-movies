import { MovieSearchData } from '../types';
import { FilmsTitle } from './FilmsTitle.tsx';
import { FilmsList } from './FilmsList.tsx';

export const FilmsSection = ({ movies, isLoading, currentSearch }: { movies: MovieSearchData[], isLoading: boolean, currentSearch: string }) => {
  return (
    <section>
      <FilmsTitle currentSearch={currentSearch} moviesSize={movies.length} />
      { isLoading ? <p>Cargando...</p>: <></>}
      <FilmsList isLoading={isLoading} movies={movies} currentSearch={currentSearch} />
    </section>
  );
};
