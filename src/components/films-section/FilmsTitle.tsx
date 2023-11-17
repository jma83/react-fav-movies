import { useMemo } from 'react';

export const FilmsTitle = ({
  currentSearch,
  moviesSize,
  isLikedTitle,
}: {
  currentSearch: string;
  moviesSize: number;
  isLikedTitle: boolean;
}) => {
  const title = useMemo(() => {
    return !isLikedTitle ? '¡Bienvenido a FavFilms!' : currentSearch?.length > 0 ? `No hay resultados para "${currentSearch}" en tus me gusta`: "Aún no hay peliculas en tus favoritas...";
  }, [isLikedTitle, currentSearch]);

  const subtitle = useMemo(() => {
    return !isLikedTitle ? 'Descubre tus peliculas favoritas' : 'Prueba a añadirlas desde la página de inicio.';
  }, [isLikedTitle]);

  const titleSearch = useMemo(() => {
    return !isLikedTitle ? `Resultados de la búsqueda: "${currentSearch}"` : currentSearch?.length > 0 ? `Resultados para "${currentSearch}" en tus favoritas:`: "Tus favoritas:";
  }, [isLikedTitle, currentSearch]);

  return currentSearch != null && moviesSize > 0 ? (
    <h2>{titleSearch}</h2>
  ) : (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
};
