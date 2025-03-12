"use client"
import { useState, useEffect } from "react"
import {QuizzType} from "@/app/types/quizzType"

import { nanoid } from "nanoid"
import ManageQuizz from "./ManageQuizz"
import QuizzDisplay from "./QuizzDisplay"
export default function Quizz() {
  const [quizz, setQuizz] = useState<QuizzType[]>([])
 
  const [endGame, setEndGame] = useState(false)
  const [score, setScore] = useState(0)
  async function fetchQuizz(){
      console.log("fetching quizz")
     
        try {
            const res = await fetch("https://opentdb.com/api.php?amount=5")
            
            if (res.status === 429) {
                // Attendre 2 secondes et réessayer
                await new Promise(resolve => setTimeout(resolve, 5000))
                return fetchQuizz() // Appel récursif après l'attente
            }

            const data = await res.json()
            const quizzWithId = data.results.map((quizzElement: Omit<QuizzType, "id" | "answer">, index: number) => ({...quizzElement, id: nanoid(), answer: ""}))   
            setQuizz(quizzWithId)
     
        } catch (error) {
            console.log(error)
        }
  }
  function handleReplay(){
    console.log("handleReplay")
    setEndGame(false)
    fetchQuizz()
  }
  useEffect(() => {
    console.log("useEffect")
    fetchQuizz()
  }, [])


 

  return <div className="w-2/3 mx-auto pt-10 flex flex-col gap-4">
    {
   quizz ? 
 <> <QuizzDisplay 
  endGame={endGame} 
  quizz={quizz} 
  setQuizz={setQuizz}
 />
 <ManageQuizz 
 endGame={endGame} 
 quizz={quizz} 
 score={score} 
 setScore={setScore} 
 setEndGame={setEndGame} 
 handleReplay={handleReplay}/></>
    : <div className="mt-10 flex justify-center items-center h-screen">Loading...</div>
    }
  
  </div>;
}