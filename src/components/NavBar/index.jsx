import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../assets/stylesheets/navbar.css";
import logo from "../../assets/images/logo.JPG";

// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = ({ showNav, nav, fadeBackground, fade }) => {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>

      <nav
        className={`navbar navbar-expand-sm navbar-light border-bottom ${fade}`}
      >
        {nav && (
          <div className="nav-collapse left-nav">
            <Link
              className="nav-item nav-link active"
              to="/"
              onClick={() => showNav(!nav)}
            >
              Home
            </Link>
          </div>
        )}
        <div className="logo">
          <Link className="navbar-brand" to="/">
            {fade !== "fade-background" && (
              <img
                src={logo}
                alt="logo cookie with a bite"
                height={100}
                width={100}
              />
            )}
          </Link>
        </div>

        <button class="navbar-toggler" type="button">
          <span
            class="navbar-toggler-icon"
            onClick={() => {
              showNav(!nav);
              fadeBackground(!nav ? "fade-background" : "");
            }}
          ></span>
        </button>
        {/* If nav is expanded */}
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
