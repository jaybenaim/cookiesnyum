import React from "react";
import multiCookie from "../../../assets/images/footerImg/multiCookie.JPG";
import instagram from "../../../assets/images/instagram.png";
import pinkPhone from "../../../assets/images/pinkPhone.png";
import boxCentered from "../../../assets/images/boxCentered.png";
import boxCentered1 from "../../../assets/images/boxCentered1.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "../../../assets/stylesheets/info.css";

const Info = () => {
  return (
    <div id="info" className="business-info-grid">
      <div className="info-content">
        <h3 className="primary-font">Contact Us</h3>
        <div className="secondary-font">
          <p>Based in Vaughan, ON</p>
          <em>Rushed orders available for additional charge</em>
        </div>
        <div className="info-content--image-grid secondary-font">
          <img
            className="info-content--left-image"
            src={boxCentered1}
            width="120px"
            height="120px"
            alt="chocolate scone with melted chocolate inside showing"
          />
          <div className="info-content--hours">
            <strong>Hours:</strong>
            <p>
              Monday - Friday <br />
              9am - 6pm
            </p>
            <div className="info-content--phone">
              <strong>Phone:</strong>

              <a href="tel:4162743820">
                <img src={pinkPhone} alt="phone" className="phone-icon" />
                416 274 3820
              </a>
            </div>
          </div>
          <img
            className="info-content--right-image"
            src={boxCentered}
            width="150px"
            height="140px"
            alt="double dolce cookie melted in two halves dripping caramel"
          />
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/dolcenadaa/">
            <img src={instagram} alt="instagram-link"></img>
            <span>Follow us on Instagram @dolcenadaa</span>{" "}
          </a>
        </div>
      </div>
      {/* TODO:// move to footer */}
      <img
        src={multiCookie}
        alt="profile of owners"
        height="100%"
        width="100%"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, {})(Info));
