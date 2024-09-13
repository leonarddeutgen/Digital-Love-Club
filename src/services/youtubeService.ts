import { IVideo } from "../models/IVideo";
import { getData } from "./serviceBase";

export const getVideos = async (): Promise<IVideo> => {
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUuZuBuctUovKIH9JnSidSRA&key=${
    import.meta.env.VITE_REACT_APP_API_KEY
  }`;
  const data = await getData<IVideo>(url);

  return data;
};
