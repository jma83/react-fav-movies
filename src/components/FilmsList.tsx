import { MovieSearchData } from '../types';
import styles from "../styles/FilmsList.module.css"

export const FilmsList = ({
  isLoading,
  movies,
  currentSearch,
}: {
  isLoading: boolean,
  movies: MovieSearchData[],
  currentSearch: string
}) => {
  return (
    <>
      {!isLoading && movies.length === 0 && currentSearch.length > 0 ? (
        <p>No hay resultados para los filtros actuales :(</p>
      ) : (
        <ul className={styles.fmListMovies}>
          {movies.map(movie => {
            return (
              <li key={movie.id} className={styles.fmListMoviesItem}>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  width={300}
                  height={420}
                  className={styles.fmListMoviesItemImage}
                />
                <p className={styles.fmListMoviesItemParagraph}>
                  <b className={styles.fmListMoviesItemTitle}>{movie.title}</b>
                  <small>{movie.year}</small>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
