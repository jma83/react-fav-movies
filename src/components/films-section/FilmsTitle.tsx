export const FilmsTitle = ({
  currentSearch,
  moviesSize,
}: {
  currentSearch: string;
  moviesSize: number;
}) => {
  return currentSearch != null && moviesSize > 0 ? (
    <h2>
      Resultados de la búsqueda: "{currentSearch}"
    </h2>
  ) : (
    <>
      <h2>¡Bienvenido a FavFilms!</h2>
      <h3>Tus peliculas favoritas en un sitio web</h3>
    </>
  );
};
