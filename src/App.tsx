import { RouterProvider } from "react-router-dom";
import "./sass/App.scss";
import { router } from "./Router";
import { IVideoProps, VideoContext } from "./context/VideoContext";
import { useEffect, useState } from "react";
import { getVideos } from "./services/youtubeService";

function App() {
  const [videos, setVideos] = useState<IVideoProps>({
    videos: [],
  });

  useEffect(() => {
    const getVideoApi = async () => {
      const updatedVideos = await getVideos();
      setVideos({ ...videos, videos: updatedVideos.items });
    };
    getVideoApi();
  }, []);
  console.log(videos.videos);

  return (
    <>
      <VideoContext.Provider value={videos}>
        <RouterProvider router={router}></RouterProvider>
      </VideoContext.Provider>
    </>
  );
}

export default App;
