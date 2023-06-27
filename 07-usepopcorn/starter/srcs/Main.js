import React, {useState} from "react";
import { tempMovieData, tempWatchedData, average } from "./App";
import Listbox from "./Listbox";
import Watchedbox from "./Watchedbox";

const Main = () => {
  return <main className="main">
  <Listbox/>
  <Watchedbox/>
</main>;
};

export default Main;
