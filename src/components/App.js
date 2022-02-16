import React, { Component, useState,useEffect } from "react";
import "./styles/App.css";

function App () {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: 0,
    top:0,
  });
  function buttonClickHandler(){
    setRenderBall(true);
  }
  const reset = () => {setRenderBall(false)
    setBallPosition(prv=>({
          
        left:0,
        top:0}))
  };
  function renderChoice(){
    if (renderBall==true) {
        return <div className="ball" style={{position:"absolute",left:ballPosition.left,top:ballPosition.top}}></div> 
    }
      
      else if(!renderBall) {
        return <button className="start"  onClick={buttonClickHandler} >Click For One Ball</button>
      }
  };
useEffect(()=>{
    document.addEventListener("keydown",update);
    return( document.addEventListener("keydown",update))
})

function update(event){
  if(event.key==="ArrowRight"){
      setBallPosition(prv=>({
          
          left:ballPosition.left+5,
          top:ballPosition.top}))
    //  setX(x+5)
     console.log("button right")
  }
  else if(event.key==="ArrowLeft"){
    setBallPosition(prv=>({
          
        left:ballPosition.left-5,
        top:ballPosition.top}))
//   setX(x-5)

  console.log("button left")

}
else if(event.key==="ArrowUp"){
    setBallPosition(prv=>({
          
        left:ballPosition.left,
        top:ballPosition.top-5}))
// setY(y+5)
console.log("button up")
}
else if(event.key==="ArrowDown"){
    setBallPosition(prv=>({
          
        left:ballPosition.left,
        top:ballPosition.top+5}))
// setY(y-5)
console.log("button down")
}
}

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
