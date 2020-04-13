import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../assets/stylesheets/addCartButton.css";
import { connect } from "react-redux";
import { addProduct } from "../../../redux/actions/cartActions";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
export class AddCartButton extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    styles: PropTypes.object,
    addLabel: PropTypes.string,
  };

  static defaultProps = {
    addLabel: "Add to Cart",
  };

  addProductToCart = (event, product) => {
    const { qty } = this.props;
    product.quantity = qty;

    this.props.addProduct(product);
  };

  render() {
    const { product, styles, addLabel } = this.props;
    return (
      <p className="add-to-cart-btn">
        <button
          style={{ ...styles }}
          onClick={(event) => this.addProductToCart(event, product)}
        >
          <AddCircleOutlineIcon /> {addLabel}
        </button>
      </p>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addProduct: (product) => dispatch(addProduct(product)) };
};

export default connect(null, mapDispatchToProps)(AddCartButton);
