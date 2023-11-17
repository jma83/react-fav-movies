import { HeaderBar } from './components/HeaderBar.tsx';
import { Home } from './pages/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import { LikedMovies } from './pages/LikedMovies.tsx';
import useMovies from './hooks/useMovies.ts';


function App() {
  const moviesHook = useMovies();
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home moviesHook={moviesHook} />} />
        <Route path="/liked" element={<LikedMovies moviesHook={moviesHook} />} />
        <Route path="*" element={<div style={{width: "100%", padding: "1rem"}}><h1 style={{textAlign: "center"}}>404 - Not Found</h1></div>} />
      </Routes>
    </>
  );
}

export default App;
