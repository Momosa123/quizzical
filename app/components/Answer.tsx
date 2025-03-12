"use client"
import {decode} from 'html-entities';
import { QuizzType } from "@/app/types/quizzType"; 
import ButtonAnswer from "./ButtonAnswer";
interface AnswerProps {
  answer: string;
  isSelected: boolean;
  isCorrect: boolean;
  quizzElement: QuizzType;
  isEndGame: boolean;
  setQuizz: (quizz: QuizzType[]) => void
  quizz: QuizzType[]
  setSelectedAnswer: (answer: string) => void
}

export default function Answer({ answer, quizz,  isEndGame, quizzElement, isSelected, isCorrect, setQuizz, setSelectedAnswer}: AnswerProps) {

  function handleClick() {
    setSelectedAnswer(answer)
    const quizzWithAnswer = quizz.map(quizz => quizz.id === quizzElement.id ? {...quizz, answer: answer} : quizz)
    setQuizz(quizzWithAnswer)

}
  return (
 <ButtonAnswer 
 answer={answer} 
 quizz={quizz} 
 isEndGame={isEndGame} 
 quizzElement={quizzElement} 
 isSelected={isSelected} 
 isCorrect={isCorrect} 
 setQuizz={setQuizz} 
 setSelectedAnswer={setSelectedAnswer}
 />
  );
}