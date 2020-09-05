import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  
  const [counter, counter_reset]= usestate(50);
  const [color, color_reset] = usestate("white");


  useEffect(()=> {

  if (counter == 0 ): return

  if (counter == 15):
    color_reset("red")

  setInterval(() => {
    counter_reset(counter-1)
  }, 1000);

}
  return (
    <div className="App">
      <div style = {{backgroundColor :color }}>
        Count : {counter}
      </div>
    </div>
  );
}
