import React from "react";
import Header from "./layout/header";
import Nav from "./nav/nav";
import Footer from "./layout/footer";

import "./App.css";

export default function App() {
  return (
    <div id="quote-box" className="App">
      <Header />
      <Nav />
      <h1>Forms and stuff go here...</h1>
      <Footer />
    </div>
  );
}
