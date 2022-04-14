
import React from "react";
import Answer from "./Answer";

export default function Answers(props) {
  let localAnswer = props.answers
function changeSelected(id){
return localAnswer = props.answers.map(answer =>{return answer.id ===id ? {
  ...answer, isSelected:true
}:answer
})
}

  const answerElement = localAnswer.map(
    answer => <Answer onClick={()=>{changeSelected(answer.id)}}
    check={props.check} isTrue={answer.truthness} 
    isClick={answer.isSelected } className="choice" answer={answer.answer} 
    />
    
  )
  console.log(localAnswer)

  return (
   
      <div className="answer-container">
     {answerElement}

      </div>

    
  )
}


