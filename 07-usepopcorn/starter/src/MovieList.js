import React, { useEffect, useState } from "react";
import { tempMovieData } from "./App";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState();

  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?apikey=1c7bc41a&s=avatar`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
  }, [])

  

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
