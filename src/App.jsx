import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styles from "./components/NavBar/navbar.module.css";

import Home from "./components/Home";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  const [nav, showNav] = useState(false);
  const [fade, fadeBackground] = useState("");

  return (
    <React.Fragment>
      <NavBar showNav={showNav} fadeBackground={fadeBackground} nav={nav} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} nav={nav} fade={fade} />}
        />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
