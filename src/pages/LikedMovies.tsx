import style from '../styles/Home.module.css';
import { AsideBar } from '../components/AsideBar.tsx';
import { FilmsSection } from '../components/FilmsSection.tsx';

// @ts-ignore
export const LikedMovies = ({ moviesHook }) => {
  const { likedMoviesHook } = moviesHook;
  const {
    handleUpdateCurrentSearch,
    filteredLikedMovies,
    isLoadingLiked,
    currentSearchLiked,
    handleLikeMovie,
  } = likedMoviesHook;
  return (
    <main className={style.fmAppMain}>
      <AsideBar
        searchMovies={handleUpdateCurrentSearch}
        currentSearch={currentSearchLiked}
      />
      <FilmsSection
        movies={filteredLikedMovies}
        isLoading={isLoadingLiked}
        currentSearch={currentSearchLiked}
        handleLikeMovie={handleLikeMovie}
        isLikedFilms={true}
      />
    </main>
  );
};
