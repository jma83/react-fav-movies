import './App.css';
import { HeaderNavbar } from './components/HeaderNavbar.tsx';
import { AsideBar } from './components/AsideBar.tsx';
import { FilmsSection } from './components/FilmsSection.tsx';
import useMovies from './hooks/useMovies.ts';


function App() {
  const { movies, handleGetMovies, isLoading, currentSearch } = useMovies();
  return (
    <>
      <HeaderNavbar />
      <main>
        <AsideBar searchMovies={handleGetMovies} />
        <FilmsSection movies={movies} isLoading={isLoading} currentSearch={currentSearch} />
      </main>
    </>
  );
}

export default App;
