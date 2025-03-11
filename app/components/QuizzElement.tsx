import {QuizzType} from "@/app/types/quizzType"
import Question from "./Question"
import Answers from "./ui/Answers"

export default function QuizzElement({quizzElement}: {quizzElement: QuizzType}) {
    const answers = [...quizzElement.incorrect_answers, quizzElement.correct_answer]
  return <div className="mt-10 border-b-2 border-indigo-500 pb-4"><Question question={quizzElement.question} />
    <Answers answers={answers} />
  </div>;
}