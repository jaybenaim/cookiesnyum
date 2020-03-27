import React from "react";
import "../../../assets/stylesheets/aboutUs.css";
import profile from "../../../assets/images/profile.jpg";
import xoxo from "../../../assets/images/xoxo.png";

const AboutUs = ({ fade }) => {
  return (
    <>
      <div className="about-us-grid desktop-grid mobile-grid">
        <div className="right-side top">
          <img src={profile} alt="profile" height={350} width={"100%"} />
        </div>
        <div className="left-side bottom secondary-font">
          <h3>
            Your favourite dolce girls <br />
            Nada + Ashley
          </h3>

          <p>
            Magna ut pariatur minim eu est incididunt. Excepteur labore et ex
            duis incididunt mollit et dolore deserunt culpa occaecat. Aliquip
            ipsum et minim exercitation. Qui laborum excepteur voluptate
            incididunt anim voluptate magna dolor consectetur et ea occaecat. Ad
            enim voluptate officia eu eu est reprehenderit. Laborum non
            consequat et consequat deserunt. Exercitation voluptate in veniam
            cupidatat officia.
          </p>
          <img src={xoxo} alt="slogan" height={80} width={"40%"} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
