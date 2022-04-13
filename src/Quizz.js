
import React from "react";
import Answer from "./Answer";
export default function Quizz(props) {

 
//     React.useEffect(
//     ()=>{
    
//       setAnswers(oldAnswers => oldAnswers.map(answer => 
//            ( {...answer, click: false} )
//     ))
//     }
    
//   ,[props.check])

// function clickAnswer(id){
  
//     setAnswers(oldAnswers => oldAnswers.map(answer => {
//       return answer.id === id ? 
//           {...answer, click: !answer.click} :
//           answer
//   }))
  
// }

// clickAnswer={() =>{(clickAnswer(answer.id))}}  

  const answerElement = props.answers.map(
    answer => <Answer onClick={props.handleClick}
    check={props.check} isTrue={answer.truthness} 
    isClick={answer.click } className="choice" answer={answer.answer} 
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
   {/* {console.log(answers)} */}
      </div>
      
    </div>
    
  );
}


