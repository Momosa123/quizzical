import { nanoid } from "nanoid";
import React from "react";
import Answer from "./Answer";
export default function Quizz(props) {

 function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
  let allAnswers =[...props.incorrectAnswers, props.correctAnswer]

allAnswers= shuffle(allAnswers)

  const [answers, setAnswers]=React.useState(
    allAnswers.map(answer => (
      { id:nanoid(),
        answer: answer,
        click: false,
        truthness: answer === props.correctAnswer ? true : false
      }
    ))
  )
 
    React.useEffect(
    ()=>{
    
      setAnswers(oldAnswers => oldAnswers.map(answer => 
           ( {...answer, click: false} )
    ))
    }
    
  ,[props.check])

function clickAnswer(id){
  
    setAnswers(oldAnswers => oldAnswers.map(answer => {
      return answer.id === id ? 
          {...answer, click: !answer.click} :
          answer
  }))
  
}


  const answerElement = answers.map(
    answer => <Answer 
    check={props.check} isTrue={answer.truthness} 
    isClick={answer.click} answer={answer.answer} 
    clickAnswer={() =>{(clickAnswer(answer.id))}}  className="choice"
    />
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
   {console.log(answers)}
      </div>
      
    </div>
    
  );
}


