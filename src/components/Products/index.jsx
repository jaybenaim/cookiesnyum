import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";
// @props recieve products from api
import PRODUCTS from "./products";
import GalleryFilter from "./GalleryFilter";

const Products = ({ gallery: { filter } }) => {
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
export default connect(mapStateToProps, {})(withRouter(Products));
