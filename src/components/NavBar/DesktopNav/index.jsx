import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../navbar.module.css";
import "../../../assets/stylesheets/navbar.css";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
const navLinkStyle = {
  width: "140px",
  borderRadius: "3px",
  letterSpacing: "1.5px"
};
const DesktopNav = ({
  showNav,
  fadeBackground,
  auth: { isAuthenticated },
  logoutUser: handleLogoutUser
}) => {
  const onLogoutClick = e => {
    e.preventDefault();
    handleLogoutUser();
  };
  return (
    <>
      {!isAuthenticated ? (
        <div className="desktop-nav">
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
        <div className="desktop-nav">
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
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { logoutUser })(withRouter(DesktopNav));
