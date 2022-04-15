import React from "react";
import "./App.css";
import Start from "./Start";
import Quizz from "./Quizz";

function App() {
  const [start, setStart] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(false);
  const [quizz, setQuizz] = React.useState([])
  const [checkAnswer, setCheckAnswer] = React.useState(false)
  const [count, setCount]=React.useState(0)

  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
       setQuizz(data.results)
     
    }
    getMemes()
    setCheckAnswer(false)

}, [playAgain])



const quizzElements = quizz.map(
  quizzElement => <Quizz 
                            category = {quizzElement.category} 
                            difficulty = {quizzElement.difficulty} 
                            question ={quizzElement.question} 
                            correctAnswer={quizzElement.correct_answer} 
                            incorrectAnswers={quizzElement.incorrect_answers}
                            check={checkAnswer}
                            again={playAgain}
                            count={count}
                            setCount={setCount}

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
      {start && quizzElements}
      {start && !checkAnswer && <button className="normal-button"  onClick={verifyAnswer}>Check Answers</button>}
      {checkAnswer && <div className="replay-container">
        <h2> You have {count} good answers</h2> <button   onClick={newGame}>Play Again</button>
      </div>}
    </div>
  );
}

export default App;
