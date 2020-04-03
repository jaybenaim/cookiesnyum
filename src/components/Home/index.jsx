import React from "react";
import "../../assets/stylesheets/home.css";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import FeaturedSlider from "./FeaturedSlider";
import AboutUs from "./AboutUs";
import Info from "./Info";
import { withRouter } from "react-router-dom";
import { featuredProducts } from "./FeaturedProductsSlider/featuredProductsSliderConfig";
import { connect } from "react-redux";
import { toggleNavbar } from "../../redux/actions/navbarActions";
const Home = props => {
  const {
    fade,
    errors,
    navbar: { showDesktopNavbar }
  } = props;
  return (
    <>
      <main id="mainContent">
        <div className={fade}>
          {fade !== "fade-background" && (
            <>
              <section
                className="featured-slider"
                onMouseEnter={() => props.toggleNavbar(showDesktopNavbar)}
                onMouseLeave={() => props.toggleNavbar(showDesktopNavbar)}
              >
                <FeaturedSlider />

                <br />
              </section>
              {window.innerHeight > 400 && <hr />}
              <section className="featured-products-slider">
                <FeaturedProductsSlider featuredProducts={featuredProducts} />
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
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  navbar: state.navbar
});
export default withRouter(connect(mapStateToProps, { toggleNavbar })(Home));
