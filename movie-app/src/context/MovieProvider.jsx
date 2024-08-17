import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieSearch, setMovieSearch] = useState([]);
  const [slug, setSlug] = useState("");
  const [error, setError] = useState(null);

  const handleDetail = async (id) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMovieDetail(data);
      setSlug(data.original_title);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
      setError("Failed to fetch movie details.");
    }
  };

  const handleSearch = async (searchValue) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi-US&page=1`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMovieSearch(data.results || []);
    } catch (error) {
      console.error("Failed to search movies:", error);
      setError("Failed to search movies.");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movieDetail,
        setMovieDetail,
        handleDetail,
        movieSearch,
        setMovieSearch,
        handleSearch,
        slug,
        setSlug,
        error,
        setError,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
