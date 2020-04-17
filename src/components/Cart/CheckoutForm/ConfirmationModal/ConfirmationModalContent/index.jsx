import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { sendEmail } from "../../../../../redux/actions/checkoutActions";
import { connect } from "react-redux";
import { formatPrice } from "../../../../../helpers/index";
import "../../../../../assets/stylesheets/confirmationModalContent.css";

class ConfirmationModalContent extends Component {
  render() {
    const {
      checkoutData: {
        form: {
          name: { firstName, lastName },
          address: { addressNumber, suite, city, province, street, postalCode },
          email: emailAddress,
          phone,
          paymentMethod,
          deliveryMethod,
          dateNeededBy,
        },
      },
      cart: {
        data: { productQuantity, totalPrice },
        products,
      },
    } = this.props;
    const productNames = products.map((product) => (
      <li>
        <img src={product.image} alt={product.name} height={40} width={40} />{" "}
        <span className="product-label">
          {product.name} {product.sku.replace("-", "")}
        </span>
        <span className="product-price">
          {formatPrice(Number(product.price) * Number(product.quantity), "CAD")}
        </span>
        <span className="product-qty">QTY: {product.quantity}</span>
      </li>
    ));

    return (
      <div className="confirmation-modal-content">
        <div className="confirmation-modal-content--name-container">
          <div className="confirmation-modal-content--name-container--firstName">
            <strong>First Name:</strong> <span>{firstName}</span>
          </div>
          <div className="confirmation-modal-content--name-container--lastName">
            <strong>Last Name:</strong> <span>{lastName}</span>
          </div>
          <div className="confirmation-modal-content--name-container--email">
            <strong>Email:</strong> <span>{emailAddress}</span>
          </div>
          <div className="confirmation-modal-content--name-container--phone">
            <strong>Phone:</strong> <span>{phone}</span>
          </div>
        </div>

        <div className="confirmation-modal-content--name-container--address">
          <strong>Address:</strong>
          <br />
          <div>
            <div>
              {addressNumber} {street} {suite && <div>Suite/Apt: {suite}</div>}
              ,&nbsp;
              {city},&nbsp; {province.toUpperCase()}, &nbsp;
              {postalCode.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="confirmation-modal-content--order-details">
          <div className="confirmation-modal-content--order-details-need-by-date">
            <strong>Need By Date:</strong>
            <div>{dateNeededBy}</div>
          </div>

          <div className="confirmation-modal-content--order-details-payment-method">
            <strong>Payment Method:</strong>
            <p>{paymentMethod}</p>
          </div>

          <div className="confirmation-modal-content--order-details-delivery-method">
            <strong>Delivery Method:</strong>
            <p>{deliveryMethod}</p>
          </div>
        </div>

        <div className="confirmation-modal-content--products">
          <h3>Your Order:</h3>
          <ol>{productNames}</ol>
          <div className="confirmation-modal-content--products--qty">
            <strong> Total Items:&nbsp; </strong> {` ${productQuantity}`}
          </div>
          <div className="confirmation-modal-content--products--subTotal">
            <strong>Sub Total:</strong> <strong>CAD</strong>
            {formatPrice(totalPrice, "CAD")}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  checkout: state.checkout,
});

export default withRouter(
  connect(mapStateToProps, { sendEmail })(ConfirmationModalContent)
);
