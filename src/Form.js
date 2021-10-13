import "./Form.css";
import React, { useState } from "react";
import request from "superagent";

const Form = (props) => {
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: userInput })
      .then((data) => {
        props.onSaveData(data.body.items);
      });
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
