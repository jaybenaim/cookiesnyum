import React from "react";
import "../../assets/stylesheets/home.css";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import FeaturedSlider from "./FeaturedSlider";
import AboutUs from "./AboutUs";
import Info from "./Info";
import { withRouter } from "react-router-dom";
import { featuredProducts } from "./FeaturedProductsSlider/featuredProductsSliderConfig";

const Home = () => {
  return (
    <>
      <main id="mainContent">
        <div>TEST HELLO</div>
        <section className="featured-slider">
          <FeaturedSlider />
          <br />
        </section>
        {window.innerWidth > 400 && <hr />}
        <section className="featured-products-slider">
          <FeaturedProductsSlider featuredProducts={featuredProducts} />
        </section>
        {window.innerWidth > 400 && <hr />}

        <section className="about-us">
          <AboutUs />
        </section>
        {window.innerWidth > 400 && <hr />}

        <section className="info">
          <Info />
        </section>
      </main>
    </>
  );
};
export default withRouter(Home);
