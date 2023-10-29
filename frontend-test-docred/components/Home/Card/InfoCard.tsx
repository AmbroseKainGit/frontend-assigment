import styles from "@/styles/Components/Card/Card.module.css";
import Image from "next/image";
interface CardProps extends Character {}
const InfoCard = ({ name, image, species, status }: CardProps) => {
  return (
    <div className={styles.container}>
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
      </div>
    </div>
  );
};
export default InfoCard;
