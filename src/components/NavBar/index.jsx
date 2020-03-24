import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../assets/stylesheets/navbar.css";
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = ({ showNav, nav, fadeBackground }) => {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>

      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          dolcenadaa
        </Link>
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
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
