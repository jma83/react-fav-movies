import React, { useRef, useState } from 'react';

export const AsideBar = () => {
  const [error, setError] = useState("");
  const isFirstInput = useRef(true);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handle submit");
    e.preventDefault();
    const target = e.currentTarget;

    if (error != null && error.length > 0 || !(target instanceof HTMLFormElement)) {
      return;
    }
    const fields = Object.fromEntries(new window.FormData(target));
    const searchField = fields['search'];
    if (!searchField) {
      setError("Por favor, indica un valor válido para la búsqueda")
      return;
    }
  };

  const handleInput = (event:  React.FormEvent<HTMLInputElement>) => {
    isFirstInput.current = false;
    const input = event.target;
    if (input == null || !(input instanceof HTMLInputElement)) {
      setError("Por favor, indica un valor válido para la búsqueda")
      return;
    }
    const regex = new RegExp("\\w");
    const testResult = regex.test(input.value);
  }

  return (
    <aside>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="search">Buscar por título de pelicula</label>
        <input
          type="text"
          name="search"
          placeholder="El Padrino, el Club de la Lucha..."
          onInput={handleInput}
        />
        <button type="submit">Buscar</button>
      </form>
      { error && isFirstInput ? <p>{error}</p>: <></>}
    </aside>
  );
};
