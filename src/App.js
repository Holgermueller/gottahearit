import QuoteDisplay from "./Display/Display";
import "./App.css";

function App() {
  return (
    <div id="quote-box" className="App">
      <QuoteDisplay />

      <h4 id="author">author goes here</h4>
      <button type="submit" className="btn btn-primary btn-lg" id="new-quote">
        Get Quote
      </button>
    </div>
  );
}

export default App;
