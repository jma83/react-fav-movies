import { MovieSearchData } from '../types';
import { FilmsTitle } from './FilmsTitle.tsx';
import { FilmsList } from './FilmsList.tsx';
import styles from "../styles/FilmsSection.module.css"

export const FilmsSection = ({ movies, isLoading, currentSearch }: { movies: MovieSearchData[], isLoading: boolean, currentSearch: string }) => {
  return (
    <section className={styles.fmAppFilmsSection}>
      <FilmsTitle currentSearch={currentSearch} moviesSize={movies.length} />
      { isLoading ? <p>Cargando...</p>: <></>}
      <FilmsList isLoading={isLoading} movies={movies} currentSearch={currentSearch} />
    </section>
  );
};
