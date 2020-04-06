import React from "react";
import styles from "./footer.module.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../../assets/stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h5 className={styles.title}>Dolcenadaa</h5>
        <ul className={styles.description}>
          <li>
            <Link to="/#info">Info</Link>
          </li>
          <li>
            <Link to="/#info">Contact</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/dolcenadaa/">@dolcenadaa</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default withRouter(connect(mapStateToProps, {})(Footer));
