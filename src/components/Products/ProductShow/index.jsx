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
import CookieDescription from "./CookieDescription";
import Quantity from "../Item/Quantity";

const ProductShow = (props) => {
  const {
    item,
    item: { id, name, price, sku, description },
    image,
  } = props.location.state;
  const { products } = props;
  // const { products, currentProduct: item } = props;

  // const { name, price, sku, description, image } = item;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    props.getProducts();
    // eslint-disable-next-line
  }, []);

  setTimeout(() => {
    products.length > 0 && setIsLoading(false);
  }, 500);

  // get related products
  const relatedProducts = products.filter((p, i) => p.sku.includes(sku));
  const RelatedProductsElements = relatedProducts.map((product, i) => (
    <RelatedProductsSlider key={i} product={product} width={80} height={80} />
  ));
  const formattedSku = sku.replace("-", "");
  const slides = relatedProducts.length > 4 ? 4 : relatedProducts.length;
  const settings = {
    arrows: true,
    dots: true,
    slidesToShow: slides,
    slidesToScroll: slides,
    focusOnSelect: false,
    swipe: true,
  };
  const [qty, setQty] = useState(1);

  const handleQty = (action) => {
    action === "decrease" && qty >= 1 && setQty(qty - 1);
    action === "increase" && setQty(qty + 1);
  };
  const handleQtyChange = (e) => {
    e.preventDefault();
    setQty(Number(e.target.value));
  };

  return (
    <div className="product-show-container">
      <div className="products--nav">
        <Link to="/">Home /</Link>
        <Link href="/products"> Products /</Link>{" "}
        <Link
          to={{
            pathname: "/products",
          }}
          onClick={() => props.filterGallery(formattedSku)}
        >
          {formattedSku}
        </Link>
        <Link to={`/dolcenada/products/${sku}-${name}`}> / {name}</Link>
      </div>

      <div className=" product-show--card">
        <img
          className={`product-show--card--img ${sku.replace("-", "")}`}
          src={image}
          alt={name}
          height={120}
          width={120}
        />
        <div className="product-show--card-body secondary-font">
          <h3 className="product-show--card-body--name ">
            {name} {sku.replace("-", "")}
          </h3>
          <p className="product-show--card-body--price">
            {formatPrice(price, "CAD")}
          </p>

          <div className="product-show--card-body--quantity-buttons">
            <p className="product-show--card-body-qty-label">Quantity:</p>
            <Quantity
              id={id}
              qtyLabel={qty}
              handleQty={handleQty}
              handleQtyChange={handleQtyChange}
            />
          </div>

          <div className="product-show--card-body--add-to-cart-btn ">
            <span>
              <AddCartButton
                qty={qty}
                product={item}
                addLabel={"Add to Cart"}
                addProduct={props.addProduct}
              />
            </span>
          </div>
          <p className="product-show--card-body--description">
            <CookieDescription item={item} description={description} />
          </p>
        </div>
      </div>
      <div className="product-show--card-body--related-products">
        <h3 className="primary-font">Related Products</h3>
        {isLoading ? (
          <div>
            <Preloader active color="green" />
          </div>
        ) : (
          <Link
            to={{
              pathname: "/products",
            }}
            onClick={() => props.filterGallery(formattedSku)}
          >
            <Slider {...settings}>{RelatedProductsElements}</Slider>
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  currentProduct: state.products.currentProduct,
});
export default withRouter(
  connect(mapStateToProps, {
    addProduct,
    getProducts,
    filterGallery,
  })(ProductShow)
);
