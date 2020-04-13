﻿import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import {
  Footer,
  Register,
  Login,
  Home,
  Products,
  ProductShow,
  ErrorPage,
  CheckoutForm,
} from "./components";
import { connect } from "react-redux";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { getProducts } from "./redux/actions/productActions";

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
    checkoutTextLabel: "Confirm",
    subTotalTextLabel: "Sub Total",
    cartTextLabel: "Cart",
    quantityTextLabel: "QTY",
  };

  // TODO: /// add error handler for component send to 404 for failed render
  // errors && errors.isAxiosError && history.push("/404");

  useEffect(() => {
    props.getProducts();
    // eslint-disable-next-line
  }, []);

  const location = window.location.href;
  return (
    <React.Fragment>
      {location.includes("/404") ? (
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
        <>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/products"
            render={(props) => <Products {...props} />}
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
          <Route
            exact
            path="/404"
            render={(props) => <ErrorPage {...props} />}
          />
        </>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default withRouter(connect(mapStateToProps, { getProducts })(App));
