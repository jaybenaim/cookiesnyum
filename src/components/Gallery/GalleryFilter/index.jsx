import React from "react";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import { withRouter } from "react-router-dom";
import { filterGallery } from "../../../redux/actions/galleryActions";

import "../../../assets/stylesheets/galleryFilter.css";
const GalleryFilter = (props) => {
  const handleFilterClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    props.filterGallery(name);
  };

  return (
    <div className="filter-container">
      <Button
        node="button"
        waves="light"
        className="all-filter-link"
        name="all"
        onClick={(e) => handleFilterClick(e)}
      >
        All
      </Button>
      <Button
        node="button"
        waves="light"
        className="cookie-filter-link"
        name="cookie"
        onClick={(e) => handleFilterClick(e)}
      >
        Cookies
      </Button>
      <Button
        node="button"
        waves="light"
        className="scone-filter-link"
        name="scone"
        onClick={(e) => handleFilterClick(e)}
      >
        Scones
      </Button>

      <Button
        node="button"
        waves="light"
        className="featured-filter-link"
        name="featured"
        onClick={(e) => handleFilterClick(e)}
      >
        Featured
      </Button>
      <Button
        node="button"
        waves="light"
        className="boxes-filter-link"
        name="box"
        onClick={(e) => handleFilterClick(e)}
      >
        Boxes
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  cart: state.cart,
  gallery: state.gallery,
});
export default withRouter(
  connect(mapStateToProps, { filterGallery })(GalleryFilter)
);
