import React from "react";
import "./App.css";
import Start from "./Start";
import Play from "./Play";

function App() {
  const [start, setStart] = React.useState(false);
  function startGame() {
    setStart(true);
  }
  return (
    <div className="App">
      {!start && <Start handleClick={startGame} />}
      {start && <Play />}
    </div>
  );
}

export default App;
