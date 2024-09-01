import { createContext } from "react";
import { ISnippet } from "../models/ISnippet";

export interface IVideoProps {
  videos: ISnippet[];
}

export const VideoContext = createContext<IVideoProps>({
  videos: [],
});
