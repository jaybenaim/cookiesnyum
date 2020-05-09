import React, { Component } from "react";
import PropTypes from "prop-types";

import Thumb from "../Thumb";
import { formatPrice } from "../../../helpers";

import Quantity from "../../Gallery/Item/Quantity";

import { updateCart } from "../../../redux/actions/cartActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
    currencySymbol: PropTypes.string.isRequired,
    quantityTextLabel: PropTypes.string.isRequired,
  };

  state = {
    isMouseOver: false,
    qty: this.props.product.quantity,
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
  componentDidUpdate() {
    let { cartProducts, product } = this.props;
    const { qty } = this.state;
    let newProduct = product;
    newProduct.quantity = qty;
    let updatedCart = cartProducts.filter((p) => p.name !== product.name);
    updatedCart.push(newProduct);
    this.props.updateCart(updatedCart);
  }

  render() {
    const {
      product,
      removeProduct,
      currencySymbol,
      quantityTextLabel,
    } = this.props;
    const { qty } = this.state;
    const classes = ["shelf-item"];

    return (
      <div className={classes.join(" ")}>
        <div
          className="shelf-item__del"
          onClick={() => removeProduct(product)}
        />
        {/* <Thumb
          classes="shelf-item__thumb"
          src={product.image || "https://via.placeholder.com/150"}
          alt={product.name}
        /> */}
        <div className="shelf-item__details">
          <p className="title">{product.name}</p>
          <div className="desc">
            {quantityTextLabel}: {qty}
            <div className="shelf-item--quantity-buttons">
              <Quantity
                id={product._id}
                qtyLabel={qty}
                handleQty={this.handleQty}
                handleQtyChange={this.handleQtyChange}
              />
            </div>
          </div>
        </div>
        <div className="shelf-item__price">
          <p>{formatPrice(product.price * product.quantity, currencySymbol)}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});
export default withRouter(
  connect(mapStateToProps, { updateCart })(CartProduct)
);
