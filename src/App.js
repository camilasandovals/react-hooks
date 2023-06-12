import React, { useState } from "react"
import './App.css';

function App(props) {
  const [status, setStatus] = useState("Not delivered");
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <h1>Hello {props.name}.</h1>
      <p>The package is: {status}</p>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <div>
        <input type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}/>
        <p>{checked? "checked" : "not checked"}</p>
      </div>
    </div>
  );
}

export default App;
