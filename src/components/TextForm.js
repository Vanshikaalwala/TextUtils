import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handlespeak = ()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraSpaces = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success")
    }

    const handleClearClick = ()=>{
        let newText= ""
        setText(newText);
        props.showAlert("Cleared text!", "success")
    }

    const handlechange= (event)=>{
        setText(event.target.value)
    }

    const [text, setText]= useState("")

  return (
    <>
        <div className="container">
            <h1 style={{color: props.mode==="light"?"black":"white"}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlechange} id="mybox" style={{backgroundColor: props.mode==="light"?"white":"grey",
                     color: props.mode==="light"?"black":"white"}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlespeak}>Speak</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
        </div>

        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} charecters</p>
            <p>{0.0008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} time to read words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
