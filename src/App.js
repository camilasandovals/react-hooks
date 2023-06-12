import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import './App.css';

const createArray = (length) => [
  ...Array(length)
];

function Star({selected = false, onSelect}){
  return <FaStar color={selected? "red" : "gray"}
  onClick = {onSelect}/>
}

function StarRating( {totalStars = 1}){
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <>
    {createArray(totalStars).map((n,i) => (
    <Star key={i} selected={selectedStars > i}
    onSelect={() => setSelectedStars(i+1)}/>
    ))}
    <p>{selectedStars} of {totalStars}</p>
    </>
  )
}

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
      <div>
        <StarRating totalStars={5}/>
      </div>
    </div>
  );
}

export default App;
