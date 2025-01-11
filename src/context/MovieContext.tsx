import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type MovieContextType = {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
};

export const MovieContext = createContext({} as MovieContextType);

export const useMovieContext = () => useContext(MovieContext);

type MovieProviderProps = {
  children: React.ReactNode;
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", []);

  const addToFavorites = (movie: Movie) => {
    if (!isFavorite(movie.id)) {
      setFavorites((previousFavorites) => [...previousFavorites, movie]);
    }
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((movie) => movie.id !== movieId),
    );
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{ addToFavorites, removeFromFavorites, isFavorite, favorites }}
    >
      {children}
    </MovieContext.Provider>
  );
};
