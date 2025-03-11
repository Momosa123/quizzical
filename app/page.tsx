import React from "react";
import StartQuizzButton from "@/app/components/StartQuizzButton";
export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4">
    
        <h1 className="text-4xl font-bold">Quizzical</h1>
        <h3 className="text-lg">Play a fun and challenging quizz</h3>
        <StartQuizzButton />
     
    </div>
  );
}
