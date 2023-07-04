import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;
  const handleDispatch = () => {
    dispatch({ type: "nextQuestion" });
  };
  const handleFinished = ()=>{
    dispatch({type: 'finished'})
  }
  
  if (index < numQuestions - 1) 
    return (
      <button className="btn btn-ui" onClick={handleDispatch}>
        Next
      </button>
    );
  
  if (index === numQuestions - 1) 
    return (
      <button className="btn btn-ui" onClick={handleFinished}>
        Finished
      </button>
    );
  
};

export default NextButton;
