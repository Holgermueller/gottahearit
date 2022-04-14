import React from "react";
import { useInput } from "../hooks/useInput";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(password, email);
    resetEmail();
    resetPassword();
  };

  return (
    <section className="form-section">
      <h2>Log In</h2>
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
          </Form.Text>
          <Form.Control
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            {...bindPassword}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <div>
        <span>Don't have an account? </span>
        <span
          className="registrationLink"
          onClick={() => navigate("/registration")}
        >
          Register
        </span>
      </div>
    </section>
  );
}

export default Login;
