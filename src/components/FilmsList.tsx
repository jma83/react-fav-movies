import { MovieSearchData } from '../types';

export const FilmsList = ({ movies, isLoading }: { movies: MovieSearchData[], isLoading: boolean }) => {
  return (
    <section>
      <h2>¡Bienvenido a FavFilms!</h2>
      <h3>Tus peliculas favoritas en un sitio web</h3>
      { isLoading ? <p>Cargando...</p>: <></>}
      {!isLoading && movies.length === 0 ? <p>No hay resultados para los filtros actuales :(</p> : <ul className="movies">
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <img src={movie.poster} alt={movie.title} width={300} height={421} />
              <p><b>{movie.title}</b> · <small>{movie.year}</small></p>
            </li>
          );
        })}
      </ul> }

    </section>
  );
};
