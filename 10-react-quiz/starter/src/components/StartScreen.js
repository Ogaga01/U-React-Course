import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
    const handleStart = ()=>{
        dispatch({type: 'start'})
    }
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button type="button" className="btn btn-ui" onClick={handleStart}>
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
