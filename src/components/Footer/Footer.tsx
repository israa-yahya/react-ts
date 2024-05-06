// components/Footer.js

import React from "react";
import styles from "./Footer.module.css"; // Import CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons"; // Import faRss from free-solid-svg-icons
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {/* Footer content */}
      <div className={styles.footer_content}>
        <div className={styles.footer_copyright}>{t("footer")}</div>
        <ul className={styles.icons}>
          <li className={styles.icon}>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="#">
              <FontAwesomeIcon icon={faRss} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
