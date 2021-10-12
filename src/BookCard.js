import "./BookCard.css";

const BookCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="The book cover" />
      <div>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
      </div>
    </div>
  );
};

export default BookCard;
