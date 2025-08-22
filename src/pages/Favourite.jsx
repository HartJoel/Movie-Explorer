import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourite = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <>
        <h2 className="text-2xl p-2">Your Favorites</h2>
        <div className="p-6 flex flex-wrap gap-[30px]">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </>
    );
  }
};

export default Favourite;
