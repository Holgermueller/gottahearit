import React from "react";
import { useSelector } from "react-redux";

const display = {
  width: "65%",
  margin: "8% auto",
};

export default function QuoteDisplay() {
  const { quotes } = useSelector((state) => state);
  return (
    <div style={display} className="py-5 rounded-3 container-fluid bg-light">
      <h2 id="text" className="display-5 fw-bold">
        {quotes}
      </h2>
    </div>
  );
}
