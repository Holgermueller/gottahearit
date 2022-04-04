import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
    }));

    console.log(state);
  };

  return (
    <section className="form-section">
      <h2>Log In</h2>
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
          </Form.Text>
          <Form.Control
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={() => handleSubmit}>
          Submit
        </Button>
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
