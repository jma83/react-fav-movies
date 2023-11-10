import { MovieSearchData } from '../types';
import styles from '../styles/FilmsList.module.css';
import { FavMovieIcon } from './FavMovieIcon.tsx';
import { FavMovieFilledIcon } from './FavMovieFilledIcon.tsx';

export const FilmsList = ({
  isLoading,
  movies,
  currentSearch,
  handleLikeMovie,
}: {
  isLoading: boolean;
  movies: MovieSearchData[];
  currentSearch: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleLikeMovie: Function;
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
                <div className={styles.fmListMoviesItemImageContainer}>
                  {movie.isLiked ? (
                    <div
                      style={{
                        position: 'absolute',
                        width: 'fit-content',
                        backgroundColor: 'forestgreen',
                        borderRadius: '25%',
                        padding: '0.15rem 0.5rem',
                        fontSize: '0.825rem',
                      }}
                    >
                      Liked
                    </div>
                  ) : (
                    <></>
                  )}
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    width={300}
                    height={420}
                    className={styles.fmListMoviesItemImage}
                  />
                  <div className={styles.fmListMoviesItemBgCover} />
                  <button
                    type="button"
                    className={styles.fmListMoviesItemCoverContent}
                    onClick={() => handleLikeMovie(movie)}
                  >
                    {movie.isLiked ? (
                      <FavMovieFilledIcon
                        className={styles.fmListMoviesItemCoverContentIcon}
                      />
                    ) : (
                      <FavMovieIcon
                        className={styles.fmListMoviesItemCoverContentIcon}
                      />
                    )}
                  </button>
                </div>
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
