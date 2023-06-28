import React, { useEffect, useState } from "react";
import { tempMovieData } from "./App";
import Movie from "./Movie";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const MovieList = ({ query, setQuery }) => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const tempQuery = "fast";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=1c7bc41a&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    // isLoading ? <Loader/>:<ul className="list">
    //   {movies?.map((movie) => (
    //     <Movie movie={movie} key={movie.imdbID} />
    //   ))}
    // </ul>

    (isLoading && <Loader />) ||
    (!isLoading && !error && (
      <ul className="list">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    )) ||
    (error && <ErrorMessage message={error} />)
  );
};

export default MovieList;
