import React, { useState, useEffect } from "react"
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
  const [name, setName] = useState("Jan")
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    document.title = `Celebrate ${name}`
  }, [name]);

  useEffect(()=> {
    console.log(`The user is: ${
      loggedIn? "Logged" : "Not logged"
    }`)
  }, [loggedIn])

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
      <section>
        Congratulations {name}
        <button onClick={() => setName("Will")}>Change winner</button>
        <div>
          {loggedIn? "logged in" : "log in"}
          <button onClick={() => {setLoggedIn(true)}}>Log in</button>
        </div>
      </section>
    </div>
  );
}

export default App;
