"use client";
import ReactPlayer from "react-player";
interface Props {
  videoUrl: string;
  playerRef: any;
}
function VideoPlayer({ videoUrl, playerRef }: Props) {
  return (
    <ReactPlayer
      url={videoUrl}
      controls={true}
      width='100%'
      height="100%"
      ref={playerRef}
      style={{ minWidth: 300, minHeight: 300 }}
    />
  );
}

export default VideoPlayer;
