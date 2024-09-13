import { useContext, useState } from "react";
import { VideoContext } from "../../context/VideoContext";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ListPresentation = () => {
  const { videos } = useContext(VideoContext);
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleClick = (videoID: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/djPage/${videoID}`);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        {videos.map((video, i) => (
          <Carousel.Item
            key={i}
            className="carousel--item"
            onClick={() => handleClick(video.snippet.resourceId.videoId)}
          >
            <div className="imgContainer">
              <img src={video.snippet.thumbnails.high.url} alt="" />
            </div>

            <Carousel.Caption>
              <h3>{video.snippet.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
