"use client"
import {QuizzType} from "@/app/types/quizzType"
import Question from "./Question"
import Answers from "./Answers"

type QuizzElementProps = {
  quizzElement: QuizzType ;
  id: string;
  endGame: boolean; 
  setQuizz: (quizz: QuizzType[]) => void
  quizz: QuizzType[]
}
export default function QuizzElement({quizzElement, endGame, setQuizz, quizz}: QuizzElementProps) {
    const answers = [...quizzElement.incorrect_answers, quizzElement.correct_answer]

  return <div className="mt-10 border-b-2 border-indigo-500 pb-4"><Question question={  quizzElement.question} />
    <Answers endGame={endGame} answers={answers} quizzElement={quizzElement} setQuizz={setQuizz} quizz={quizz} />
  </div>;
}