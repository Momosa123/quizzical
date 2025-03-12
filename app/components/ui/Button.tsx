export default function Button({text, onClick}: {text: string, onClick: () => void}) {
    return <button className="bg-indigo-500 text-white p-2 rounded-xl cursor-pointer" onClick={onClick}>{text}</button>;
  } 