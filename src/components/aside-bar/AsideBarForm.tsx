import styles from '../../styles/AsideBarForm.module.css';
import useMoviesForm from '../../hooks/useMoviesForm.ts';

export const AsideBarForm = ({ searchMovies }: { searchMovies: Function }) => {
  const { handleOnSubmit, handleInputDebounced, isFirstInput, error } =
    useMoviesForm({
      searchMovies,
    });

  return (
    <form onSubmit={handleOnSubmit} aria-label="Búsqueda de peliculas">
      <label htmlFor="search">Buscar por título de pelicula:</label>
      <input
        type="text"
        name="search"
        placeholder="Star Wars, Avengers..."
        className={styles.fmAppMainAsideInput}
        onInput={handleInputDebounced}
      />
      <button type="submit">Buscar</button>

      {error && isFirstInput ? (
        <p className={styles.fmAppMainAsideError}>{error}</p>
      ) : (
        <></>
      )}
    </form>
  );
};
