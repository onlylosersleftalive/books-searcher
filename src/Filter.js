import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="categories-filter">
        <label>Categories:</label>
        <select>
          <option value="All">All</option>
          <option value="Art">Art</option>
          <option value="Biography">Biography</option>
          <option value="Computers">Computers</option>
          <option value="History">History</option>
          <option value="Medical">Medical</option>
          <option value="Poetry">Poetry</option>
        </select>
      </div>
      <div className="sort-filter">
        <label>Sort by:</label>
        <select>
          <option value="relevence">Relevence</option>
          <option value="newest">Newest</option>
          <option value="liked">Liked</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
