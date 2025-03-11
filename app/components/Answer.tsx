import {decode} from 'html-entities';

export default function Answer({answer}: {answer: string}) {
  return <button className="text-xl border-2 rounded-xl border-indigo-500 p-2 cursor-pointer hover:bg-indigo-500 hover:text-white" onClick={() => console.log(answer)}>{decode(answer)}</button>;
}