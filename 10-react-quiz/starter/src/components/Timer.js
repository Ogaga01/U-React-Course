import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const secondss = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:
      {secondss < 10 ? `0${secondss}` : secondss}
    </div>
  );
};

export default Timer;
