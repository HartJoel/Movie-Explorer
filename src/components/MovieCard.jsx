import React from "react";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function favoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    // Show a non-blocking notification instead of alert
    const notification = document.createElement("div");
    notification.textContent = favorite ? "Removed from favorites" : "Added to favorites";
    notification.style.position = "fixed";
    notification.style.bottom = "30px";
    notification.style.right = "30px";
    notification.style.background = "#222";
    notification.style.color = "#fff";
    notification.style.padding = "12px 24px";
    notification.style.borderRadius = "8px";
    notification.style.zIndex = 9999;
    notification.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 1500);
  }

  return (
    <div className="min-w-[270px] flex-1 p-[20px] bg-gray-100 rounded-2xl ">
      <div className="movie-card">
        <div className="movie-poster">
          <img
            className="w-auto h-auto rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay pt-1.5">
            <button
              onClick={favoriteClick}
              className="favorite-btn border w-[100px] h-[40px] rounded-2xl
             hover:bg-black hover:text-white active:bg-black active:text-white"
            >
              Like
            </button>
          </div>
        </div>
        <div className="movie-info p-1.5">
          {/* <h6>{movie.overview}</h6> */}
          <h3 className="text-[20px] font-medium">{movie.title}</h3>
          <h3>views: {movie.popularity}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
