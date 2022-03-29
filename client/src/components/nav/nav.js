import React, { useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();

  return (
    <section id="navigation" className="m-2">
      <ul>
        <li onClick={() => navigate("/")}>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/addItem">Add an Item</a>
        </li>
        <li>
          <a href="#">Log Out</a>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
