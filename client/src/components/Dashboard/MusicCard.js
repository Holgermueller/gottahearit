import { useDispatch } from "react-redux";
import { deleteMusic } from "../../features/music/musicSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MusicCard({ music }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="list-card" key={music._id}>
        <Card.Body>
          <Card.Title>{music.artist}</Card.Title>
          <Card.Text>{music.title}</Card.Text>
          <Card.Text>{music.type}</Card.Text>
        </Card.Body>
        <Button onClick={() => dispatch(deleteMusic(music._id))}>Delete</Button>
      </Card>
    </div>
  );
}

export default MusicCard;
