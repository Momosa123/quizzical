"use client"
import { useState, useEffect } from "react"
import {QuizzType} from "@/app/types/quizzType"
import QuizzElement from "./QuizzElement"

export default function Quizz() {
  const [quizz, setQuizz] = useState<QuizzType[]>([])
const [playAgain, setPlayAgain] = useState(false)
useEffect(() => {
  async function getQuizz() {
      const res = await fetch("https://opentdb.com/api.php?amount=5")
      const data = await res.json()
     setQuizz(data.results)
   
  }
  getQuizz()
}, [playAgain])
console.log(quizz)
  return <div className="w-2/3 mx-auto pt-10 flex flex-col gap-4">{quizz.map((quizzElement, index) => <QuizzElement key={index} quizzElement={quizzElement} />)  }</div>;
}