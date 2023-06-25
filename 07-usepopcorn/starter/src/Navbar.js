import React, {useState} from "react";
import { tempMovieData } from "./App";
import Search from "./Search";
import Logo from "./Logo";

const Navbar = () => {
    const [movies, setMovies] = useState(tempMovieData);
  return (
    <nav className="nav-bar">
      <Logo/>
      <Search/>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
