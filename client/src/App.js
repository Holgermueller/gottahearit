import React, { Fragment } from "react";
import Header from "./layout/Header";
import Nav from "./components/nav/nav";
import Login from "./components/Login/LoginPage";
import Registration from "./components/Registration/RegistrationPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Fragment>
          <div id="quote-box" className="App">
            <Header />
            <Nav />
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
          </div>
        </Fragment>
      </Router>
      <ToastContainer />
    </>
  );
}
