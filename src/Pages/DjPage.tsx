import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { useParams } from "react-router-dom";
import { ProfileInformation } from "../components/videoCards/ProfileInformation";
import { VideoPresentation } from "../components/videoCards/videoPresentation";

export const DjPage = () => {
  const { id } = useParams();
  const { videos } = useContext(VideoContext);

  const selectedDj = videos.find(
    (video) => video.snippet.resourceId.videoId === id
  );

  return (
    <>
      <article className="profilePage">
        <h1 className="profilePage--title">{selectedDj?.snippet.title}</h1>
        <section className="videoContainer">
          <VideoPresentation selectedDj={selectedDj}></VideoPresentation>
        </section>

        <section className="infoContainer">
          <ProfileInformation selectedDj={selectedDj}></ProfileInformation>
        </section>
      </article>
    </>
  );
};
