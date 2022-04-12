import { nanoid } from "nanoid";
import React from "react";
import Answer from "./Answer";
export default function Quizz(props) {
  let allAnswers =[...props.incorrectAnswers, props.correctAnswer]


  const [answers, setAnswers]=React.useState(
    allAnswers.map(answer => (
      { id:nanoid(),
        answer: answer,
        click: false
      }
    ))
  )
 

function clickAnswer(id){
  
    setAnswers(oldAnswers => oldAnswers.map(answer => {
      return answer.id === id ? 
          {...answer, click: !answer.click} :
          answer
  }))
  
}

  const answerElement = answers.map(
    answer => <Answer isClick={answer.click} answer={answer.answer} clickAnswer={() =>{(clickAnswer(answer.id))}}  className="choice"/>
  )


  return (
    <div className="question-component">
    <div className="tags">
      <h3 className="tag category">{props.category}</h3>
      <h3 className="tag difficulty">{props.difficulty}</h3>
    </div>
      <h2 className="question">{props.question}</h2>
      <div className="choice-container">
     {answerElement}
   
      </div>
    </div>
  );
}

// { <h2>{props.question}</h2>
// <p>{props.firstChoice}</p>
// <p>{props.secondChoice}</p>
// <p>{props.thirdChoice}</p>
// <p>{props.forthChoice}</p> }
