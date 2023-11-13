import React, { useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styles from "../styles/AsideBar.module.css"

// eslint-disable-next-line @typescript-eslint/ban-types
export const AsideBar = ({ searchMovies }: { searchMovies: Function }) => {
  const [error, setError] = useState('');
  const isFirstInput = useRef(true);

  const isSearchValueValid = (inputValue: string) => {
    if (inputValue.length <= 0) {
      setError('El texto de búsqueda no puede estar vacio');
      return false;
    }

    if (inputValue.length < 3) {
      setError('El texto debe tener al menos 3 caracteres');
      return false;
    }

    const regex = new RegExp(/^[a-zA-Z0-9',.\s]{3,30}$/gm);
    const testResult = regex.test(inputValue);
    if (!testResult) {
      setError(
        'El texto de búsqueda debe incluir entre 3 y 30 caracteres alfanumericos',
      );
      return false;
    }
    return true;
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handle submit');
    e.preventDefault();
    const target = e.currentTarget;

    if (
      (error != null && error.length > 0) ||
      !(target instanceof HTMLFormElement)
    ) {
      return;
    }
    const fields = Object.fromEntries(new window.FormData(target));
    const searchField = fields['search'];
    if (!searchField || (searchField instanceof File)) {
      setError('Por favor, indica un texto válido para la búsqueda');
      return;
    }

    if (!isSearchValueValid(searchField)) {
      return;
    }

    searchMovies(searchField);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setError('');
    isFirstInput.current = false;
    const input = event.target;
    if (input == null || !(input instanceof HTMLInputElement)) {
      setError('Por favor, indica un texto válido para la búsqueda');
      return;
    }
    const inputValue = input.value;

    if (!isSearchValueValid(inputValue)) {
      return;
    }
    searchMovies(inputValue);

  };

  const handleInputDebounced = useDebouncedCallback(handleInput, 400);


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
      {error && isFirstInput ? <p className={styles.fmAppMainAsideError}>{error}</p> : <></>}
    </aside>
  );
};
