import styles from '../../styles/FilmsListItem.module.css';
import { FavMovieFilledIcon } from './icons/FavMovieFilledIcon.tsx';
import { FavMovieIcon } from './icons/FavMovieIcon.tsx';
import { MovieSearchData } from '../../types';

export const FilmsListItem = ({
  movie,
  handleLikeMovie,
  key
}: {
  movie: MovieSearchData;
  handleLikeMovie: Function;
  key: string;
}) => {
  return (
    <li key={key} className={styles.fmListMoviesItem}>
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
            <FavMovieIcon className={styles.fmListMoviesItemCoverContentIcon} />
          )}
        </button>
      </div>
      <p className={styles.fmListMoviesItemParagraph}>
        <b className={styles.fmListMoviesItemTitle}>{movie.title}</b>
        <small>{movie.year}</small>
      </p>
    </li>
  );
};
