import style from '../styles/Home.module.css';
import { AsideBar } from '../components/AsideBar.tsx';
import { FilmsSection } from '../components/FilmsSection.tsx';

export const LikedMovies = ({ moviesHook }) => {
  const {
    filteredLikedMovies,
    handleUpdateCurrentSearch,
    isLoading,
    currentSearch,
    handleLikeMovie,
  } = moviesHook;

  console.log('filteredLikedMovies', filteredLikedMovies);
  return (
    <main className={style.fmAppMain}>
      <AsideBar searchMovies={handleUpdateCurrentSearch} />
      <FilmsSection
        movies={filteredLikedMovies}
        isLoading={isLoading}
        currentSearch={currentSearch}
        handleLikeMovie={handleLikeMovie}
      />
    </main>
  );
};
