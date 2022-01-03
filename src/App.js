import QuoteDisplay from "./Display/Display";
import AuthorDisplay from "./Display/AuthorDisplay";
import Button from "./Display/Button";
import TwitterButton from "./Display/TwitterButton";
import "./App.css";

function App() {
  return (
    <div id="quote-box" className="App">
      <QuoteDisplay />

      <AuthorDisplay />

      <Button />

      <TwitterButton />
    </div>
  );
}

export default App;
