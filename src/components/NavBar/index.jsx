import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../assets/stylesheets/navbar.css";
import logo from "../../assets/images/logo.JPG";

// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = ({ showNav, nav, fadeBackground, fade }) => {
  const navLinkStyle = {
    width: "140px",
    borderRadius: "3px",
    letterSpacing: "1.5px"
  };
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>

      <nav
        className={`navbar navbar-expand-sm navbar-light border-bottom ${fade}`}
      >
        {nav && (
          <>
            <div className={`nav-collapse left-nav`}>
              <Link
                className="col s5  center black-text"
                to="/dolcenadaa"
                style={navLinkStyle}
                onClick={() => {
                  showNav(!nav);
                  fadeBackground("");
                }}
              >
                Home
              </Link>
              <Link
                to="/register"
                style={navLinkStyle}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>

              <Link
                to="/login"
                style={navLinkStyle}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
            <div className="expanded-logo">
              <Link className="expanded-navbar-brand" to="/dolcenadaa">
                {fade === "fade-background" && (
                  <img
                    src={logo}
                    alt="logo cookie with a bite"
                    height={180}
                    width={180}
                  />
                )}
              </Link>
            </div>
          </>
        )}
        <div className="logo">
          <Link className="navbar-brand" to="/dolcenadaa">
            {fade !== "fade-background" && (
              <img
                src={logo}
                alt="logo cookie with a bite"
                height={180}
                width={180}
              />
            )}
          </Link>
        </div>

        <button className="navbar-toggler" type="button">
          <span
            className="navbar-toggler-icon"
            onClick={() => {
              showNav(!nav);
              fadeBackground(!nav ? "fade-background" : "");
            }}
          ></span>
        </button>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
