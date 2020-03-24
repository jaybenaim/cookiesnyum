import React from "react";
import "../../assets/stylesheets/home.css";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import FeaturedSlider from "./FeaturedSlider";

const Home = ({ fade }) => {
  return (
    <main id="mainContent">
      <div className={fade}>
        <section className="featured-slider">
          <FeaturedSlider />
          <br />
          <hr />
        </section>
        <section className="featured-products">
          <FeaturedProductsSlider />
        </section>
      </div>
    </main>
  );
};
export default Home;
