import {decode} from 'html-entities';
export default function Question({question}: {question: string}) {
  return <div className="text-2xl font-bold mb-4 text-blue-800">{decode(question)}</div>;
}