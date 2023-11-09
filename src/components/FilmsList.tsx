import { MovieSearchData } from '../types';

export const FilmsList = ({
  isLoading,
  movies,
  currentSearch,
}: {
  isLoading: boolean,
  movies: MovieSearchData[],
  currentSearch: string
}) => {
  return (
    <>
      {!isLoading && movies.length === 0 && currentSearch.length > 0 ? (
        <p>No hay resultados para los filtros actuales :(</p>
      ) : (
        <ul className="movies">
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  width={300}
                  height={420}
                />
                <p>
                  <b>{movie.title}</b>
                  <small>{movie.year}</small>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
