import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false); 

  // function handleToggle(){
  //   setIsOn(isOn => !isOn)

  function toggleClick(){
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"; 

  return (
  <button style={{ background: color }} onClick={toggleClick}>{isOn ? "ON" : "OFF"}</button>
  )
}

export default Toggle;
