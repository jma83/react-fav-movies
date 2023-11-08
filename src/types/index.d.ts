export interface MoviesRawData {
  Search:       MovieSearchRawData[];
  totalResults: string;
  Response:     string;
}

export interface MovieSearchRawData {
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   Type;
  Poster: string;
}

export interface MovieSearchData {
  id: string;
  title:  string;
  year:   string;
  imdbID: string;
  type:   Type;
  poster: string;
}

export enum Type {
  Movie = "movie",
}
