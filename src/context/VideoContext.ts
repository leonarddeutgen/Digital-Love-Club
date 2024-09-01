import { createContext } from "react";
import { ISnippet } from "../models/ISnippet";
import { IVideo } from "../models/IVideo";

export interface IVideoProps {
  videos: ISnippet[];
}

export const VideoContext = createContext<IVideoProps>({
  videos: [],
});
