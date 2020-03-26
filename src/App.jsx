import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";

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
        {fade !== "fade-background" && (
          <Route
            exact
            path="/"
            render={props => <Home {...props} nav={nav} fade={fade} />}
          />
        )}
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />
        <Route exact path="/login" render={props => <Login {...props} />} />{" "}
      </Switch>
    </React.Fragment>
  );
};

export default App;
