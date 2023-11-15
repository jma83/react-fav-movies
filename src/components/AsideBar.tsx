import styles from '../styles/AsideBar.module.css';
import useMoviesForm from '../hooks/useMoviesForm.ts';

export const AsideBar = ({ searchMovies }: { searchMovies: Function }) => {
  const { handleOnSubmit, handleInputDebounced, isFirstInput, error } =
    useMoviesForm({
      searchMovies,
    });

  return (
    <aside className={styles.fmAppMainAside}>
      <form onSubmit={handleOnSubmit} aria-label="Búsqueda de peliculas">
        <label htmlFor="search">Buscar por título de pelicula</label>
        <input
          type="text"
          name="search"
          placeholder="El Padrino, el Club de la Lucha..."
          className={styles.fmAppMainAsideInput}
          onInput={handleInputDebounced}
        />
        <button type="submit">Buscar</button>
      </form>
      {error && isFirstInput ? (
        <p className={styles.fmAppMainAsideError}>{error}</p>
      ) : (
        <></>
      )}
    </aside>
  );
};
