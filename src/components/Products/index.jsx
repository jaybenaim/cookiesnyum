import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";
import GalleryFilter from "./GalleryFilter";
import { filterGallery } from "../../redux/actions/galleryActions";
import { getProducts } from "../../redux/actions/productActions";
import { Preloader } from "react-materialize";

const Products = props => {
  const {
    gallery: { filter },
    products,
    navbar: { showDesktopNavbar }
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  // Component did mount (empty array sets method to run once)
  useEffect(() => {
    setIsLoading(true);
    props.getProducts();
  }, []);

  useEffect(() => {
    products.length > 0 && setIsLoading(false);
  }, [{}]);

  const productElements = products.map((item, i) => {
    return (
      item.class.includes(filter) && (
        <Item {...item} item={item} key={i} filter={filter} />
      )
    );
  });
  return (
    <div className="products-container">
      {showDesktopNavbar === "" && window.innerWidth > 450 && (
        <h1 className="primary-font hidden-navbar-replacement">Dolcenada</h1>
      )}
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
      {isLoading && <Preloader active color="green" size="big" />}

      {productElements}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  gallery: state.gallery,
  products: state.products.products,
  navbar: state.navbar
});
export default connect(mapStateToProps, { filterGallery, getProducts })(
  withRouter(Products)
);
