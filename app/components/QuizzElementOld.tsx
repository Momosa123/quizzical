import { nanoid } from "nanoid";
import React from "react";
import Answer from "./Answer";
import {decode} from 'html-entities';

export default function Quizz(props) {
  // Remake answers into object that includes click, id and truthness
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
// give some stylesCategory to category
  const  [stylesCategory, setstylesCategory] = React.useState({
    backgroundColor: "aquamarine"
   
  })

  const  [stylesDifficulty, setstylesDifficulty] = React.useState({
    backgroundColor: "aquamarine"
   
  })
  // shuffle the answers array to randomize the good answer
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
  // count the number of good answers
  React.useEffect(
    ()=>{
      answers.forEach(answer => { 
        if(answer.click && answer.truthness)  
        {props.setScore(oldScore => oldScore+1)}}) 
      }
      
  ,[props.check])
 
// update the answers on each api fetch

  React.useEffect(
    ()=>{
    
      setAnswers(allAnswers.map(answer => (
        { id:nanoid(),
          answer: answer,
          click: false,
          truthness: answer === props.correctAnswer ? true : false
        }
      )))
      props.setScore(0) }
   
  ,[props.correctAnswer])

  // change the state of the clicked answer
function clickAnswer(id){
if(!props.check){  
    setAnswers(oldAnswers => oldAnswers.map(answer => {
      return answer.id === id ? 
          {...answer, click: true} :
          {...answer, click:false}
  }))}
  
}

// edit the style of categories
    
 React.useEffect(
   ()=>{
    if(props.category ==='Entertainment: Video Games'){
        
      setstylesCategory({
        backgroundColor: "#eb1cb7",
        color:"#fff" 
      }  
    )}
  
     else if(props.category ==='Geography'){
        
      setstylesCategory({
        backgroundColor: "#f5a442",
        border: "none",  
      } 
    )}

 
      else if(props.category ==='Animals'){
        setstylesCategory({
          backgroundColor: "#1fb807",
          border: "none",      
        }
      )}

      else if(props.category ==='Entertainment: Japanese Anime & Manga'){
        setstylesCategory({
          backgroundColor: "#8f07b8",
          border: "none",
          color:"#fff"    
        }
      )}

      else if(props.category ==='Entertainment: Music'){
        setstylesCategory({
          backgroundColor: "#b80730",
          border: "none",
          color:"#fff"    
        }
      )}

      else if(props.category ==='General Knowledge'){
        setstylesCategory({
          backgroundColor: "#1cebe0",
          border: "none",  
        }
      )}

      else if(props.category ==='History'){
        setstylesCategory({
          backgroundColor: "#f5f242",
          border: "none",    
        }
      )}

      else if(props.category ==='Entertainment: Comics'){
        setstylesCategory({
          backgroundColor: "#761ceb",
          border: "none",
          color:"#fff"          
        }
      )}

      else if(props.category ==='Sports'){
        setstylesCategory({
          backgroundColor: "#1ceb98",
          border: "none",}
        )}
      },[props.again])

      React.useEffect(
        ()=>{
        
          if(props.difficulty ==='easy'){
             
           setstylesDifficulty({
             backgroundColor: "#55a832",
             border: "none",  
           } 
         )}
     
      
           else if(props.difficulty ==='medium'){
             setstylesDifficulty({
               backgroundColor: "#f7f723",
               border: "none",      
             }
           )}
     
           else if(props.difficulty ==='hard'){
             setstylesDifficulty({
               backgroundColor: "#f72323",
               border: "none",
               color:"#fff"    
             }
           )}
     
        
  
           },[props.again])
     

       const answerElement = answers.map(
        answer => <Answer 
        check={props.check} isTrue={answer.truthness} 
        isClick={answer.click} answer={decode(answer.answer)} 
        clickAnswer={() =>{(clickAnswer(answer.id))}}  className="choice"
        />
      )

  return (
    <div className="question-component">
    <div className="tags">
      <h3 style ={stylesCategory} className="tag category">{decode(props.category)}</h3>
      <h3 style={stylesDifficulty} className="tag difficulty">{decode(props.difficulty)}</h3>
    </div>
      <h2 className="question">{decode(props.question)}</h2>
      <div className="choice-container">
     {answerElement}
   
      </div>
      
    </div>
    
  );
}


