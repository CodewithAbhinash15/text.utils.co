function Todo(){
    function callfunc(){
        alert("Hello")
    }
    return(
        <div>
           <h1> Hello JSX</h1> 
           <button onClick={callfunc}> Click me</button>
           {/* <img 
        //    src="logo512.png" alt="pic" /> */}
            
        </div>
        
    )
}


export default Todo;

