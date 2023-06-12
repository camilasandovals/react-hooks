import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const people = ["Alex", "Ali", "Anna"]
console.log(people[1])

//destructuring
const [first, ,third] = ["Alex", "Ali", "Anna"]
console.log(third)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name ="Alex"/>
  </React.StrictMode>
);

