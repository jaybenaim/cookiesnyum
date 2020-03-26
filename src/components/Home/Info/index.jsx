import React from "react";
import cookie2 from "../../../assets/images/cookie2.jpg";
import instagram from "../../../assets/images/instagram.png";
import pinkPhone from "../../../assets/images/pinkPhone.png";
import "../../../assets/stylesheets/info.css";

const Info = () => {
  return (
    <div className="business-info-grid">
      <div className="info-content">
        <h3>Business Info</h3>
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
          <a href="tel:6476404714">
            <img src={pinkPhone} alt="phone" className="phone-icon" /> 647 000
            0000
          </a>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/dolcenadaa/">
            <img src={instagram} alt="instagram-link"></img>
            <span>Follow us on Instagram @dolcenadaa</span>{" "}
          </a>
        </div>
      </div>
      <img src={cookie2} alt="profile of owner" height="100%" width="100%" />
    </div>
  );
};

export default Info;
