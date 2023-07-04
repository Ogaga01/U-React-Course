import React from "react";

const FinishedScreen = ({ points, maxPossiblePoints, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  const handleRestart = () => {
    dispatch({ type: "restart" });
  };
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button type="button" className="btn btn-ui" onClick={handleRestart}>
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
