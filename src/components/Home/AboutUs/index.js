import React from "react";
import "../../../assets/stylesheets/aboutUs.css";
import cookie1 from "../../../assets/images/cookie1.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-grid desktop-grid mobile-grid">
      <div className="right-side top">
        <img src={cookie1} alt="cookie" height={350} width={"100%"} />
      </div>
      <div className="left-side bottom">
        <h3>
          Your favourite dolce girls <br />
          Nada + Ashley
        </h3>
        <p>
          Magna ut pariatur minim eu est incididunt. Excepteur labore et ex duis
          incididunt mollit et dolore deserunt culpa occaecat. Aliquip ipsum et
          minim exercitation. Qui laborum excepteur voluptate incididunt anim
          voluptate magna dolor consectetur et ea occaecat. Ad enim voluptate
          officia eu eu est reprehenderit. Laborum non consequat et consequat
          deserunt. Exercitation voluptate in veniam cupidatat officia.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
