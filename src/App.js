import React from "react";
import "./App.css";
import Start from "./Start";
import Question from "./Question";
import Answers from "./Answers";
import { nanoid } from "nanoid";
import {decode} from 'html-entities';


// -> '&copy;'

function App() {
  
  const [start, setStart] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(false);
  const [quizz, setQuizz] = React.useState([])
  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState([])
  const [checkAnswer, setCheckAnswer] = React.useState(false)
  // const [answers, setAnswers] = React.useState([])
  // console.log("render")
  React.useEffect(() => {
    async function getQuizz() {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
       setQuizz(data.results.map(
         quizz => {const answers =[...quizz.incorrect_answers,quizz.correct_answer]
        const answersArr = answers.map(answer =>{
          return({
            answer:answer,
            isSelected: false,
            isCorrect: answer === quizz.correct_answer ? true : false,
            id: nanoid() 
          })
        })
        return ({
          
          question:quizz.question,
          answers:shuffle(answersArr),
          category:quizz.category,
          difficulty:quizz.difficulty,
          id:nanoid()
        })   }
      )
     
      )
      setAnswers(quizz.map(
        question => {return({...question.answers, question.id})}))

      setQuestions(quizz.map(question =>question.question))
      // setAnswers(data.results.map(
      //   quizz=> {const answers =[...quizz.incorrect_answers,quizz.correct_answer]
      //   return answers.map(answer =>({
      //     answer:answer,
      //       isSelected: false,
      //       isCorrect: answer === quizz.correct_answer ? true : false,
      //       id: nanoid() 
      //   }))
      //   }
      // ))
      
    }
    
    getQuizz()
    setCheckAnswer(false)

}, [playAgain])
console.log(questions)
console.log(answers)

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
 
function changeClick(questionId, answerId){
  
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === questionId ? 
          {...question, answers: question.answers.map(
            answer => {return answer.id === answerId ? {
              ...answer, isSelected:true
            }:answer}
          )} :
          question
  }))
  
}

const answerElements = answers.map(
  answer => return ({for(let i =0; i< answer.length; i++){
     <Answer answer= {answer[i]}/>
  }})
)


const quizzElements = quizz.map(
  quizzElement => {
    return (
      <div><Question question={quizzElement.question}
      category={quizzElement.category}
      difficulty={quizzElement.difficulty}
     
       />
        {/* <Answers 
       
        answers={quizzElement.answers}
        click={quizzElement.click}
        check={checkAnswer}
        handleClick={()=>{changeClick(quizzElement.id,quizzElement.answers.id)}}
         /> */}
         
         </div>
    )
      
  }
  )



  function startGame() {
    setStart(true);
  }

  // function verifyAnswer(){
  //   setCheckAnswer(oldValue => !oldValue)
  // }

  // function newGame (){
  //   setPlayAgain(oldValue =>!oldValue)
  // }

  return (
    <div className="app">
      { !start && <Start handleClick={startGame} />}
      { start && quizzElements}

    </div>
  );
}

export default App;
