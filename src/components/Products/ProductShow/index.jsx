import React, { useState } from "react";
import "../../../assets/stylesheets/productShow.css";
import { AddCartButton } from "../../Cart/AddCartButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addProduct } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../helpers";
import PRODUCTS from "../products";
import RelatedProductsSlider from "../RelatedProductsSlider";
import FeaturedProductsSlider from "../../Home/FeaturedProductsSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { defaultDisplay } from "../../Home/FeaturedProductsSlider/featuredProducts";
import Slider from "react-slick";
const ProductShow = props => {
  const {
    item,
    item: { name, price, image, sku, description }
  } = props.location.state;

  // get related products
  const relatedProducts = PRODUCTS.filter((p, i) => p.sku.includes(sku));
  const RelatedProductsElements = relatedProducts.map((product, i) => (
    <RelatedProductsSlider key={i} product={product} width={80} height={80} />
  ));
  const settings = {
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="product-show-container">
      <div className="products--nav">
        <a href="/dolcenadaa/">Home</a> /
        <a href="/dolcenadaa/products"> Products</a> /{" "}
        <a href="/dolcenadaa/products"> {sku.replace("-", "")}</a> /{" "}
        <a href={`/dolcenadaa/products/${sku}`}> {name}</a>
      </div>

      <div className=" product-show--card">
        <img
          className="product-show--card--img"
          src={image}
          alt={name}
          height={120}
          width={120}
        />
        <div className="product-show--card-body secondary-font">
          <h3 className="product-show--card-body--name">{name}</h3>
          <p className="product-show--card-body--price">
            {formatPrice(price, "CAD")}
          </p>
          <p className="product-show--card-body--description">
            Nulla dolore laborum officia incididunt commodo ut velit aliqua ut
            aliquip. Sit do exercitation eu nisi commodo culpa laboris ipsum
            irure dolor velit qui duis deserunt.
          </p>
          <div className="product-show--card-body--add-to-cart-btn">
            <span>
              <AddCartButton
                product={item}
                addLabel={"Add to Cart"}
                addProduct={props.addProduct}
              />
            </span>
          </div>
          <div className="product-show--card-body--related-products">
            <Slider {...settings}>{RelatedProductsElements}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { addProduct })(
  withRouter(ProductShow)
);
