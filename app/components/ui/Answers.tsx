import Answer from "../Answer"

export default function Answers({answers}: {answers: string[]}) {
  return <div className="flex gap-2">{answers.map((answer, index) => <Answer key={index} answer={answer} />)}</div>;
}