import { MovieSearchData } from '../types';
import { FilmsTitle } from './FilmsTitle.tsx';
import { FilmsList } from './FilmsList.tsx';
import styles from "../styles/FilmsSection.module.css"

// eslint-disable-next-line @typescript-eslint/ban-types
export const FilmsSection = ({ movies, isLoading, currentSearch, handleLikeMovie }: { movies: MovieSearchData[], isLoading: boolean, currentSearch: string, handleLikeMovie: Function }) => {
  return (
    <section className={styles.fmAppFilmsSection}>
      <FilmsTitle currentSearch={currentSearch} moviesSize={movies.length} />
      { isLoading ? <p>Cargando...</p>: <></>}
      <FilmsList isLoading={isLoading} movies={movies} currentSearch={currentSearch} handleLikeMovie={handleLikeMovie} />
    </section>
  );
};
