
import React from "react";
import { decode } from "html-entities";



export default function Question(props) {



  return (
    <div className="question-component">
    <div className="tags">
      <h3 className="tag category">{props.category}</h3>
      <h3 className="tag difficulty">{props.difficulty}</h3>
    </div>
      <h2 className="question">{decode(props.question)}</h2>
      
    </div>
    
  );
}


