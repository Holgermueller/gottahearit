import React, { Fragment } from "react";
import Header from "./layout/header";
import Nav from "./components/nav/nav";
import Login from "./components/Login/LoginPage";
import Registration from "./components/Registration/RegistrationPage";
import Dashboard from "./components/Dashboard/Dashboard";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./layout/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Fragment>
        <div id="quote-box" className="App">
          <Header />
          <Nav />
          <Routes>
            <Route exact path="/" element={<Login />} />

            <Route path="/registration" element={<Registration />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/addItem" element={<AddItem />} />
          </Routes>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
}
