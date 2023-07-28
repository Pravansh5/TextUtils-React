import React, { useState } from "react";
// import PropTypes from 'prop-types';
export default function (props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked "+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Upper Case","success")
  };
  const handleLowerClick = () => {
    // console.log("uppercase was clicked "+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lower Case","success")
  };
  const handleOnChnage = (event) => {
    // console.log("uppercase was clicked")
    setText(event.target.value);
  };

  const convertNextAfterDotToTitleCase = () => {
    let inputString = text;
    let result = "";
    let shouldCapitalizeNext = true; // Flag to check if the next character should be capitalized

    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
      const previousChar = inputString[i - 1];

      // Check if the current character is a dot (.)
      if (
        ((currentChar === " ") & (previousChar === ".")) |
        (currentChar === ".")
      ) {
        shouldCapitalizeNext = true;
        result += currentChar; // Add the dot to the result
      } else {
        // Convert the character to title case if the flag is true
        result += shouldCapitalizeNext
          ? currentChar.toUpperCase()
          : currentChar.toLowerCase();
        shouldCapitalizeNext = false; // Reset the flag after capitalization
      }
    }
    setText(result);
    props.showAlert(" Converted to Sentence Titel Case","success")
  };
  const convertNextAfterSpaceToTitleCase = () => {
    let inputString = text;
    let result = "";
    let shouldCapitalizeNext = true; // Flag to check if the next character should be capitalized

    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];

      // Check if the current character is a dot (.)
      if ((currentChar === " ") | (currentChar === ".")) {
        shouldCapitalizeNext = true;
        result += currentChar; // Add the dot to the result
      } else {
        // Convert the character to title case if the flag is true
        result += shouldCapitalizeNext
          ? currentChar.toUpperCase()
          : currentChar.toLowerCase();
        shouldCapitalizeNext = false; // Reset the flag after capitalization
      }
    }
    setText(result);
    props.showAlert(" Converted to Titel Case","success")
  };

  const removeExtraSpaces = () => {
    let inputString = text;
    const stringWithoutExtraSpaces = inputString.replace(/\s+/g, " ");

    // Trim leading and trailing spaces
    const trimmedString = stringWithoutExtraSpaces.trim();

    // return trimmedString;
    setText(trimmedString);
    props.showAlert(" Extra Space Removed","success")
  };
  const [text, setText] = useState("");
  // setText("Enter thex here 3")
  return (
    <div>
      <h1 style={{color:props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
      <div className="mz-3">
        <textarea
          
          className="form-control my-3"
          value={text}
          id="myBox"
          style={{backgroundColor:props.mode === 'dark' ? 'gray' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}}
          onChange={handleOnChnage}
          cols="30"
          rows="10"></textarea>
      </div>
      
      <button
        type="submit"
        className="btn btn-primary mx-2"
        onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2"
        onClick={handleLowerClick}>
        Convert to Lower Case
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2"
        onClick={convertNextAfterDotToTitleCase}>
        Title Case Sentences
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2"
        onClick={convertNextAfterSpaceToTitleCase}>
        Title Case
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2"
        onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 >Your Text Summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} Characters and Avg{" "}
          {text.split(" ").length * 0.008} minutes requiresto read the text
        </p>
        <h3>Preview</h3>
        <p>Enter something to preview here</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
