import axiosInstance from "./api";

export const getPopularMovies = async () => {
  const response = await axiosInstance.get("/movie/popular");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axiosInstance.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};
