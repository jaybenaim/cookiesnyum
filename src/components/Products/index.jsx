import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";
import GalleryFilter from "./GalleryFilter";
import { filterGallery } from "../../redux/actions/galleryActions";
import { Preloader } from "react-materialize";
import PRODUCTS from "./products";

const Products = (props) => {
  let {
    gallery,
    gallery: { filter },
    products,
  } = props;

  if (!gallery) {
    const {
      gallery: { filter: linkFilter },
    } = props.location.state;
    gallery.filter = linkFilter;
  }

  const [isLoading, setIsLoading] = useState(false);

  // Component did mount (empty array sets method to run once)
  useEffect(() => {
    setIsLoading(true);
    // eslint-disable-next-line
  }, []);
  setTimeout(() => {
    products.length > 0 && setIsLoading(false);
  }, 300);

  const productElements = products.map((item, i) => {
    // Get product image
    const getImage = PRODUCTS.filter((product) => {
      return product.name === item.name && product.image;
    });
    // Set product image
    const image = getImage.length >= 1 ? getImage[0]["image"] : "";
    let newItem = item;

    newItem.image = image;
    newItem.quantity = 0;
    // render each product
    return (
      item.class.includes(filter) && (
        <Item {...newItem} item={item} key={i} filter={filter} id={i} />
      )
    );
  });

  return (
    <div className="products-container">
      <div className="products-container--products-nav-container">
        <div className="products--nav">
          <a href="/dolcenada/">Home /</a>
          <a href="/dolcenada/products">
            {" "}
            Products {filter && <span>/</span>}{" "}
          </a>{" "}
          <br />
          {filter && (
            <a
              href="/dolcenada/products"
              onClick={() => props.filterGallery(filter)}
            >
              {filter}
            </a>
          )}
        </div>
      </div>

      <GalleryFilter />
      {isLoading && <Preloader active color="green" size="big" />}
      {productElements}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  gallery: state.gallery,
  products: state.products.products,
});
export default connect(mapStateToProps, { filterGallery })(
  withRouter(Products)
);
