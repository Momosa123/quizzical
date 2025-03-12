"use client"
import Answer from "./Answer"
import { useState } from "react"
import { QuizzType } from "@/app/types/quizzType"

type AnswersProps = {
    answers: string[]   
    endGame: boolean
   
    quizzElement: QuizzType & {id: string, answer: string}
    setQuizz: (quizz: QuizzType[]) => void
    quizz: QuizzType[]
}
export default function Answers({answers, quizz, quizzElement, endGame, setQuizz}: AnswersProps) 
  {
  const [selectedAnswer, setSelectedAnswer] = useState("")
  
  return <div 
            className="flex gap-2">{
              answers.map(
            (answer, index) => 
            <Answer 
              key={index} 
              answer={answer} 
              quizzElement={quizzElement}
              isSelected ={answer ===selectedAnswer} 
              setSelectedAnswer={setSelectedAnswer}
              isCorrect ={answer === quizzElement.correct_answer }
              isEndGame={endGame}
              quizz={quizz}
              setQuizz={setQuizz}
              />
            )}
    </div>;
}