import React, { Component, useState,useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  function buttonClickHandler(){
    setRenderBall(true);
  }
  const reset = () => {setRenderBall(false)
  setBallPosition({left:"0px",top:"0px"})
  };
  const renderChoice = () => {
    if (renderBall) 
      return <div className="ball" style={{position:"absolute",left:ballPosition.left,top:ballPosition.top}}></div> 
      else if(!renderBall) {
        return <button onClick={buttonClickHandler} >Click For One Ball</button>
      }
  };
  useEffect(()=>{
    document.addEventListener("keydown",update)
},[])
function update(e){
  if(e.key==="ArrowRight"){
      setBallPosition(prv=>({left:prv.left+5,
     top:prv.top}))
  }
  if(e.key==="ArrowLeft"){
   setBallPosition(prv=>({left:prv.left-5,
  top:prv.top}))

}
if(e.key==="ArrowUp"){
 setBallPosition(prv=>({left:prv.left,
top:prv.top-5}))
}
if(e.key==="ArrowDown"){
setBallPosition(prv=>({left:prv.left,
top:prv.top+5}))
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
