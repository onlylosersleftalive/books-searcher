import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Filter from "./Filter";
import Books from "./Books";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("all");
  const [sortedBooks, setSortedBooks] = useState([]);
  const [booksNumber, setBooksNumber] = useState(0);

  useEffect(() => {
    filterHandler();
  }, [booksData, selectedSort]);

  const saveDataHandler = (recievedBooksData) => {
    setBooksData(recievedBooksData.items);
    setBooksNumber(recievedBooksData.totalItems);
  };

  const sortChangeHandler = (sort) => {
    setSelectedSort(sort);
  };

  const filterHandler = () => {
    if (selectedSort === "liked") {
      setSortedBooks(booksData.filter((el) => el.liked === true));
    } else {
      setSortedBooks(booksData);
    }
  };

  return (
    <div className="App">
      <section className="search-section">
        <h1>Let's find books for you</h1>
        <Form saveData={saveDataHandler} />
        <Filter selectedSort={selectedSort} sortChange={sortChangeHandler} />
      </section>
      <Books
        booksInfo={booksData}
        sortedBooks={sortedBooks}
        changeBooksData={setBooksData}
        totalAmount={booksNumber}
      />
    </div>
  );
}

export default App;
