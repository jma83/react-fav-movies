import styles from '../../styles/AsideBarForm.module.css';
import useMoviesForm from '../../hooks/useMoviesForm.ts';

export const AsideBarForm = ({
  searchMovies,
  currentSearch,
}: {
  searchMovies: Function;
  currentSearch: string;
}) => {
  const {
    handleOnSubmit,
    handleInputDebounced,
    handleResetSearch,
    isFirstInput,
    input,
    error,
  } = useMoviesForm({
    searchMovies,
    currentSearch,
  });

  return (
    <form onSubmit={handleOnSubmit} aria-label="Búsqueda de peliculas">
      <label htmlFor="search">Buscar por título de pelicula:</label>
      <input
        type="text"
        name="search"
        placeholder="Star Wars, Avengers..."
        className={styles.fmAppMainAsideInput}
        value={input}
        onChange={handleInputDebounced}
      />
      <button type="submit">Buscar</button>
      <button type="button" onClick={handleResetSearch}>
        Limpiar filtros
      </button>

      {error && isFirstInput ? (
        <p className={styles.fmAppMainAsideError}>{error}</p>
      ) : (
        <></>
      )}
    </form>
  );
};
