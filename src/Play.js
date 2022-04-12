import React from "react";

export default function Play(props) {
  return (
    <div className="question-component">
      <h2 className="question">question</h2>
      <div className="choice-container">
        <p className="choice">firstChoice</p>
        <p className="choice">secondChoice</p>
        <p className="choice">thirdChoice</p>
        <p className="choice">forthChoice</p>
      </div>
    </div>
  );
}

// { <h2>{props.question}</h2>
// <p>{props.firstChoice}</p>
// <p>{props.secondChoice}</p>
// <p>{props.thirdChoice}</p>
// <p>{props.forthChoice}</p> }
