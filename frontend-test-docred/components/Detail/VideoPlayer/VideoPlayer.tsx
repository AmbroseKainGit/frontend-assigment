"use client";
import ReactPlayer from "react-player";
interface Props {
  videoUrl: string;
}
function VideoPlayer({ videoUrl }: Props) {
  return (
    <ReactPlayer url={videoUrl} controls={true} width="50%" height="100%" />
  );
}

export default VideoPlayer;
