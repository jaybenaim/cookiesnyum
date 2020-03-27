import React from "react";
import { withRouter } from "react-router-dom";
import "../../assets/stylesheets/products.css";
import Item from "./Item";
import { connect } from "react-redux";

// @props recieve products from api
import PRODUCTS from "./products";

const Products = ({ cart }) => {
  return PRODUCTS.map(item => <Item {...item} item={item} />);
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart
});
export default connect(mapStateToProps, {})(withRouter(Products));
