"use client";
import styles from "@/styles/Components/DetailInformation/DetailInformation.module.css";
interface Props {
  children: React.ReactNode;
}
const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
