import React, { useState, useEffect, useReducer, useRef } from "react"
import { FaStar } from "react-icons/fa"
import './App.css';


// functions to make work the star rating
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

//functions for the useReducer

const initialState={
  message: "hi"
}

function reducer(state, action){
  switch(action.type) {
    case "yell": 
      return {message: `HEY I JUST SAID ${state.message}`}
    case "whisper":
      return {message: `excuse me, I just said ${state.message}`}
  }
}

// main APP
function App(props) {
  const [status, setStatus] = useState("Not delivered")
  const [checked, setChecked] = useState(false)
  const [name, setName] = useState("Jan")
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState([])
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 2)
  const [checked2, toggle] = useReducer((checked) => !checked, false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const sound = useRef();
  const color = useRef();
  const [color2 , setColor2] = useState("#000000")
  const [sound2, setSound2] = useState("")

  //use effects 
  useEffect(() => {
    document.title = `Celebrate ${name}`
  }, [name]);

  useEffect(()=> {
    console.log(`The user is: ${
      loggedIn? "Logged" : "Not logged"
    }`)
  }, [loggedIn])

  //use effect to load data
  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then((response) => response.json())
    .then(setData);
  }, []);

  //useRef 
  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value = "";
    color.current.value = "";
  }

  //useStateform
  const submit2 = (e) => {
    e.preventDefault();
    alert(`${sound2} sounds like ${color2}`)
    setSound2("")
    setColor2("#000000")
  }

  if(data){
  return ( 
    <div>
      {/* props */}
      <h1>Hello {props.name}.</h1>
      <p>The package is: {status}</p>
      {/* useState */}
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <div>
        <input type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}/>
        <p>{checked? "checked" : "not checked"}</p>
      </div>
      {/* stars */}
      <div>
        <StarRating totalStars={5}/>
      </div>

      {/* useeffect */}
      <section>
        Congratulations {name}
        <button onClick={() => setName("Will")}>Change winner</button>
        <div>
          {loggedIn? "logged in" : "log in"}
          <button onClick={() => {setLoggedIn(true)}}>Log in</button>
        </div>
      </section>

      {/* loaddata */}
      <main>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </main>
      <button onClick={() => setData([])}>Remove data</button>
      <div>
        {/* usereducer */}
        <h1 onClick={() => setNumber(2)}>{number}</h1>
        <input type="checkbox"
        value={checked2}
        // just next line changes
        onChange={toggle}/> 
        <p>{checked2? "checked" : "not checked"}</p>
        <p>message: {state.message}</p>
        <button onClick={() => dispatch({type: "yell"})}>YELL</button>
        <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
      </div>
      {/* useref */}
      <form onSubmit={submit}>
        <input ref = {sound} type="text" placeholder="Sound.."/>
        <input ref={color} type="color"/>
        <button>ADD</button>
      </form> 
      {/* usestate form */}
      <form onSubmit={submit2}>
        <input value = {sound2} type="text" placeholder="Sound.." onChange={(e) => setSound2(e.target.value)}/>
        <input value={color2} type="color" onChange={(e) => setColor2(e.target.value)}/>
        <button>ADD</button>
      </form> 
    </div>
  );
}
}

export default App;
