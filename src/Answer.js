import React from "react";

export default function Answer(props){
  const  [styles, setStyles] = React.useState("")
  
 React.useEffect(
   ()=>{
  
    if(!props.isClick && !props.check){
        
      setStyles("")}
      else if(props.isClick && !props.check){
        
      setStyles("#D6DBF5")}
      else if(props.isClick && props.check && !props.isTrue){
      setStyles("#F8BCBC")}
      else if( props.check && props.isTrue){
      setStyles ("#94D7A2")
     }
       })
// console.log(props.answer,props.isClick,props.check, props.isTrue)
  const clickedStyle = {
    backgroundColor: styles
}

  return(
    <p style={clickedStyle} onClick={props.clickAnswer} className="choice">{props.answer}</p>
  
  )
}