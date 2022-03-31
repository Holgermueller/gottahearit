import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Dashboard.css";

function Dashboard(props) {
  const [state] = useState({
    filterTerm: "",
  });

  return (
    <section>
      <h2>Dashboard</h2>

      <div className="btn-group">
        <Button>Buy It</Button>
        <Button>Borrow It</Button>
        <Button>Pass</Button>
      </div>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="text"
            id="filterTerm"
            value={state.filterTerm}
            placeholder="Filter by name..."
          ></Form.Control>
        </Form.Group>
      </Form>

      <h3>A list will go here</h3>
    </section>
  );
}

export default Dashboard;
