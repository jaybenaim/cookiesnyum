import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AddCartButton } from "../../Cart/AddCartButton";
import { addProduct } from "../../../redux/actions/cartActions";
import { setCurrentProduct } from "../../../redux/actions/productActions";
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
    const getImage = PRODUCTS.filter(product => {
      return product.name === name && product.image;
    });

    const image = getImage[0]["image"];
    let newItem = item;
    newItem._id = "";
    newItem.image = image;

    return (
      <div className="item--card ">
        <Link
          to={{
            pathname: `/products/${sku}`,
            state: { item, quantity, description, image }
          }}
          className="show-product-btn"
          onClick={() => this.props.setCurrentProduct(newItem)}
        >
          <img
            className="item--card--img"
            src={image}
            alt={name}
            height={200}
            width={200}
          />
        </Link>
        <div className="item--card-body secondary-font">
          <Link
            to={{
              pathname: `/products/${sku}`,
              state: { item, quantity, description, image }
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
export default withRouter(
  connect(mapStateToProps, { addProduct, setCurrentProduct })(Item)
);
