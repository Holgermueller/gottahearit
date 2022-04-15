import React from "react";
import { useInput } from "../hooks/useInput";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddItem() {
  const { value: artist, bind: bindArtist, reset: resetArtist } = useInput("");
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: type, bind: bindType, reset: resetType } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(artist, title, type);

    resetArtist();
    resetTitle();
    resetType();
  };

  return (
    <section className="form-section">
      <h1>Add Item</h1>

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="text"
            id="artist"
            placeholder="Artist"
            {...bindArtist}
          ></Form.Control>
          <Form.Control
            className="input"
            type="text"
            id="title"
            placeholder="Title"
            {...bindTitle}
          ></Form.Control>

          <Form.Select
            aria-label="format-select"
            className="input"
            type="select"
            id="type"
            {...bindType}
          >
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
