import React from "react";
import "./App.css";
import Start from "./Start";
import Quizz from "./Quizz";

function App() {
  //Start usetate helps to know that the game started
  const [start, setStart] = React.useState(false);

  //PlayAgain usetate helps to know that the player wants to play again
  const [playAgain, setPlayAgain] = React.useState(false);

  //Quizz usetate is an object that holds the response of the API call and is used to get questions, answers, categories and difficulties
  const [quizz, setQuizz] = React.useState([])

   //Start usetate helps to know that the user wants to check the answer
  const [checkAnswer, setCheckAnswer] = React.useState(false)

//Start usetate helps to know that the user wants to check the answer
  const [score, setScore]=React.useState(0)

  //fetch the data on page load and each time the player wants to play again
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
       setQuizz(data.results)
     
    }
    getMemes()
    setCheckAnswer(false)

}, [playAgain])


//a quizz element consist of one category of question, the difficulty, the question and the answers
const quizzElements = quizz.map(
  quizzElement => <Quizz 
                            category = {quizzElement.category} 
                            difficulty = {quizzElement.difficulty} 
                            question ={quizzElement.question} 
                            correctAnswer={quizzElement.correct_answer} 
                            incorrectAnswers={quizzElement.incorrect_answers}
                            check={checkAnswer}
                            score={score}
                            setScore={setScore}
                            again={playAgain}

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
        <h2> You have {score} good answers</h2> <button   onClick={newGame}>Play Again</button>
      </div>}
    </div>
  );
}

export default App;
