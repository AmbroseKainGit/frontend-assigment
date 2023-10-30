"use client";
import VideoPlayer from "@/components/Detail/VideoPlayer/VideoPlayer";
import styles from "@/styles/Detail/Detail.module.css";
export default function Details() {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.videoContainer}>
        <VideoPlayer videoUrl="https://www.youtube.com/watch?v=ZVnjOPwW4ZA" />
        <div className={styles.chapters}>
          <div className={styles.chapter}>
            <p>
              <span>Nutricion y estilo de vida en pediatria</span> Reproducir
            </p>
          </div>
          <div className={styles.chapter}>
            <p>
              <span>Nutricion y estilo de vida en pediatria</span> Reproducir
            </p>
          </div>
          <div className={styles.chapter}>
            <p>
              <span>Nutricion y estilo de vida en pediatria</span> Reproducir
            </p>
          </div>
          <div className={styles.chapter}>
            <p>
              <span>Nutricion y estilo de vida en pediatria</span> Reproducir
            </p>
          </div>
          <div className={styles.chapter}>
            <p>
              <span>Nutricion y estilo de vida en pediatria</span> Reproducir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
