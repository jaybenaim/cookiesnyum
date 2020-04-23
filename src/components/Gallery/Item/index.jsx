import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../../../redux/actions/cartActions";
import { setCurrentProduct } from "../../../redux/actions/productActions";
import "../../../assets/stylesheets/item.css";
import { updateCart } from "../../../redux/actions/cartActions";

class Item extends Component {
  state = {
    qty: 1,
  };
  shortDescription = (description) => {
    return !description
      ? ""
      : description.length <= 25
      ? description
      : description.slice(0, 25) + "...";
  };

  handleQty = (action) => {
    action === "decrease" &&
      this.setState((prevState) => {
        return prevState.qty >= 1 && { qty: prevState.qty - 1 };
      });
    action === "increase" &&
      this.setState((prevState) => {
        return { qty: prevState.qty + 1 };
      });
  };
  handleQtyChange = (e) => {
    e.preventDefault();
    this.setState({ qty: Number(e.target.value) });
  };

  getPrice = (price, description) => {
    if (price === 2.85) {
      return "Basic";
    }
    if (price === 3.35) {
      return "Premium";
    }
    if (price === 3.5) {
      return this.shortDescription(description.default);
    }
  };
  render() {
    let {
      item,
      name,
      quantity,
      sku,
      description,
      image,
      class: defaultClass,
      id,
      price,
    } = this.props;

    return (
      <div className={`item--card `}>
        <Link
          to={{
            pathname: `/products/${sku}${name}`,
            state: { id, item, quantity, description, image },
          }}
          className="show-product-btn"
          onClick={() => this.props.setCurrentProduct(item)}
        >
          <h3 className="item--card-body--name secondary-font">{name}</h3>

          <img
            className={`item--card--img ${defaultClass}`}
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
              state: { item, quantity, description, image },
            }}
            className="show-product-btn"
          ></Link>
          <p className="item--card-body--description">
            {/* {this.shortDescription(description.default)} */}
            <p>{this.getPrice(price, description)}</p>
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  gallery: state.gallery,
  cartProducts: state.cart.products,
});
export default withRouter(
  connect(mapStateToProps, { addProduct, setCurrentProduct, updateCart })(Item)
);
