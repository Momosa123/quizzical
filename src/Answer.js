import React from "react";

export default function Answer(props){
  const styles = {
    backgroundColor: props.isClick ? "#D6DBF5" : "white"
}

  return(
    <p style={styles} onClick={props.clickAnswer} className="choice">{props.answer}</p>
  )
}