import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayQuoteOnLoad, getRandomQuote } from "./redux/quotes";
import "./App.css";

const display = {
  width: "65%",
  margin: "8% auto",
};

const button = {
  margin: "4 auto",
};

const twitterLink = {
  textDecoration: "none",
  margin: "4 auto",
};

export default function App() {
  const { quoteToDisplay } = useSelector((state) => state.quotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayQuoteOnLoad());
  }, [dispatch]);

  return (
    <div id="quote-box" className="App">
      <div style={display} className="py-5 rounded-3 container-fluid bg-light">
        <h2 id="text" className="display-5 fw-bold">
          {quoteToDisplay.quoteText}
        </h2>
        <h3 id="author">Speaker: {quoteToDisplay.speaker}</h3>
      </div>
      <button
        id="new-quote"
        className="btn btn-primary"
        style={button}
        onClick={() => dispatch(getRandomQuote())}
      >
        Get new Quote!
      </button>
      <div>
        <a
          style={twitterLink}
          id="tweet-quote"
          href="https://www.twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Tweet it!</h3>
        </a>
      </div>
    </div>
  );
}
