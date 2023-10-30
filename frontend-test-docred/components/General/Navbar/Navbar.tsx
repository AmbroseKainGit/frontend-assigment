"use client";
import styles from "@/styles/Components/Navbar/NavBar.module.css";
import { FaLaptopMedical } from "react-icons/fa";
import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2
} from "react-icons/hi2";
import { BsCalendar3 } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.container}>
      <div className={styles.burger} onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
      <div className={styles.navbarBrand}>
        <Image
          src={"/DocRedLogo.webp"}
          width={113}
          height={21}
          style={{ maxHeight: 40 }}
          alt="Logo"
        />
      </div>
      <div className={styles.navbarCollapse}>
        <div className={styles.navbarItem}>
          <FaLaptopMedical />
          <div>Contenido médico</div>
        </div>
        <div className={styles.navbarItem}>
          <HiOutlineAcademicCap />
          <div>DocRed Académico</div>
        </div>
        <div className={styles.navbarItem}>
          <BsCalendar3 />
          <div>Eventos</div>
        </div>
        <div className={styles.navbarItem}>
          <HiOutlineBuildingOffice2 />
          <div>Canales</div>
        </div>
        <div className={styles.navbarItem}>
          <FaUserTie />
          <div>Para usted</div>
        </div>
      </div>
      <div
        className={`${styles.burgerContainer} ${isOpen === true && styles.active}`}
      >
        <div className={styles.navbarItem}>
          <FaLaptopMedical />
          <div>Contenido médico</div>
        </div>
        <div className={styles.navbarItem}>
          <HiOutlineAcademicCap />
          <div>DocRed Académico</div>
        </div>
        <div className={styles.navbarItem}>
          <BsCalendar3 />
          <div>Eventos</div>
        </div>
        <div className={styles.navbarItem}>
          <HiOutlineBuildingOffice2 />
          <div>Canales</div>
        </div>
        <div className={styles.navbarItem}>
          <FaUserTie />
          <div>Para usted</div>
        </div>
      </div>
      <div className={styles.navbarEnd}>
        <AiOutlineSearch />
        <IoNotificationsOutline />
        <AiOutlineUser />
      </div>
    </nav>
  );
};

export default Navbar;
