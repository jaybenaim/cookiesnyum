import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AddCartButton } from "../../Cart/AddCartButton";
import { addProduct } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../helpers/index";
import "../../../assets/stylesheets/item.css";
import PRODUCTS from "../products";
class Item extends Component {
  shortDescription = description => {
    return !description
      ? ""
      : description.length <= 15
      ? description
      : description.slice(0, 15) + "...";
  };
  render() {
    let { item, name, quantity, sku, description, price } = this.props;
    const image = PRODUCTS.filter(product => {
      return product.name === name && product.image;
    });
    return (
      <div className="item--card ">
        <Link
          to={{
            pathname: `/products/${sku}`,
            state: { item, quantity }
          }}
          className="show-product-btn"
          onClick={() => this.forceUpdate()}
        >
          <img
            className="item--card--img"
            src={image[0]["image"]}
            alt={name}
            height={120}
            width={120}
          />
        </Link>
        <div className="item--card-body secondary-font">
          <Link
            to={{
              pathname: `/products/${sku}`,
              state: { item, quantity }
            }}
            className="show-product-btn"
          >
            <h3 className="item--card-body--name">{name}</h3>
          </Link>
          <p className="item--card-body--description">
            {this.shortDescription(description)}
          </p>
          <p className="item--card-body--price">{formatPrice(price, "CAD")}</p>

          <span className="item--card-body--links">
            <AddCartButton
              product={item}
              addLabel={``}
              addProduct={this.props.addProduct}
              className="add-to-cart"
            />
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  gallery: state.gallery
});
export default connect(mapStateToProps, { addProduct })(withRouter(Item));
