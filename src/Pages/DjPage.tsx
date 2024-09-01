import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { useParams } from "react-router-dom";

export const DjPage = () => {
  const { id } = useParams();
  const { videos } = useContext(VideoContext);

  const selectedDj = videos.find(
    (video) => video.snippet.resourceId.videoId === id
  );
  return <>{selectedDj?.snippet.title}</>;
};
