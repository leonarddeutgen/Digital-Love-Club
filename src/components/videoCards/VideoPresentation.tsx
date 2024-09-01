import { ISnippet } from "../../models/ISnippet";

interface VideoProps {
  selectedDj: ISnippet | undefined;
}
export const VideoPresentation = ({ selectedDj }: VideoProps) => {
  return (
    <>
      <iframe
        allowFullScreen
        className="videoContainer--video"
        src={`https://www.youtube.com/embed/${selectedDj?.snippet.resourceId.videoId}?si=${selectedDj?.snippet.resourceId.videoId}`}
      ></iframe>
    </>
  );
};
