import React from "react";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import { withRouter } from "react-router-dom";

import "../../../assets/stylesheets/galleryFilter.css";
const GalleryFilter = ({ handleClick }) => {
  return (
    <div className="filter-container">
      <Button
        node="button"
        waves="light"
        className="all-filter-link"
        name="all"
        onClick={e => handleClick(e)}
      >
        All
      </Button>
      <Button
        node="button"
        waves="light"
        className="cookie-filter-link"
        name="cookies"
        onClick={e => handleClick(e)}
      >
        Cookies
      </Button>
      <Button
        node="button"
        waves="light"
        className="scone-filter-link"
        name="scones"
        onClick={e => handleClick(e)}
      >
        Scones
      </Button>
      <Button
        node="button"
        waves="light"
        className="biscotti-filter-link"
        name="biscotti"
        onClick={e => handleClick(e)}
      >
        Biscotti
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.errors,
  cart: state.cart
});
export default withRouter(connect(mapStateToProps, {})(GalleryFilter));
