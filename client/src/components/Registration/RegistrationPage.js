import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RegistrationPage.css";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../layout/Spinner";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords to not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="form-section">
      <h2>Register Here</h2>

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
          ></Form.Control>
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
          </Form.Text>{" "}
          <Form.Control
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          ></Form.Control>
          <Form.Control
            className="input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </section>
  );
}

export default Registration;
