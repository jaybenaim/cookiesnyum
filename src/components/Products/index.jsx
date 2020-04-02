import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";
// @props recieve products from api
import PRODUCTS from "./products";
import GalleryFilter from "./GalleryFilter";
import { filterGallery } from "../../redux/actions/galleryActions";

const Products = props => {
  const {
    gallery: { filter }
  } = props;
  const products = PRODUCTS.map((item, i) => {
    return (
      item.class.includes(filter) && (
        <Item {...item} item={item} key={i} filter={filter} />
      )
    );
  });

  return (
    <div className="products-container">
      <div className="products--nav">
        <a href="/dolcenadaa/">Home</a> /
        <a href="/dolcenadaa/products"> Products</a>
        {filter && (
          <>
            {" "}
            /{" "}
            <a
              href="/dolcenadaa/products"
              onClick={() => props.filterGallery(filter)}
            >
              {" "}
              {filter}
            </a>
          </>
        )}
      </div>
      <GalleryFilter />

      {products}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  gallery: state.gallery
});
export default connect(mapStateToProps, { filterGallery })(
  withRouter(Products)
);
