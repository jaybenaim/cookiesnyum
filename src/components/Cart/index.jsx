import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../assets/stylesheets/cart.css";
import CartProduct from "./CartProduct";
import CheckoutForm from "./CheckoutForm";
import { connect } from "react-redux";
import {
  loadCart,
  removeProduct,
  updateCart,
} from "../../redux/actions/cartActions";
import { formatPrice } from "../../helpers/";
import storage from "../../redux/storage";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-materialize";

export class Cart extends Component {
  static propTypes = {
    loadCart: PropTypes.func,
    updateCart: PropTypes.func,
    cartProducts: PropTypes.array,
    productToAdd: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
    currencySymbol: PropTypes.string,
    handleCheckout: PropTypes.func,
    checkoutTextLabel: PropTypes.string,
    cartTextLabel: PropTypes.string,
    subTotalTextLabel: PropTypes.string,
    quantityTextLabel: PropTypes.string,
  };

  static defaultProps = {
    currencySymbol: "USD",
    checkoutTextLabel: "Checkout",
    cartTextLabel: "Your Cart",
    subTotalTextLabel: "Sub Total",
    quantityTextLabel: "Quantity",
  };

  state = {
    isOpen: false,
  };

  UNSAFE_componentWillMount() {
    this.props.loadCart(JSON.parse(storage().get()) || []);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.updateCart(this.props.cartProducts);
    }, 0);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.productToAdd !== this.props.productToAdd) {
      this.addProduct(nextProps.productToAdd);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = (product) => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts &&
      cartProducts.forEach((cp) => {
        if (cp._id === product._id) {
          cp.quantity += product.quantity;
          productAlreadyInCart = true;
        }
      });
    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);

    this.openFloatCart();
  };

  removeProduct = (product) => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex((p) => p._id === product._id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  clickCheckout = () => {
    window.location.href = "/checkout";
  };

  checkDisabled = () => {
    const {
      cartTotal: { productQuantity },
      cartProducts,
    } = this.props;
    let checkForDozen = cartProducts.filter(
      (product) => product.name === "Amaretti" || product.name === "Pastaschio"
    );
    return productQuantity >= 12 || checkForDozen.length >= 1 ? false : true;
  };
  render() {
    const {
      cartTotal,
      cartProducts,
      removeProduct,
      currencySymbol,
      checkoutTextLabel,
      cartTextLabel,
      subTotalTextLabel,
      quantityTextLabel,
      checkoutStatus,
      checkoutForm,
    } = this.props;
    const { isOpen } = this.state;
    const checkoutFormData = { cartProducts, cartTotal };
    const products =
      cartProducts &&
      cartProducts.map((product) => {
        return (
          <CartProduct
            isOpen={isOpen}
            product={product}
            removeProduct={removeProduct}
            currencySymbol={currencySymbol}
            key={`${product.sku} ${Math.random() * 12000}`}
            quantityTextLabel={quantityTextLabel}
          />
        );
      });

    let classes = ["float"];

    if (!!this.state.isOpen) {
      classes.push("float-open");
    }

    const confirmDisabled = this.checkDisabled();
    return (
      <div className={classes.join(" ")}>
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-close-btn"
          >
            X
          </div>
        )}
        {!this.state.isOpen && (
          <span
            onClick={() => this.openFloatCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              {isOpen ? (
                <span className="bag__quantity-expanded">
                  {cartTotal.productQuantity}
                </span>
              ) : (
                <span className="bag__quantity">
                  {cartTotal.productQuantity}
                </span>
              )}
            </span>
            <span className="header-title">{cartTextLabel}</span>
          </div>

          <div className="float-cart__shelf-container">
            {checkoutStatus === "success" ? <div>Order Placed</div> : products}
            {checkoutForm && <CheckoutForm data={checkoutFormData} />}
            {cartProducts === undefined ||
              (cartProducts.length === 0 && (
                <p className="shelf-empty">
                  Your cart is empty. <br />
                  <span onClick={() => this.closeFloatCart()}>
                    Continue Shopping
                  </span>
                </p>
              ))}
          </div>

          <div className="float-cart__footer">
            <div className="sub">{subTotalTextLabel}</div>
            <div className="sub-totals">
              <div className="sub-price">
                <p className="sub-price__val">
                  <strong>{currencySymbol} </strong>
                  {` ${formatPrice(cartTotal.totalPrice, currencySymbol)}`}
                </p>
              </div>
              <div className="sub-quantity">
                <p>
                  <strong>Total Quantity </strong>
                  {cartTotal.productQuantity}
                </p>
              </div>
            </div>
            <Link to="/checkout">
              <Button
                node="button"
                onClick={() => this.closeFloatCart()}
                className="continue-btn"
                disabled={confirmDisabled}
              >
                {confirmDisabled
                  ? "Need a minimum of 12 items"
                  : checkoutTextLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.products,
    productToAdd: state.cart.productToAdd,
    productToRemove: state.cart.productToRemove,
    cartTotal: state.cart.data,
    checkoutStatus: state.checkout.checkoutStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: (products) => dispatch(loadCart(products)),
    updateCart: (products) => dispatch(updateCart(products)),
    removeProduct: (product) => dispatch(removeProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));
