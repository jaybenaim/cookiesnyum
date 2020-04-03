import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterGallery } from "../../../../redux/actions/galleryActions";

const FeaturedProduct = props => {
  const { src, alt, sku, text } = props;
  return (
    <div className="cards">
      <img
        className="card-img"
        src={src}
        alt={alt}
        height={420}
        width={"80%"}
      />

      <div className="card-body primary-font">
        <Link
          to="/products"
          onClick={() => props.filterGallery(sku.replace("-", ""))}
        >
          <h3>{text}</h3>
          <p className="card-text secondary-font">
            From $33.00
            <br />
          </p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  gallery: state.gallery
});

export default withRouter(
  connect(mapStateToProps, { filterGallery })(FeaturedProduct)
);
