import React from "react";
import cookie1 from "../../../assets/images/cookie1.jpg";
import cookie2 from "../../../assets/images/cookie2.jpg";
import cookie3 from "../../../assets/images/cookie3.jpg";
import "../../../assets/stylesheets/featuredSlider.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const FeaturedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear"
  };

  return (
    <>
      <Slider {...settings} id="featured">
        <div className="featured-slide ">
          <img
            src={cookie1}
            alt="chocolate-cookie"
            height={50}
            width={50}
          ></img>
          <div className="text-box secondary-font">
            <h3>Chocolate love</h3>
            <p>
              Featuring our new choclate chip cookies with loads of chips ready
              for dipping in some milk{" "}
            </p>
            <button className="featured-products-link">
              {" "}
              See Our Featured Items{" "}
            </button>
          </div>
        </div>
        <div className="featured-slide  ">
          <img
            src={cookie2}
            alt="chocolate-cookie"
            height={40}
            width={40}
          ></img>
          <div className="text-box secondary-font">
            <h3>Boxes of 12 or more 50% off </h3>
            <p>
              Ready for mouth watering, take a look at our cookies by the dozen.{" "}
            </p>
            <button className="featured-products-link"> By the dozen </button>
          </div>
        </div>
        <div className="featured-slide ">
          <img
            src={cookie3}
            alt="chocolate-cookie"
            height={40}
            width={40}
          ></img>
          <div className="text-box secondary-font">
            <h3>Have you seen what's new?</h3>
            <p>
              New cookies weekly come back next week for the new cookie reveal.{" "}
            </p>
            <button className="featured-products-link"> New Cookies </button>
          </div>
        </div>
      </Slider>
    </>
  );
};
export default FeaturedSlider;
