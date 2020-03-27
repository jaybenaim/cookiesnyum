import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import store from "./redux/store";

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
const App = () => {
  const [nav, showNav] = useState(false);
  const [fade, fadeBackground] = useState("");

  return (
    <React.Fragment>
      <NavBar
        showNav={showNav}
        fadeBackground={fadeBackground}
        nav={nav}
        fade={fade}
      />

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
