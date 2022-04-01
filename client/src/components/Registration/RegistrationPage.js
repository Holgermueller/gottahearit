import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./RegistrationPage.css";

function Registration(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <section className="form-section">
      <h2>Register Here</h2>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="email"
            id="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          ></Form.Control>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>{" "}
          <Form.Control
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          ></Form.Control>
          <Form.Control
            className="input"
            type="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            value={state.confirmPassword}
            onChange={handleChange}
          ></Form.Control>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </section>
  );
}

export default Registration;
