import React, { useState } from "react"
import './App.css';

function App(props) {
  const [status, setStatus] = useState("Not delivered");
  
  return (
    <div>
      <h1>Hello {props.name}.</h1>
      <p>The package is: {status}</p>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

export default App;
