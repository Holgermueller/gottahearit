import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Dashboard.css";

function Dashboard(props) {
  const { music } = useSelector((state) => state.music);
  const [state, setState] = useState({
    filterTerm: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <section>
      <h2>Dashboard</h2>

      <div className="btn-group">
        <Button>Unheard</Button>
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
            onChange={handleChange}
            placeholder="Filter by name..."
          ></Form.Control>
        </Form.Group>
      </Form>

      {music.map((music) => (
        <Card className="list-card" key={music.id}>
          <Card.Body>
            <Card.Title>{music.artist}</Card.Title>
            <Card.Text>{music.title}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}

export default Dashboard;
