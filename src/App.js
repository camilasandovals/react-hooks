import React, { useState, useEffect } from "react"
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


// main APP
function App(props) {
  const [status, setStatus] = useState("Not delivered")
  const [checked, setChecked] = useState(false)
  const [name, setName] = useState("Jan")
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState([])
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
    </div>
  );
}
}

export default App;
