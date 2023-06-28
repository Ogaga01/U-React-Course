import React, {useState} from "react";
import { tempMovieData, tempWatchedData, average } from "./App";
import Listbox from "./Listbox";
import Watchedbox from "./Watchedbox";

const Main = ({query, setQuery}) => {
  return <main className="main">
  <Listbox query={query} setQuery={setQuery} />
  <Watchedbox/>
</main>;
};

export default Main;
