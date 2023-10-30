"use client";
import VideoPlayer from "@/components/Detail/VideoPlayer/VideoPlayer";
import styles from "@/styles/Detail/Detail.module.css";
import { useRef } from "react";
export default function Details() {
  const playerRef = useRef(null);
  const handleSeek = (time: number) => {
    if (playerRef.current) {
      // @ts-ignore
      playerRef.current.seekTo(time, "seconds");
    }
  };
  return (
    <div className={styles.detailContainer}>
      <div className={styles.videoContainer}>
        <div style={{ maxWidth: 800 }}>
          <VideoPlayer
            playerRef={playerRef}
            videoUrl="https://www.youtube.com/watch?v=ZVnjOPwW4ZA"
          />
        </div>

        <div className={styles.chapters}>
          <div className={styles.chapter}>
            <span>Nextjs Fundamentals</span>
            <span onClick={() => handleSeek(200)}>Go To</span>
          </div>
          <div className={styles.chapter}>
            <span>Creating Your First Nextjs Project</span>
            <span onClick={() => handleSeek(483)}>Go To</span>
          </div>
          <div className={styles.chapter}>
            <span>Data Fetching</span>
            <span onClick={() => handleSeek(1680)}>Go To</span>
          </div>
          <div className={styles.chapter}>
            <span>Static And Dynamic Rendering</span>
            <span onClick={() => handleSeek(2165)}>Go To</span>
          </div>
          <div className={styles.chapter}>
            <span>Tailwing CSS</span>
            <span onClick={() => handleSeek(2840)}>Go To</span>
          </div>
        </div>
      </div>
    </div>
  );
}
