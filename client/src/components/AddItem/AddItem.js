import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddItem() {
  const [state, setState] = useState({
    artist: "",
    title: "",
    type: "",
  });

  return (
    <section className="form-section">
      <h1> Add Item</h1>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control className="input"></Form.Control>

          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </section>
  );
}

export default AddItem;
