import { nanoid } from "nanoid";
import React from "react";
import Answer from "./Answer";
import {decode} from 'html-entities';
export default function Quizz(props) {
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

  const  [styles, setStyles] = React.useState({
    backgroundColor: "aquamarine"
   
  })
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
  
  React.useEffect(
    ()=>{
      answers.forEach(answer => { if(answer.click && answer.truthness)  {props.setCount(oldCount => oldCount+1)}})
     
        
      }
      
  ,[props.check])
 


  React.useEffect(
    ()=>{
    
      setAnswers(allAnswers.map(answer => (
        { id:nanoid(),
          answer: answer,
          click: false,
          truthness: answer === props.correctAnswer ? true : false
        }
      )))
      props.setCount(0) }
   
  ,[props.correctAnswer])

function clickAnswer(id){
if(!props.check){  
    setAnswers(oldAnswers => oldAnswers.map(answer => {
      return answer.id === id ? 
          {...answer, click: true} :
          {...answer, click:false}
  }))}
  
}


  const answerElement = answers.map(
    answer => <Answer again={props.again}
    check={props.check} isTrue={answer.truthness} 
    isClick={answer.click} answer={decode(answer.answer)} 
    clickAnswer={() =>{(clickAnswer(answer.id))}}  className="choice"
    />
  )

  
 React.useEffect(
   ()=>{
    if(props.category ==='Entertainment: Video Games'){
        
      setStyles({
        backgroundColor: "#eb1cb7",
      
    
      }
    
    )}
  
     if(props.category ==='Geography'){
        
      setStyles({
        backgroundColor: "#f5a442",
        border: "none",
       
      }
    
    )}

 
      else if(props.category ==='Animals'){
        setStyles({
          backgroundColor: "#1fb807",
          border: "none",
          
        }
        
      
      )}

      else if(props.category ==='Entertainment: Japanese Anime & Manga'){
        setStyles({
          backgroundColor: "#8f07b8",
          border: "none",
          color:"#fff"
          
        }
        
      
      )}

      else if(props.category ==='Entertainment: Music'){
        setStyles({
          backgroundColor: "#b80730",
          border: "none",
          color:"#fff"
          
        }
        
      
      )}

      else if(props.category ==='General Knowledge'){
        setStyles({
          backgroundColor: "#1cebe0",
          border: "none",
        
          
        }
        
      
      )}

      else if(props.category ==='History'){
        setStyles({
          backgroundColor: "#f5f242",
          border: "none",
      
          
        }
        
      
      )}

      else if(props.category ==='Entertainment: Comics'){
        setStyles({
          backgroundColor: "#761ceb",
          border: "none",
          color:"#fff"
      
          
        }
        
      
      )}

      else if(props.category ==='Sports'){
        setStyles({
          backgroundColor: "#1ceb98",
          border: "none",
         
      
          
        }
        
      
      )}
      
  
       })

  return (
    <div className="question-component">
    <div className="tags">
      <h3 style ={styles} className="tag category">{decode(props.category)}</h3>
      <h3 className="tag difficulty">{decode(props.difficulty)}</h3>
    </div>
      <h2 className="question">{decode(props.question)}</h2>
      <div className="choice-container">
     {answerElement}
   {/* {console.log(answers)} */}
      </div>
      
    </div>
    
  );
}


