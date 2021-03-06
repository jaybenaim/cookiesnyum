﻿import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import {
  Footer,
  Register,
  Login,
  Home,
  Gallery,
  ProductShow,
  ErrorPage,
  CheckoutForm,
  Box,
} from "./components";
import { connect } from "react-redux";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { getProducts } from "./redux/actions/productActions";
import Admin from "./components/Admin";
import Faq from "./components/Faq";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = (props) => {
  const [checkoutForm, showCheckoutForm] = useState(false);

  const handleCheckoutCart = (data) => {
    showCheckoutForm(!checkoutForm);
  };

  const cartOptions = {
    currencySymbol: "CAD",
    checkoutTextLabel: "Checkout",
    subTotalTextLabel: "Sub Total",
    cartTextLabel: "Cart",
    quantityTextLabel: "QTY",
  };

  useEffect(() => {
    props.getProducts();
    // eslint-disable-next-line
  }, []);

  let location = window.location.href;

  return (
    <React.Fragment>
      {location.includes("/404") || location.includes("/admin") ? (
        ""
      ) : (
        <>
          <Nav />
          <Cart
            {...cartOptions}
            handleCheckout={handleCheckoutCart}
            checkoutForm={checkoutForm}
          />
        </>
      )}

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/admin" render={(props) => <Admin {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/gallery"
          render={(props) => <Gallery {...props} />}
        />
        <Route
          exact
          path="/products/:name"
          render={(props) => <ProductShow {...props} />}
        />
        <Route
          exact
          path="/checkout"
          render={(props) => <CheckoutForm {...props} />}
        />
        <Route exact path="/box" render={(props) => <Box {...props} />} />
        <Route exact path="/faq" render={(props) => <Faq {...props} />} />
        <Route exact path="/404" render={(props) => <ErrorPage {...props} />} />
        <Route path="*" component={ErrorPage} />
      </Switch>

      {location.includes("/404") || location.includes("/admin") ? (
        ""
      ) : (
        <Footer />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { getProducts })(App));
