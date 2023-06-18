import React from "react";

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Your Score:{props.score}
        <br />
        Total Score:{props.totalScore}
      </div>
      <div className="button-container">
        <button id="next-button" onClick={props.tryAgain}>
          Try Again
        </button>
        <button id="exit-button" onClick={props.exit}>
          Exit
        </button>
      </div>
    </>
  );
}

export default QuizResult;
