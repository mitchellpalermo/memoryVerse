import React, { useState, useEffect, useRef } from "react";

import "./css/App.scss";

export default function App() {
  const [practice, setPractice] = useState("".split());
  const [compareTo, setCompareTo] = useState("Hello, World!".split());

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  //    compare the array's character by character
  function determineMatch(incoming, index) {
    if (compareTo[index] == incoming[index]) {
      return true;
    }
  }

  var inputArray = [];
  var charToAdd = "";

  return (
    <div className="memory-verse">
      <h1>Memory Verse</h1>

      <div>
        <p>Your input should match what's shown below</p>
        <p>{compareTo}</p>
      </div>

      <div className="result-text">
        <p>Type your verse in the field below</p>

        {inputArray.map((character, index) => (
          <span
            className={`${determineMatch(character, index) ? "match" : null}`}
          >
            {character}
          </span>
        ))}
      </div>
      <input
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.keyCode == 8) {
            //remove the last letter
            inputArray.pop();
            console.log("delete key" + inputArray);
          } else {
            if (
              e.shiftKey == false &&
              e.metaKey == false &&
              e.ctrlKey == false &&
              e.altKey == false
            ) {
              //capture the letter
              //charToAdd = e.target.value.split("");
              //charToAdd = charToAdd[charToAdd.length - 1];
              //push the letter to the array
              if (
                /[a-zA-Z0-9-_ ]/.test(e.key) &&
                e.key != "Enter" &&
                e.key != "Tab" &&
                e.key != "CapsLock" &&
                e.key != "Escape" &&
                e.key != "ArrowUp" &&
                e.key != "ArrowRight" &&
                e.key != "ArrowLeft" &&
                e.key != "ArrowDown" &&
                e.key != "`"
              ) {
                inputArray.push(e.key);
                console.log("other key" + inputArray);
              }
            }
          }
        }}
      />
    </div>
  );
}
//for every time a letter is pressed, it should be added to the input array ✅
//each char is compared to the memory array and if the character is the same, apply correct css class ✅
//pop chars when backspace button is pressed ✅
