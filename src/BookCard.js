import "./BookCard.css";

const BookCard = (props) => {
  const deleteHandler = () => {
    props.changeBooksData(
      props.booksInfo?.filter((el) => el.id !== props.book.id)
    );
    console.log(props.book);
  };

  const likeHandler = () => {
    props.changeBooksData(
      props.booksInfo?.map((el) => {
        if (el.id === props.book.id) {
          return { ...el, liked: !props.book.liked };
        }
        return el;
      })
    );
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt="The book cover" />
      </div>
      <div className="actions-container">
        <button onClick={likeHandler}>
          {props.book.liked ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
        <button onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <div className="info-container">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>
          {props.publishedDate !== "0000"
            ? props.publishedDate.substr(0, 4)
            : ""}
        </p>
        <p>{props.category}</p>
      </div>
    </div>
  );
};

export default BookCard;
