"use client";
import DetailInformation from "@/components/Detail/DetailInformation/DetailInformation";
import VideoPlayer from "@/components/Detail/VideoPlayer/VideoPlayer";
import styles from "@/styles/Detail/Detail.module.css";
import { Chapters } from "@/types/types";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
export default function Details() {
  const [selectedTitle, setSelectedTitle] = useState<Chapters>(Chapters.DEFAULT);
  const playerRef = useRef<ReactPlayer | null>(null);
  const handleSeek = (time: number, title: Chapters) => {
    if (playerRef.current) {
      setSelectedTitle(title);
      playerRef.current.seekTo(time, "seconds");
    }
  };
  return (
    <div className={styles.detailContainer}>
      <div className={styles.videoContainer}>
        <div className={styles.videoPlayer}>
          <VideoPlayer
            playerRef={playerRef}
            videoUrl="https://www.youtube.com/watch?v=ZVnjOPwW4ZA"
          />
        </div>

        <div className={styles.chapters}>
          <div className={styles.chapter}>
            <span>{Chapters.NEXT_JS_FUNDAMENTALS}</span>
            <span
              onClick={() => handleSeek(200, Chapters.NEXT_JS_FUNDAMENTALS)}
            >
              Go To
            </span>
          </div>
          <div className={styles.chapter}>
            <span>{Chapters.CREATING_FIRST_PROJECT}</span>
            <span
              onClick={() => handleSeek(483, Chapters.CREATING_FIRST_PROJECT)}
            >
              Go To
            </span>
          </div>
          <div className={styles.chapter}>
            <span>{Chapters.DATA_FETCHING}</span>
            <span onClick={() => handleSeek(1680, Chapters.DATA_FETCHING)}>
              Go To
            </span>
          </div>
          <div className={styles.chapter}>
            <span>{Chapters.STATIC_DYNAMIC}</span>
            <span onClick={() => handleSeek(2165, Chapters.STATIC_DYNAMIC)}>
              Go To
            </span>
          </div>
          <div className={styles.chapter}>
            <span>{Chapters.TAILWIND}</span>
            <span onClick={() => handleSeek(2840, Chapters.TAILWIND)}>
              Go To
            </span>
          </div>
        </div>
      </div>
      <DetailInformation title={selectedTitle} />
    </div>
  );
}
