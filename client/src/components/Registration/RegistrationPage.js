import React from "react";
import Form from "react-bootstrap/Form";

import "./RegistrationPage.css";

function Registration() {
  return (
    <section>
      <h2>Register Here</h2>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control></Form.Control>
          <Form.Control></Form.Control>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
}

export default Registration;
