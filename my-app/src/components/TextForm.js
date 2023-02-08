import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };
  // For copy to clipboard
  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success")
  };
  //for remove the extra space into the text
  const handleExtraSpaces = async () => {
    let newText = text;
    newText = newText.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Remove Extra spaces!", "success")
  };

  //for clear the text
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the text!", "success")
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("Mew text");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCopyToClipboard}
        >
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
      </div> 
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
