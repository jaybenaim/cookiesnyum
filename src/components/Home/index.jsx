import React from "react";
import "../../assets/stylesheets/home.css";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import FeaturedSlider from "./FeaturedSlider";
import AboutUs from "./AboutUs";
import Info from "./Info";

const Home = ({ fade }) => {
  return (
    <>
      <main id="mainContent">
        <div className={fade}>
          <section className="featured-slider">
            <FeaturedSlider />
            <br />
          </section>
          <hr />
          <section className="featured-products-slider">
            <FeaturedProductsSlider />
          </section>
          <hr />
          <section className="about-us">
            <AboutUs />
          </section>
          <hr />
          <section className="info">
            <Info />
          </section>
        </div>
      </main>
    </>
  );
};
export default Home;
