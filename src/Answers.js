
import React from "react";
import Answer from "./Answer";

export default function Answers(props) {

  const answerElement = props.answers.map(
    answer => <Answer onClick={props.handleClick}
    check={props.check} isTrue={answer.truthness} 
    isClick={answer.click } className="choice" answer={answer.answer} 
    />
  )


  return (
   
      <div className="answer-container">
     {answerElement}

      </div>

    
  )
}


