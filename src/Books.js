import "./Books.css";
import BookCard from "./BookCard";

const Books = (props) => {
  console.log(props.booksInfo);
  return (
    <section className="results-section">
      {props.booksInfo.map((book, index) => (
        <BookCard
          key={index}
          image={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
        />
      ))}
    </section>
  );
};

export default Books;
