// Navbar.js

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlogs = () => {
    navigate("/");
  };

  const handleAddBlogs = () => {
    navigate("/addBlog");
  };

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img
          className={styles.logo}
          src="https://onextrapixel.com/wp-content/uploads/2017/03/oxp-logo4.png"
          alt="Logo"
        />
      </a>
      <div className={styles.navbar_content} id="navbarContent">
        <div className="menu">
          <button className={styles.button} onClick={handleBlogs}>
            {t("blogs")}
          </button>
        </div>
        <div className="menu">
          <button className={styles.button} onClick={handleAddBlogs}>
            {t("addBlogs")}
          </button>
        </div>
        <div className="menu">
          <FontAwesomeIcon
            icon={faEarthAmericas}
            className={styles.faEarthAmericas}
            onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
          />
          <span>{language}</span>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
