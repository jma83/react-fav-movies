import style from '../styles/Home.module.css';
import { AsideBar } from '../components/AsideBar.tsx';
import { FilmsSection } from '../components/FilmsSection.tsx';

// @ts-ignore
export const Home = ({ moviesHook }) => {
  const { movies, handleGetMovies, isLoading, currentSearch, likedMoviesHook } =
    moviesHook;
  const { handleLikeMovie } = likedMoviesHook;
  return (
    <main className={style.fmAppMain}>
      <AsideBar searchMovies={handleGetMovies} currentSearch={currentSearch} />
      <FilmsSection
        movies={movies}
        isLoading={isLoading}
        currentSearch={currentSearch}
        handleLikeMovie={handleLikeMovie}
        isLikedFilms={false}
      />
    </main>
  );
};
