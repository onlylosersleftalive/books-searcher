import "./BookCard.css";

const BookCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt="The book cover" />
      </div>
      <div className="actions-container">
        <button>
          <i class="far fa-heart"></i>
        </button>
        <button>
          <i class="fas fa-trash"></i>
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
