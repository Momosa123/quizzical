import React from "react";

export default function Start(props) {
  return (
    <div className="start-container">
      <div className="start-quizz">
        <h1 className="start-title">Quizzical</h1>
        <h3 className="start-subtitle">Play a fun and challenging quizz</h3>
        <button  onClick={props.handleClick} className="normal-button start-button">
          Start quizz
        </button>
      </div>
    </div>
  );
}
