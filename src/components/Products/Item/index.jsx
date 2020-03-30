import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "../../../assets/stylesheets/item.css";

class Item extends Component {
  render() {
    const { item, name, image, quantity, sku } = this.props;
    return (
      <div className=" item--card">
        <img
          className="item--card--img"
          src={image}
          alt={name}
          height={120}
          width={120}
        />
        <div className="item--card-body secondary-font">
          <h3 className="item--card-body--name">{name}</h3>
          <p className="item--card-body--description">Short Description</p>

          <span className="item--card-body--add-to-cart-btn">
            <Link
              to={{
                pathname: `/products/${sku}`,
                state: { item, quantity }
              }}
              className="show-product-btn"
              onClick={() => this.forceUpdate()}
            >
              Show More
            </Link>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {})(withRouter(Item));
