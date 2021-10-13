import "./BookCard.css";

const BookCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt="The book cover" />
      </div>
      <div className="info-container">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
