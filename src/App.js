import React from "react";
import "./App.css";
import Start from "./Start";
import Quizz from "./Quizz";

function App() {
  const [start, setStart] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(false);
  const [questions, setQuestions] = React.useState([])
  // const [answers, setAnswers] = React.useState([])
  // console.log("render")
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
       setQuestions(data.results)
     
    }
    getMemes()


}, [playAgain])



const answerRest =[]


console.log(answerRest)

const questionElements = questions.map(
  questionElement => <Quizz 
                            category = {questionElement.category} 
                            difficulty = {questionElement.difficulty} 
                            question ={questionElement.question} 
                            correctAnswer={questionElement.correct_answer} 
                            incorrectAnswers={questionElement.incorrect_answers}

  />
  )

//   React.useEffect(function() {
//     console.log("Effect ran")
//     fetch("https://opentdb.com/api.php?amount=10")
//         .then(res => res.json())
//         .then(data => console.log(data.results))
// }, [playAgain])
  function startGame() {
    setStart(true);
  }
  return (
    <div className="App">
      {!start && <Start handleClick={startGame} />}
      {start && questionElements}
    </div>
  );
}

export default App;
