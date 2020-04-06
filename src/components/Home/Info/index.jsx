import React from "react";
import multiCookie from "../../../assets/images/footerImg/multiCookie.JPG";
import instagram from "../../../assets/images/instagram.png";
import pinkPhone from "../../../assets/images/pinkPhone.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../../assets/stylesheets/info.css";

const Info = () => {
  return (
    <div id="info" className="business-info-grid">
      <div className="info-content">
        <h3 className="primary-font">Business Info</h3>
        <div className="secondary-font">
          <p>Based in Toronto, ON</p>
          <p>
            <strong>
              Please give at least 7 days notice for any order placed
            </strong>
          </p>
          <em>Rushed orders available for additional charge</em>

          <div>
            <strong>Hours:</strong>
            <p>
              Monday - Friday <br />
              9am - 6pm
            </p>
            <a href="tel:4162743820">
              <img src={pinkPhone} alt="phone" className="phone-icon" />
              416 274 3820
            </a>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/dolcenadaa/">
            <img src={instagram} alt="instagram-link"></img>
            <span>Follow us on Instagram @dolcenadaa</span>{" "}
          </a>
        </div>
      </div>
      <img
        src={multiCookie}
        alt="profile of owners"
        height="100%"
        width="100%"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default withRouter(connect(mapStateToProps, {})(Info));
