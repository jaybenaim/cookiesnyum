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
      : description.length <= 25
      ? description
      : description.slice(0, 25) + "...";
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
            state: { item, quantity, description }
          }}
          className="show-product-btn"
        >
          <img
            className="item--card--img"
            src={image[0]["image"]}
            alt={name}
            height={200}
            width={200}
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
            {this.shortDescription(description.default)}
          </p>
          {/* <p className="item--card-body--price">{formatPrice(price, "CAD")}</p> */}
          <div className="item--card-body--add-to-cart">
            <AddCartButton
              product={item}
              addLabel={formatPrice(price, "CAD")}
              addProduct={this.props.addProduct}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  gallery: state.gallery
});
export default connect(mapStateToProps, { addProduct })(withRouter(Item));
