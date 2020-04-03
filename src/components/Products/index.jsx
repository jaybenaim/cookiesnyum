import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";
import GalleryFilter from "./GalleryFilter";
import { filterGallery } from "../../redux/actions/galleryActions";
import { getProducts } from "../../redux/actions/productActions";
const Products = props => {
  const {
    gallery: { filter },
    products
  } = props;

  // Component did mount (empty array sets method to run once)
  useEffect(() => {
    props.getProducts();
  }, []);

  const productElements = products.map((item, i) => {
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

      {productElements}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  gallery: state.gallery,
  products: state.products.products
});
export default connect(mapStateToProps, { filterGallery, getProducts })(
  withRouter(Products)
);
