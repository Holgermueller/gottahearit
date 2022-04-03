import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddItem() {
  const [state, setState] = useState({
    artist: "",
    title: "",
    type: "",
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
      <h1> Add Item</h1>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="text"
            id="artist"
            placeholder="Artist"
            value={state.artist}
            onChange={handleChange}
          ></Form.Control>
          <Form.Control
            className="input"
            type="text"
            id="title"
            placeholder="Title"
            value={state.title}
            onChange={handleChange}
          ></Form.Control>

          <Form.Select>
            <option>Format</option>
            <option>Album</option>
            <option>EP</option>
            <option>Single</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </section>
  );
}

export default AddItem;
