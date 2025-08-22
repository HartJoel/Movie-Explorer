import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { getPopularMovies, searchMovies } from "../service/movieApi";
import MovieCard from "../components/MovieCard";
import { ClipLoader } from "react-spinners";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  
  // Fetch popular movies (default view)
  const {
    data: popularMovies,
    isLoading: isPopularLoading,
    isError: isPopularError,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    enabled: !submittedQuery,
  });

  // Fetch search results when submitted
  const {
    data: searchedMovies,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useQuery({
    queryKey: ["searchMovies", submittedQuery],
    queryFn: () => searchMovies(submittedQuery),
    enabled: !!submittedQuery, // only run if there is a search term
  });

  // Handle form submit
  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery.trim());
  };

  // Show loading states

  if (isPopularLoading || isSearchLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <ClipLoader color="#36d7b7" size={80} />
      </div>
    );
  }

  // Show error states
  if (isPopularError || isSearchError) return <p>Failed to fetch movies.</p>;

  // Decide which data to render
  const movies = submittedQuery ? searchedMovies : popularMovies;

  return (
    <>
      <div className="">
        <form onSubmit={handleSearch} className="search-form flex p-4">
          <input
            type="text"
            placeholder="Search for movies...."
            className="search-input border rounded-l-2xl p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="search-button border border-l-white w-[100px] h-auto rounded-r-2xl  hover:bg-black hover:text-white active:bg-black active:text-white"
          >
            Search
          </button>
        </form>
      </div>
      <div className="p-6 flex flex-wrap gap-[30px]">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
