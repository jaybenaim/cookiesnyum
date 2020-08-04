import React from "react";
import dozen from "../../../assets/images/promotions/dozen.jpg";
import easter from "../../../assets/images/promotions/easter.JPG";
import "../../../assets/stylesheets/featuredSlider.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link, withRouter } from "react-router-dom";
import { toggleNavbar } from "../../../redux/actions/navbarActions";
import { connect } from "react-redux";

const FeaturedSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    pauseOnDotsHover: true,
  };

  return (
    <>
      <Slider {...settings} id="featured">
        <div className={`featured-slide  fade-in`}>
          <img
            src={dozen}
            alt="chocolate-cookie"
            height={50}
            width={"100%"}
          ></img>
          <div className="text-box secondary-font">
            <h3 className="primary-font">
              Assortment of Stuffed Cookies, Scones and Biscotti
            </h3>
            <p>Our products are uniquely hand crafted and simply delicious </p>
            <Link className="featured-products-link btn" to="/products">
              {" "}
              See All Of Our Products{" "}
            </Link>
          </div>
        </div>
        <div className="featured-slide  ">
          <img
            src="https://via.placeholder.com/250"
            alt="chocolate-cookie "
            height={40}
            width={40}
          ></img>
          <div className="text-box secondary-font">
            <h3 className="primary-font">By The Dozen</h3>
            <p>
              Create your box with any amount of stuffed cookies, scones, or
              biscotti.
            </p>
            <Link className="featured-products-link btn" to="/products">
              {" "}
              See Our Featured Products{" "}
            </Link>
          </div>
        </div>
        <div className="featured-slide ">
          <img src={easter} alt="chocolate-cookie" height={40} width={40}></img>
          <div className="text-box secondary-font">
            <h3 className="primary-font">Happy Easter!</h3>
            <p>Check out our Mini Egg Easter Feature</p>
            <Link
              className="featured-products-link btn"
              to={{
                pathname: "/products",
                state: { gallery: { filter: "featured" } },
              }}
            >
              {" "}
              See Our Featured Items{" "}
            </Link>
          </div>
        </div>
      </Slider>
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  navbar: state.navbar,
});
export default withRouter(
  connect(mapStateToProps, { toggleNavbar })(FeaturedSlider)
);
