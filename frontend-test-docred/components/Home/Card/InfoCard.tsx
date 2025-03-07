"use client";
import styles from "@/styles/Components/Card/Card.module.css";
import Image from "next/image";
import { transformDate } from "../../../utils/transformDate";
import { AiFillPushpin } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Character } from "@/types/types";
const InfoCard = ({
  name,
  image,
  species,
  status,
  created,
  location
}: Character) => {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => router.push("/details")}>
      <Image
        src={image}
        width={180}
        height={115}
        alt={`Character ${name} image`}
      />
      <div className={styles.detailsContainer}>
        <div className={styles.badgeContainer}>
          <span className={styles.badge}>{species}</span>
          <span className={styles.badge}>{status}</span>
        </div>
        <h3>{name}</h3>
        <p style={{ marginTop: ".3rem", color: "#7A7981" }}>{location.name}</p>
        <p className={styles.monthBadge}>
          <AiFillPushpin />
          {transformDate(created)}
        </p>
      </div>
    </div>
  );
};
export default InfoCard;
