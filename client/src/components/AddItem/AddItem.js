import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddItem() {
  const [state, setState] = useState({
    artist: "",
    title: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const musicData = {
      artist: state.artist,
      title: state.title,
      type: state.type,
    };
    console.log(musicData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(state);
  };

  return (
    <section className="form-section">
      <h1>Add Item</h1>

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

          <Form.Select
            aria-label="format-select"
            className="input"
            type="select"
            id="type"
            value={state.type}
            onChange={handleChange}
          >
            <option>Format</option>
            <option value={state.type}>Album</option>
            <option value={state.type}>EP</option>
            <option value={state.type}>Single</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default AddItem;
