import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMusic } from "../../features/music/musicSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddItem() {
  const [formData, setFormData] = useState({
    artist: "",
    title: "",
    type: "",
  });

  const { artist, title, type } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const musicData = {
      artist,
      title,
      type,
    };

    dispatch(addMusic(musicData));
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
            value={artist}
            name="artist"
            onChange={handleChange}
          ></Form.Control>
          <Form.Control
            className="input"
            type="text"
            id="title"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          ></Form.Control>

          <Form.Select
            aria-label="format-select"
            className="input"
            type="select"
            id="type"
            name="type"
            value={type}
            onChange={handleChange}
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
