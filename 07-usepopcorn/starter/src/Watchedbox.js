import { useState } from "react";
import { tempWatchedData,  } from "./App";
import WatchedSumarry from "./WatchedSumarry";
import WatchedMovieList from "./WatchedMovieList";

const Watchedbox = () => {
    const [isOpen2, setIsOpen2] = useState(true);
    const [watched, setWatched] = useState(tempWatchedData);


  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          
            <WatchedSumarry/>
          <WatchedMovieList watched={watched}/>
        </>
      )}
    </div>
  );
};

export default Watchedbox;
