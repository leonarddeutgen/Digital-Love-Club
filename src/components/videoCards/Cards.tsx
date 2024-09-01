import { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const Cards = () => {
  const { videos } = useContext(VideoContext);
  const navigate = useNavigate();

  return (
    <>
      {videos.map((video) => {
        return (
          <Card
            style={{ width: "18rem" }}
            key={video.snippet.resourceId.videoId}
            onClick={() =>
              navigate(`/djPage/${video.snippet.resourceId.videoId}`)
            }
          >
            <Card.Img variant="top" src={video.snippet.thumbnails.high.url} />
            <Card.Body>
              <Card.Title>{video.snippet.title}</Card.Title>
              <Card.Text>
                {video.snippet.description.substring(0, 40)}...
              </Card.Text>
              <Button variant="primary">Check it out</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
