"use client"
import Button from "./ui/Button"
import { QuizzType } from "../types/quizzType"

export default function ReplayButton({handleReplay, score}: { handleReplay: () => void, score: number}) {
 
  return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p>Score: {score}</p>
        </div>
        <Button text="Replay" onClick={handleReplay} />
      </div>
  );
}