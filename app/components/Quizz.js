"use client"
import { useState, useEffect } from "react"

import QuizzElement from "./QuizzElement"

export default function Quizz() {
  const [quizz, setQuizz] = useState([])
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
  return <div>{quizz.map((quizzElement, index) => <QuizzElement key={index} quizzElement={quizzElement} />)  }</div>;
}