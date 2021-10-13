import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Filter from "./Filter";
import Books from "./Books";

function App() {
  const [booksData, setBooksData] = useState();

  const saveDataHandler = (recievedBooksData) => {
    setBooksData(() => {
      return recievedBooksData;
    });
  };

  return (
    <div className="App">
      <section className="search-section">
        <h1>Let's find books for you</h1>
        <Form onSaveData={saveDataHandler} />
        <Filter />
      </section>
      <Books booksInfo={booksData} />
    </div>
  );
}

export default App;
