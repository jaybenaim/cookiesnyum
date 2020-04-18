import React from "react";
import { logoutUser } from "../../redux/actions/authActions";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
const Auth = (props) => {
  const {
    auth: {
      user: { name },
      isAuthenticated,
    },
    logoutUser: handleLogoutUser,
  } = props;

  const onLogoutClick = (e) => {
    e.preventDefault();
    handleLogoutUser();
  };

  return !isAuthenticated ? (
    <div className="auth-content">
      <Link
        to="/login"
        id="login"
        className="btn btn-large  waves-effect waves-light hoverable auth-link sidenav-close"
      >
        Log In
      </Link>

      <Link
        to="/register"
        id="register"
        className="btn btn-large waves-effect waves-light hoverable accent-3 auth-link sidenav-close"
      >
        Register
      </Link>
    </div>
  ) : (
    <div className="auth-content">
      <button
        id="logout"
        onClick={(e) => onLogoutClick(e)}
        className="btn btn-large waves-effect waves-light hoverable  accent-3 auth-link sidenav-close"
      >
        Logout <span className="auth-content--name"> {name}?</span>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { logoutUser })(Auth));
