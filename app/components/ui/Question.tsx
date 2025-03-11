import {decode} from 'html-entities';
export default function Question({question}: {question: string}) {
  return <div className="text-2xl font-bold">{decode(question)}</div>;
}