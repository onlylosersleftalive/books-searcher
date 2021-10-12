import "./Form.css";
import React, { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={inputChangeHandler} value={userInput} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
