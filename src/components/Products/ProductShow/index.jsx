import React, { useState, useEffect } from "react";
import "../../../assets/stylesheets/productShow.css";
import { AddCartButton } from "../../Cart/AddCartButton";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addProduct } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../helpers";
import RelatedProductsSlider from "../RelatedProductsSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { getProducts } from "../../../redux/actions/productActions";
import { Preloader } from "react-materialize";
import { filterGallery } from "../../../redux/actions/galleryActions";
const ProductShow = props => {
  const {
    item,
    item: { name, price, image, sku, description }
  } = props.location.state;
  const { products } = props;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    props.getProducts();
  }, []);
  useEffect(() => {
    products.length > 0 && setIsLoading(false);
  }, [{}]);

  // get related products
  const relatedProducts = products.filter((p, i) => p.sku.includes(sku));
  const RelatedProductsElements = relatedProducts.map((product, i) => (
    <RelatedProductsSlider key={i} product={product} width={80} height={80} />
  ));
  const formattedSku = sku.replace("-", "");
  const settings = {
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  console.log(formattedSku);
  return (
    <div className="product-show-container">
      <div className="products--nav">
        <a href="/dolcenadaa/">Home /</a>
        <a href="/dolcenadaa/products"> Products /</a>{" "}
        <Link
          to={{
            pathname: "/products",
            state: { filter: formattedSku }
          }}
          onClick={() => props.filterGallery(formattedSku)}
        >
          {formattedSku}
        </Link>
        <a href={`/dolcenadaa/products/${sku}`}> / {name}</a>
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
          <p className="product-show--card-body--description">{description}</p>
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
            <h3>Related Products</h3>
            <Slider {...settings}>
              {isLoading ? (
                <div>
                  <Preloader active color="green" />
                </div>
              ) : (
                RelatedProductsElements
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  products: state.products.products
});
export default connect(mapStateToProps, {
  addProduct,
  getProducts,
  filterGallery
})(withRouter(ProductShow));
