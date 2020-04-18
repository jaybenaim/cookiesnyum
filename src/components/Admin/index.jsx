import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../../assets/stylesheets/admin.css";

const Admin = ({ user: { role } }) => {
  useEffect(() => {
    if (role === "admin") {
      window.location.href = "https://dolcenadaa.herokuapp.com/admin/login";
    } else {
      window.location.href = "/404";
    }
  }, []);
  return <div className="container"></div>;
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default withRouter(connect(mapStateToProps, {})(Admin));
