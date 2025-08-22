/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const MovieContent = createContext();

export const useMovieContext = () => useContext(MovieContent);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavourites] = useState([]);

  //Load favorites from localStorage when app starts
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavourites(JSON.parse(storedFavs));
    }
  }, []);

  //save favorites to local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //add a movie
  const addToFavorites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  //remove
  const removeFromFavorites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  //check if favourite
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContent.Provider value={value}>{children}</MovieContent.Provider>
  );
};
