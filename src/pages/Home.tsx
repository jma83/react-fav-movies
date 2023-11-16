import style from '../styles/Home.module.css';
import { AsideBar } from '../components/AsideBar.tsx';
import { FilmsSection } from '../components/FilmsSection.tsx';

export const Home = ({moviesHook}) => {
  const { movies, handleGetMovies, isLoading, currentSearch, handleLikeMovie } = moviesHook;

  return <main className={style.fmAppMain}>
    <AsideBar searchMovies={handleGetMovies} />
    <FilmsSection movies={movies} isLoading={isLoading} currentSearch={currentSearch} handleLikeMovie={handleLikeMovie} />
  </main>
};
