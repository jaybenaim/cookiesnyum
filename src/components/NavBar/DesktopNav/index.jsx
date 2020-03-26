import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import "../../../assets/stylesheets/navbar.css";
import "../../../assets/stylesheets/desktopNav.css";

const navLinkStyle = {
  width: "140px",
  borderRadius: "3px",
  letterSpacing: "1.5px"
};
const DesktopNav = ({
  showNav,
  fadeBackground,
  auth: {
    user: { name },
    isAuthenticated
  },
  logoutUser: handleLogoutUser
}) => {
  const onLogoutClick = e => {
    e.preventDefault();
    handleLogoutUser();
  };
  const [displayDesktopNav, toggleDesktopNav] = useState(false);
  const navClass = displayDesktopNav
    ? "desktop-nav desktop-nav-show"
    : "desktop-nav desktop-nav-hide";
  return (
    <>
      <div
        className="welcome-container"
        onMouseEnter={() => toggleDesktopNav(!displayDesktopNav)}
        onMouseLeave={() => toggleDesktopNav(!displayDesktopNav)}
      >
        {" "}
        {isAuthenticated ? "Hi, " + name : "Login"}
        {!isAuthenticated ? (
          <div className={navClass}>
            <Link
              to="/login"
              style={navLinkStyle}
              onClick={() => {
                showNav(false);
                fadeBackground("");
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
            </Link>
            <Link
              to="/register"
              style={navLinkStyle}
              onClick={() => {
                showNav(false);
                fadeBackground("");
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className={navClass}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => onLogoutClick(e)}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { logoutUser })(withRouter(DesktopNav));
