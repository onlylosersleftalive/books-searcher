import "./Books.css";
import BookCard from "./BookCard";

const Books = (props) => {
  return (
    <section>
      <p className="results-numbergit ">Found {props.totalAmount} results</p>
      <div className="results-section">
        {" "}
        {props?.booksInfo?.map((book, index) => (
          <BookCard
            key={index}
            image={
              book.volumeInfo.hasOwnProperty("imageLinks") === false
                ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"
                : book.volumeInfo.imageLinks.thumbnail
            }
            title={book.volumeInfo?.title}
            author={book.volumeInfo?.authors}
            publishedDate={
              book.volumeInfo.hasOwnProperty("publishedDate") === false
                ? "0000"
                : book.volumeInfo?.publishedDate
            }
            category={book.volumeInfo?.categories}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
