import "./Filter.css";

const Filter = (props) => {
  const sortChangeHandler = (event) => {
    props.sortChange(event.target.value);
  };

  return (
    <div className="filter-container">
      <label>Sort by:</label>
      <select value={props.selectedSort} onChange={sortChangeHandler}>
        <option value="all">All</option>
        <option value="liked">Liked</option>
      </select>
    </div>
  );
};

export default Filter;
