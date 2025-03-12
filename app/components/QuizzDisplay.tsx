import QuizzElement from "./QuizzElement";
import { QuizzType } from "../types/quizzType";

type QuizzDisplayProps = {  
  quizz: QuizzType[]
  endGame: boolean
  setQuizz: (quizz: QuizzType[]) => void
}
export default function QuizzDisplay({quizz  , endGame, setQuizz}: QuizzDisplayProps) {
  return quizz.map((quizzElement, index) => 

    <QuizzElement 
      quizz={quizz}
      key={index} 
      id={quizzElement.id}
      endGame={endGame} 
      quizzElement={quizzElement} 
      setQuizz={setQuizz}
   
    />


  );
}