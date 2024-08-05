import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange = (event)=>{
        setText(event.target.value);    
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#18191a'}}>
        <h1 className='mb-3'>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#305476':'white', color: props.mode==='dark'?'#FFFAFA':'#18191a'}} value={text} placeholder="Enter text here" onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
        <button disabled={text.length===0} name="uppercase" className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button> {""} 
        <button disabled={text.length===0} name="lowercase" className="btn btn-success mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button> {""}
        <button disabled={text.length===0} name="clear" className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button> {""}
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-success mx-1 my-1">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#18191a'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
