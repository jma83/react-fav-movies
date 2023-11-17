import { MovieSearchData } from '../types';
import { FilmsTitle } from './films-section/FilmsTitle.tsx';
import { FilmsList } from './films-section/FilmsList.tsx';
import styles from '../styles/FilmsSection.module.css';

export const FilmsSection = ({
  movies,
  isLoading,
  currentSearch,
  handleLikeMovie,
  isLikedFilms = false,
}: {
  movies: MovieSearchData[];
  isLoading: boolean;
  currentSearch: string;
  handleLikeMovie: Function;
  isLikedFilms: boolean;
}) => {
  return (
    <section className={styles.fmAppFilmsSection} aria-label="films-section">
      <FilmsTitle
        currentSearch={currentSearch}
        moviesSize={movies.length}
        isLikedTitle={isLikedFilms}
      />
      {isLoading ? <p>Cargando...</p> : <></>}
      <FilmsList
        isLoading={isLoading}
        movies={movies}
        currentSearch={currentSearch}
        handleLikeMovie={handleLikeMovie}
      />
    </section>
  );
};
