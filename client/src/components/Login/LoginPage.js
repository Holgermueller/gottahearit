import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
  };

  const navigate = useNavigate();

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
            value={email}
            onChange={onChange}
          ></Form.Control>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
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
