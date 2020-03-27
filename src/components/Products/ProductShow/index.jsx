import React, { Component } from "react";
import "../../../assets/stylesheets/productShow.css";
import { AddCartButton } from "../../Cart/AddCartButton";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addProduct } from "../../../redux/actions/cartActions";

class ProductShow extends Component {
  render() {
    const {
      item,
      item: { id, name, price, image, quantity, sku }
    } = this.props.location.state;
    return (
      <div className="product-show-container">
        <div className="products--nav">
          <a href="/dolcenadaa/">Home</a> /
          <a href="/dolcenadaa/products"> Products</a> /{" "}
          <a href={`/dolcenadaa/products/${sku}`}>{name}</a>
        </div>

        <div className=" product-show--card">
          <img
            className="product-show--card--img"
            src={image}
            alt={name}
            height={120}
            width={120}
          />
          <div className="product-show--card-body secondary-font">
            <h3 className="product-show--card-body--name">{name}</h3>
            <p className="product-show--card-body--description">
              Short Description
            </p>

            <span className="product-show--card-body--add-to-cart-btn">
              <AddCartButton
                product={item}
                addLabel={"Add to Cart"}
                addProduct={this.props.addProduct}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { addProduct })(
  withRouter(ProductShow)
);
