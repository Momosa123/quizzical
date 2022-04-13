import React from "react";
import "./App.css";
import Start from "./Start";
import Quizz from "./Quizz";

function App() {
  const [start, setStart] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(false);
  const [questions, setQuestions] = React.useState([])
  const [checkAnswer, setCheckAnswer] = React.useState(false)
  // const [answers, setAnswers] = React.useState([])
  // console.log("render")
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
       setQuestions(data.results)
     
    }
    getMemes()
    setCheckAnswer(false)

}, [playAgain])






console.log(checkAnswer)

const questionElements = questions.map(
  questionElement => <Quizz 
                            category = {questionElement.category} 
                            difficulty = {questionElement.difficulty} 
                            question ={questionElement.question} 
                            correctAnswer={questionElement.correct_answer} 
                            incorrectAnswers={questionElement.incorrect_answers}
                            check={checkAnswer}

  />
  )


  function startGame() {
    setStart(true);
  }

  function verifyAnswer(){
    setCheckAnswer(oldValue => !oldValue)
  }

  function newGame (){
    setPlayAgain(oldValue =>!oldValue)
  }

  return (
    <div className="app">
      {!start && <Start handleClick={startGame} />}
      {start && questionElements}
      {start && !checkAnswer && <button className="normal-button"  onClick={verifyAnswer}>Check Answers</button>}
      {checkAnswer && <div className="replay-container">
        <h2> You have X good answers</h2> <button   onClick={newGame}>Play Again</button>
      </div>}
    </div>
  );
}

export default App;
