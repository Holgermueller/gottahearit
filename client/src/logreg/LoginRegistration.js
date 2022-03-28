import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginRegistration.css";

export default class LogReg extends Component {
  render() {
    return (
      <section className="form-section">
        <h2>Log In</h2>
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Control
              className="input"
              type="email"
              placeholder="email"
            ></Form.Control>
            <Form.Control
              className="input"
              type="password"
              placeholder="password"
            ></Form.Control>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
        <Button className="register-link">Register here</Button>
      </section>
    );
  }
}
