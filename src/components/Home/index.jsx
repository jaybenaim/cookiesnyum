import React from "react";
import "../../assets/stylesheets/home.css";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import FeaturedSlider from "./FeaturedSlider";
import AboutUs from "./AboutUs";
import Info from "./Info";
import { Redirect } from "react-router-dom";

const Home = ({ fade, errors }) => {
  return (
    <>
      <main id="mainContent">
        <div className={fade}>
          {fade !== "fade-background" && (
            <>
              <section className="featured-slider">
                <FeaturedSlider />
                <br />
              </section>
              {window.innerHeight > 400 && <hr />}
              <section className="featured-products-slider">
                <FeaturedProductsSlider />
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
export default Home;
