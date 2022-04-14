import React from "react";
import { useInput } from "../hooks/useInput";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RegistrationPage.css";

function Registration(props) {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const {
    value: confirmPassword,
    bind: bindConfirmPassword,
    reset: resetConfirmPassword,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(password, confirmPassword, email);

    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  return (
    <section className="form-section">
      <h2>Register Here</h2>

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="email"
            id="email"
            placeholder="Email"
            {...bindEmail}
          ></Form.Control>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>{" "}
          <Form.Control
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            {...bindPassword}
          ></Form.Control>
          <Form.Control
            className="input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            {...bindConfirmPassword}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </section>
  );
}

export default Registration;
