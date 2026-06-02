// import logo from './logo.svg';
// import './App.css';

// import About from "./About";
// import Todo from "./Todo";

// import Textform from "./Textform";
import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [Color,setColor]= useState("red")
  
  return (
    <>
    
    
     <h1>Digital Clock in React JS</h1> 
    <select onChange={(event)=> setColor(event.target.value)}>
      <option value={"red"}>Red</option>
      <option value={"blue"}>Blue</option>
      <option value={"green"}>Green</option>
      
      
    </select>
    {/* <Todo/>  */}
    {/* <Textform/>  */}
    <Clock Color={Color}/>
    
   


</>
  );
}

export default App;

