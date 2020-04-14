import React from "react";
import { logoutUser } from "../../redux/actions/authActions";
import { withRouter } from "react-router-dom";
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
      <a
        href="/dolcenada/login"
        id="login"
        className="btn btn-large  waves-effect waves-light hoverable auth-link"
      >
        Log In
      </a>

      <a
        href="/dolcenada/register"
        id="register"
        className="btn btn-large waves-effect waves-light hoverable accent-3 auth-link"
      >
        Register
      </a>
    </div>
  ) : (
    <div className="auth-content">
      <button
        id="logout"
        onClick={(e) => onLogoutClick(e)}
        className="btn btn-large waves-effect waves-light hoverable  accent-3 auth-link"
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
