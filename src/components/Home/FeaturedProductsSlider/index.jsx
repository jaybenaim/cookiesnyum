import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../assets/stylesheets/featuredProductsSlider.css";
import { filterGallery } from "../../../redux/actions/galleryActions";
import Slider from "react-slick";
import { connect } from "react-redux";
import { defaultDisplay, settings } from "./featuredProductsSliderConfig";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProductsSlider = props => {
  const featuredProductElements = defaultDisplay.map((product, i) => (
    <FeaturedProduct key={i} {...product} />
  ));

  return (
    <>
      <div className="featured-products-slider">
        <Slider {...settings}>{featuredProductElements}</Slider>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  gallery: state.gallery
});
export default withRouter(
  connect(mapStateToProps, { filterGallery })(FeaturedProductsSlider)
);
