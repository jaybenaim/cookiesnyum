﻿import React from "react";
import "../../assets/stylesheets/home.css";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import FeaturedSlider from "./FeaturedSlider";
import AboutUs from "./AboutUs";
import Info from "./Info";
import { withRouter } from "react-router-dom";
import { defaultDisplay } from "./FeaturedProductsSlider/featuredProducts";
import strawberryPoptart from "../../assets/images/strawberryPoptart.png";
const Home = ({ fade, errors }) => {
  return (
    <>
      <main id="mainContent">
        <img src={strawberryPoptart} alt="test" />
        <div className={fade}>
          {fade !== "fade-background" && (
            <>
              <section className="featured-slider">
                <FeaturedSlider />
                <br />
              </section>
              {window.innerHeight > 400 && <hr />}
              <section className="featured-products-slider">
                <FeaturedProductsSlider defaultDisplay={defaultDisplay} />
              </section>
              {window.innerHeight > 400 && <hr />}

              <section className="about-us">
                <AboutUs />
              </section>
              <hr />
              <section className="info">
                <Info />
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};
export default withRouter(Home);
