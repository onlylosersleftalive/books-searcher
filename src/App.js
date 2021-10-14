import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Filter from "./Filter";
import Books from "./Books";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [chosenSort, setChosenSort] = useState("relevance");
  const [booksNumber, setBooksNumber] = useState(0);

  const saveDataHandler = (recievedBooksData) => {
    setBooksData(recievedBooksData.items);
    setBooksNumber(recievedBooksData.totalItems);
  };

  const sortChangeHandler = (sort) => {
    setChosenSort(sort);
  };

  return (
    <div className="App">
      <section className="search-section">
        <h1>Let's find books for you</h1>
        <Form onSaveData={saveDataHandler} selectedSort={chosenSort} />
        <Filter selectedSort={chosenSort} onSortChange={sortChangeHandler} />
      </section>
      <Books
        booksInfo={booksData}
        changeBooksData={setBooksData}
        totalAmount={booksNumber}
      />
    </div>
  );
}

export default App;
