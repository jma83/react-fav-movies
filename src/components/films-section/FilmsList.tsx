import { MovieSearchData } from '../../types';
import styles from '../../styles/FilmsList.module.css';
import { FilmsListItem } from './FilmsListItem.tsx';

export const FilmsList = ({
  isLoading,
  movies,
  currentSearch,
  handleLikeMovie,
}: {
  isLoading: boolean;
  movies: MovieSearchData[];
  currentSearch: string;
  handleLikeMovie: Function;
}) => {
  return (
    <>
      {!isLoading && movies.length === 0 && currentSearch.length > 0 ? (
        <p>No hay resultados para los filtros actuales :(</p>
      ) : (
        <ul className={styles.fmListMovies}>
          {movies.map(movie => (
            <FilmsListItem movie={movie} handleLikeMovie={handleLikeMovie} />
          ))}
        </ul>
      )}
    </>
  );
};
