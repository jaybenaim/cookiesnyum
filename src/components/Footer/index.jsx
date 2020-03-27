import React from "react";
import styles from "./footer.module.css";
import "../../assets/stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h5 className={styles.title}>dolcenadaa</h5>
        <ul className={styles.description}>
          <li>Info</li>
          <li>Contact</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
