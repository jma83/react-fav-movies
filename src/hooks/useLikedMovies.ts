import { useMemo, useState } from 'react';
import { MovieSearchData } from '../types';


export default function useLikedMovies() {
  const [isLoadingLiked, setIsLoadingLiked] = useState(false);
  const [currentSearchLiked, setCurrentSearchLiked] = useState('');
  const [likedMovies, setLikedMovies] = useState([] as MovieSearchData[]);


  const likedMoviesIds = useMemo(() => {
    return likedMovies.map(movie => movie.id);
  }, [likedMovies]);

  const filteredLikedMovies = useMemo(() => {
    return currentSearchLiked?.length > 0 ? likedMovies.filter(movie => movie.title.toLowerCase().includes(currentSearchLiked.toLowerCase())) : likedMovies;
  }, [likedMovies, currentSearchLiked]);

  const handleLikeMovie = (movie: MovieSearchData) => {
    let newlikedMovies;

    if (movie.isLiked) {
      newlikedMovies = likedMovies.filter(m => movie.id !== m.id);
    } else {
      newlikedMovies = [...likedMovies, {...movie, isLiked: true}];
    }
    setLikedMovies(newlikedMovies);
  };


  const handleUpdateCurrentSearch = (search: string) => {
    setCurrentSearchLiked(search);
  }

  return {
    isLoadingLiked,
    setIsLoadingLiked,
    currentSearchLiked,
    setCurrentSearchLiked,
    filteredLikedMovies,
    handleLikeMovie,
    handleUpdateCurrentSearch,
    likedMoviesIds
  };
}
