"use client"
import Button from "./ui/Button"
import { QuizzType } from "@/app/types/quizzType"

type EndGameButtonProps = {
  score: number
  setScore: (score: number) => void
  setEndGame: (endGame: boolean) => void  
  quizz: QuizzType[]
}
export default function EndGameButton({score, setScore, setEndGame, quizz}: EndGameButtonProps) {
  function handleEndGame(){
    console.log(quizz)
    const correctAnswers = quizz.filter(quizzElement => quizzElement.answer === quizzElement.correct_answer)
    setScore(correctAnswers.length)
    setEndGame(true)
  }
  return (
    <div className="flex flex-col gap-4 mb-10">
      
      <Button text="End Game" onClick={handleEndGame} />
    </div>
  );
}