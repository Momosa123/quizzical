import {Quizz} from "@/app/types/quizz"
import Question from "./ui/Question"
export default function QuizzElement({quizzElement}: {quizzElement: Quizz}) {
  return <div><Question question={quizzElement.question} /></div>;
}