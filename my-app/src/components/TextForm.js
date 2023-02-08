import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  // For copy to clipboard
  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    alert('Text copied');
  }
  //for remove the extra space into the text
  const handleExtraSpaces = async () => {
    let newText=text;
    newText=newText.replace(/\s+/g, ' ');
    setText(newText)
  }

  //for clear the text
  const handleClear = () => {
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("Mew text");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    
    

    </div>
    </>
  );
}
