import React from "react";
import Header from "./layout/header";
import Nav from "./nav/nav";
import LogReg from "./logreg/LoginRegistration";
import Footer from "./layout/footer";

import "./App.css";

export default function App() {
  return (
    <div id="quote-box" className="App">
      <Header />
      <Nav />
      <LogReg />
      <Footer />
    </div>
  );
}
