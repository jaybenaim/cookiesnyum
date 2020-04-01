import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AddCartButton } from "../../Cart/AddCartButton";
import { addProduct } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../helpers/index";
import "../../../assets/stylesheets/item.css";

class Item extends Component {
  render() {
    let { item, name, image, quantity, sku, description, price } = this.props;

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
            src={image}
            alt={name}
            height={120}
            width={120}
          />
        </Link>
        <div className="item--card-body secondary-font">
          <h3 className="item--card-body--name">{name}</h3>
          <p className="item--card-body--description">{description}</p>
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
