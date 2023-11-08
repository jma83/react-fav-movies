import { MovieSearchData } from '../types';

export const FilmsList = ({ movies }: { movies: MovieSearchData[] }) => {
  return (
    <section>
      <h2>¡Bienvenido a FavFilms!</h2>
      <h3>Tus peliculas favoritas en un sitio web</h3>

      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </section>
  );
};
