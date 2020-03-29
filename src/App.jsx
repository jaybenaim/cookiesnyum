import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import {
  NavBar,
  Footer,
  Register,
  Login,
  Home,
  Products,
  ProductShow,
  ErrorPage
} from "./components";
import { connect } from "react-redux";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

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

//TODO Web Template Studio: Adrsd routes for your new pages here.
const App = ({ errors, history }) => {
  const [nav, showNav] = useState(false);
  const [fade, fadeBackground] = useState("");

  errors.response && errors.response.status === 404 && history.push("/404");
  console.log(errors.length);
  return (
    <React.Fragment>
      {errors.response && errors.response.status === 404 ? (
        ""
      ) : (
        <NavBar
          showNav={showNav}
          fadeBackground={fadeBackground}
          nav={nav}
          fade={fade}
        />
      )}
      <Switch>
        <>
          <Route
            exact
            path="/"
            render={props => <Home {...props} nav={nav} fade={fade} />}
          />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} fade={fade} />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} fade={fade} />}
          />
          <Route
            exact
            path="/products"
            render={props => <Products {...props} />}
          />
          <Route
            exact
            path="/products/:id"
            render={props => <ProductShow {...props} />}
          />
          <Route exact path="/404" render={props => <ErrorPage {...props} />} />
        </>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {})(withRouter(App));
