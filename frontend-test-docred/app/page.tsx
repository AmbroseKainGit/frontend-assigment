"use client"
import styles from "@/styles/Home/Home.module.css";
import InfoCard from "@/components/Home/Card/InfoCard";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <InfoCard />
    </div>
  );
}
