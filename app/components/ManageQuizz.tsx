import { QuizzType } from "../types/quizzType";
import EndGameButton from "./EndGameButton";
import ReplayButton from "./ReplayButton";              
export default function ManageQuizz({endGame, quizz, score, setScore, setEndGame, handleReplay}: {endGame: boolean, quizz: QuizzType[], score: number, setScore: (score: number) => void, setEndGame: (endGame: boolean) => void, handleReplay: () => void}) {
  return (
    <div>
      {endGame ? <ReplayButton 

      score={score}   handleReplay={handleReplay} 
      /> : 
      
        <EndGameButton score={score} setScore={setScore} setEndGame={setEndGame} quizz={quizz} />}
    </div>
  );
}