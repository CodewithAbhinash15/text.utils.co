import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=> {
    // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

    }
     const handleloClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
     }
      const handleClearClick =()=>{
        let newText = ' ';
        setText(newText);
      }
    const handleOnChange = (Event)=>{
        // console.log("On Change");
        setText(Event.target.value);
    }
    const[text, setText] = useState('');
    
  return (
    <>
    <div className='container'>
      
            {/* <h1>{props.heading}</h1> */}
            <div className="mb-3">
           <h1><label for="my Box" className="form-label">Enter the Text to Analyse Below </label></h1>
           <textarea className="form-control"value={text} onChange={handleOnChange} id="my Box" rows="3"></textarea>
          <button className="btn btn-primary mx-2"onClick={handleUpClick}> Convert to uppercase</button>
          <button className="btn btn-primary mx-2"onClick={handleloClick}> Convert to Lowercase</button>
          <button className="btn btn-primary mx-2"onClick={handleClearClick}>Clear Texts</button>
</div>
    </div>
    <div className='container'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Length</p>
        <h2>Preview</h2>
        <p>{text}</p>
        
    </div>
    </>
  )
}
