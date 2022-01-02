const display = {
  width: "65%",
  margin: "8% auto",
};

function QuoteDisplay() {
  return (
    <div style={display} className="py-5 rounded-3 container-fluid bg-light">
      <h2 id="text" className="display-5 fw-bold">
        quote goes here
      </h2>
    </div>
  );
}

export default QuoteDisplay;
