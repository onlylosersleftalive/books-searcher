import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <section className="search-section">
        <h1>Let's find books for you</h1>
        <Form />
      </section>
      <section className="result-section"></section>
    </div>
  );
}

export default App;
