import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Dashboard.css";

function Dashboard(props) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSearchFilter = (e) => {
    setSearch(e.target.value);
  };

  const filteredMusic = !search
    ? music
    : music.filter((record) =>
        record.artist.toLowerCase().includes(search.toLowerCase())
      );

  const filterUnheard = (e) => {
    console.log("unheard");
  };

  const filterBuyIt = (e) => {
    console.log("buy it");
  };

  const filterBorrow = (e) => {
    console.log("borrow");
  };

  const filterPasses = (e) => {
    console.log("pass");
  };
  return (
    <section>
      <h2>Hello, {user && user.name}</h2>

      <div className="btn-group">
        <Button onClick={filterUnheard}>Unheard</Button>
        <Button onClick={filterBuyIt}>Buy It</Button>
        <Button onClick={filterBorrow}>Borrow It</Button>
        <Button onClick={filterPasses}>Pass</Button>
      </div>

      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Control
            className="input"
            type="text"
            id="filterTerm"
            value={search}
            onChange={handleSearchFilter}
            placeholder="Filter by name..."
          ></Form.Control>
        </Form.Group>
      </Form>

      {filteredMusic.length > 0 ? (
        <>
          {filteredMusic.map((music) => (
            <Card className="list-card" key={music.id}>
              <Card.Body>
                <Card.Title>{music.artist}</Card.Title>
                <Card.Text>{music.title}</Card.Text>
                <Card.Text>{music.rating}</Card.Text>
              </Card.Body>
            </Card>
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
