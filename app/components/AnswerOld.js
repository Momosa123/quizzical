import React from "react";

export default function Answer(props){
  const  [styles, setStyles] = React.useState({
    backgroundColor: "",
   
  })
  
 React.useEffect(
   ()=>{
    if(!props.isClick && !props.check){
        
      setStyles({
        backgroundColor: "",
        border: "1px solid #293264",
    
      }
    
    )}
  
     if(props.isClick && !props.check){
        
      setStyles({
        backgroundColor: "#D6DBF5",
        border: "none",
       
      }
    
    )}

    else if(!props.isClick && props.check && !props.isTrue){
      setStyles({
        
        border: "1px solid #868e96",
        color: "#868e96"
      }
      
    
    )}
      else if(props.isClick && props.check && !props.isTrue){
        setStyles({
          backgroundColor: "#F8BCBC",
          border: "none",
          color: "#868e96"
        }
        
      
      )}

      
      
      else if( props.check && props.isTrue){
        setStyles({
          backgroundColor:  "#94D7A2",
          border: "none",
          color: "#293264"
        }
      
      )
     }
       },[props.isClick,props.check])
// console.log(props.answer,props.isClick,props.check, props.isTrue)
 
  return(
    <p style={styles} onClick={props.clickAnswer} className="choice">{props.answer}</p>
  
  )
}