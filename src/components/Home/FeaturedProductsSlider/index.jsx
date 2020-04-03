import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../assets/stylesheets/featuredProductsSlider.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import { featuredProducts, settings } from "./featuredProductsSliderConfig";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProductsSlider = props => {
  const featuredProductElements = featuredProducts.map((product, i) => (
    <FeaturedProduct key={i} {...product} />
  ));

  return (
    <>
      <div className="featured-products-slider">
        <h3 className="primary-font">What We Offer</h3>
        <Slider {...settings}>{featuredProductElements}</Slider>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default withRouter(connect(mapStateToProps, {})(FeaturedProductsSlider));
