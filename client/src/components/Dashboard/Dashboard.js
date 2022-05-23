import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Spinner from "../../layout/Spinner";
import MusicCard from "./MusicCard";
import "./Dashboard.css";
import { getMusic, reset } from "../../features/music/musicSlice";

function Dashboard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { music, isLoading, isError, message } = useSelector(
    (state) => state.music
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getMusic());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  // const handleSearchFilter = (e) => {
  //   setSearch(e.target.value);
  // };

  // const filteredMusic = !search
  //   ? music
  //   : music.filter((record) =>
  //       record.artist.toLowerCase().includes(search.toLowerCase())
  //     );

  return (
    <section>
      <h2>Hello, {user && user.name}</h2>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="text"
            id="filterTerm"
            placeholder="Filter by name..."
          ></Form.Control>
        </Form.Group>
      </Form>

      {music.length > 0 ? (
        <>
          {music.map((music) => (
            <MusicCard key={music._id} music={music} />
          ))}
        </>
      ) : (
        <Card className="list-card">
          <Card.Body>
            <Card.Title>You have not added any music</Card.Title>
          </Card.Body>
        </Card>
      )}
    </section>
  );
}

export default Dashboard;
