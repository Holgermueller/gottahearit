import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="quote-box" className="border border-primary rounded">
        <h2 className="jumbotron" id="text">
          quote goes here
        </h2>
        <h4 id="author">author goes here</h4>
        <button type="submit" className="btn btn-primary btn-lg" id="new-quote">
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default App;
