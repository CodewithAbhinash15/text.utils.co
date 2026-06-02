import { useEffect, useState } from "react";

const Clock = ({Color}) =>{
    const [time,setTime]= useState("green");
useEffect ( ()=>{
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());

    }, 1000);
    

},[] )
    
   return(
        <div>
        <h1 style={{color:Color,backgroundColor:"#000",width:"170px", padding:"10px",borderRadius:"2px",margin:"10px"}}>
            {time}</h1>
        </div>
    )
}

export default Clock;