import React, { useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function nav(props) {
  const navigate = useNavigate();

  return (
    <section id="navigation" className="m-2">
      <ul>
        <li onClick={() => navigate("/")}>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Add an Item</a>
        </li>
        <li>
          <a href="#">Log Out</a>
        </li>
      </ul>
    </section>
  );
}

export default nav;
