import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

// handles to do input
function InputArea(props) {
  // use props to passover addItem function

  //keep track of the input state
  const [inputText, setInputText] = useState("");

  // handle change when new input updates
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="item">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="New Item"
      />
      <button
        className="add"
        onClick={() => {
          props.onAdd(inputText); //picks up input prop passed from APP.jsx
          setInputText(""); // reset the input text
        }}
      >
        <AddIcon />
      </button>
    </div>
  );
}

export default InputArea;
