import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../../assets/stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h5>Cookies & Yum </h5>
        <ul>
          <li>
            <Link to="/#info">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li style={{ minWidth: "200px" }}>This is a demo.</li>
        </ul>
      </div>
    </footer>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, {})(Footer));
