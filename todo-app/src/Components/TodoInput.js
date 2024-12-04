import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (inputText.trim() === "") {
      setError(true);
    } else {
      props.addList(inputText);
      setInputText("");
      setError(false);
    }
  };

  return (
    <div className="input-container">
      <div className="input-row">
        <input
          type="text"
          className="input-box-todo"
          placeholder="Enter your todo task"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setError(false);
          }}
          onKeyDown={handleEnterPress}
        ></input>
        <button className="add-btn" onClick={handleAddTask}>
          +
        </button>
      </div>
      {/* Display the error message if the field is required */}
      {/* Lets test this */}
      {error && <p className="error-message">This field is required!</p>}

      {/* <div>{inputText}</div> */}
    </div>
  );
};

export default TodoInput;
