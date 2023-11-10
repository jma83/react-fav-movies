import style from './styles/App.module.css';
import { HeaderBar } from './components/HeaderBar.tsx';
import { AsideBar } from './components/AsideBar.tsx';
import { FilmsSection } from './components/FilmsSection.tsx';
import useMovies from './hooks/useMovies.ts';


function App() {
  const { movies, handleGetMovies, isLoading, currentSearch, handleLikeMovie } = useMovies();
  return (
    <>
      <HeaderBar />
      <main className={style.fmAppMain}>
        <AsideBar searchMovies={handleGetMovies} />
        <FilmsSection movies={movies} isLoading={isLoading} currentSearch={currentSearch} handleLikeMovie={handleLikeMovie} />
      </main>
    </>
  );
}

export default App;
