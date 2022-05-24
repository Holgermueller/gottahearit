import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addMusic } from "../../features/music/musicSlice";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddItem() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    artist: "",
    title: "",
    type: "",
  });

  const { artist, title } = formData;

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artist === "" && title === "") {
      toast.error("Please fill out both fields");
    }

    const musicData = {
      artist,
      title,
    };

    dispatch(addMusic(musicData));

    handleClose();
  };

  return (
    <>
      <button onClick={handleShow}>Add Item</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Itemn</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="form">
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
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;
