"use client";
import styles from "@/styles/Components/Footer/Footer.module.css";
import moment from "moment";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
const Footer = ({}) => {
  const year = moment().format("YYYY");
  return (
    <footer className={styles.container}>
        <span> DocRed {year} Todos los derechos reservados</span>
        {/* <div className={styles.iconContainer}>
          <BsFacebook />
          <AiFillTwitterCircle />
          <AiOutlineInstagram />
          <BiLogoLinkedin />
        </div> */}
    </footer>
  );
};

export default Footer;
