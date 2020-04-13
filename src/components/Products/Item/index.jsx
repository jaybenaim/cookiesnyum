import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AddCartButton } from "../../Cart/AddCartButton";
import { addProduct } from "../../../redux/actions/cartActions";
import { setCurrentProduct } from "../../../redux/actions/productActions";
import { formatPrice } from "../../../helpers/index";
import "../../../assets/stylesheets/item.css";
import Quantity from "./Quantity";
class Item extends Component {
  state = {
    qty: 0,
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
  render() {
    let {
      item,
      name,
      quantity,
      sku,
      description,
      price,
      image,
      class: defaultClass,
      id,
    } = this.props;
    const { qty } = this.state;

    return (
      <div className={`item--card `}>
        <Link
          to={{
            pathname: `/products/${sku}`,
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
            {this.shortDescription(description.default)}
          </p>
          {/* <p className="item--card-body--price">{formatPrice(price, "CAD")}</p> */}
          <div className="item--card-body--quantity-buttons">
            <p className="item--card-body-qty-label">Quantity:</p>
            <Quantity
              id={item._id}
              qtyLabel={this.state.qty}
              handleQty={this.handleQty}
              handleQtyChange={this.handleQtyChange}
            />
          </div>

          <div className="item--card-body--add-to-cart">
            <AddCartButton
              qty={qty}
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
const mapStateToProps = (state) => ({
  gallery: state.gallery,
});
export default withRouter(
  connect(mapStateToProps, { addProduct, setCurrentProduct })(Item)
);
