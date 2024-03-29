import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterGallery } from "../../../../redux/actions/galleryActions";
import "../../../../assets/stylesheets/featuredProduct.css";

const FeaturedProduct = (props) => {
  const { src, alt, sku, text } = props;
  const getPrice = (sku) => {
    switch (sku) {
      case "cookie":
        return "From $2.85 / each";
      case "scone":
        return "From $3.50 / each";
      default:
        return "From $3.50 / each";
    }
  };
  return (
    <div className="featured-products-slider--cards">
      <img
        className="card-img"
        src={src}
        alt={alt}
        height={420}
        width={"100%"}
      />

      <div className="featured-products-slider--cards--card-body secondary-font">
        <Link
          to="/box"
          onClick={() => props.filterGallery(sku.replace("-", ""))}
        >
          <h3>{text}</h3>
          <p className="featured-products-slider--cards--card-text secondary-font">
            {getPrice(sku)}
            <br />
          </p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  gallery: state.gallery,
});

export default withRouter(
  connect(mapStateToProps, { filterGallery })(FeaturedProduct)
);
