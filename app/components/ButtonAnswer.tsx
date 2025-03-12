import { decode } from "html-entities";
import { QuizzType } from "../types/quizzType";

interface ButtonAnswerProps {
  answer: string;
  quizz: QuizzType[];
  isEndGame: boolean;
  quizzElement: QuizzType;
  isSelected: boolean;
  isCorrect: boolean;
  setQuizz: (quizz: QuizzType[]) => void
  setSelectedAnswer: (answer: string) => void
}
export default function ButtonAnswer({ answer, quizz,  isEndGame, quizzElement, isSelected, isCorrect, setQuizz, setSelectedAnswer}: ButtonAnswerProps) {

  function handleClick() {
    setSelectedAnswer(answer)
    const quizzWithAnswer = quizz.map(quizz => quizz.id === quizzElement.id ? {...quizz, answer: answer} : quizz)
    setQuizz(quizzWithAnswer)
  }

  return (
       <button 
    className={`
      text-xl border-2 rounded-xl border-indigo-500 p-2 cursor-pointer
      ${isEndGame && isCorrect ? 'bg-green-500 text-white' : ''}
      ${isSelected && isEndGame && !isCorrect ? 'bg-red-500 text-white' : ''}
      ${isSelected && !isEndGame ? 'bg-indigo-500 text-white' : ''}
      ${!isSelected && !isEndGame ? 'hover:bg-indigo-500 hover:text-white' : ''}
    `}
    onClick={handleClick}
  >
    {decode(answer)}
  </button>
  )
}