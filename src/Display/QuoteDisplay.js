import React from "react";
import { useSelector } from "react-redux";

const display = {
  width: "65%",
  margin: "8% auto",
};

export default function QuoteDisplay() {
  const { quotes } = useSelector((state) => state.quotes);
  return (
    <div style={display} className="py-5 rounded-3 container-fluid bg-light">
      <div>{quotes}</div>
      <h2 id="text" className="display-5 fw-bold"></h2>
    </div>
  );
}
