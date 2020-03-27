import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../assets/stylesheets/navbar.css";
import logo from "../../assets/images/logo.JPG";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import DesktopNav from "./DesktopNav";
import { Cart, AddCartButton } from "react-cart-components";
const navLinkStyle = {
  width: "140px",
  borderRadius: "3px",
  letterSpacing: "1.5px"
};
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = props => {
  const onLogoutClick = e => {
    e.preventDefault();
    handleLogoutUser();
  };
  const {
    showNav,
    nav,
    fadeBackground,
    fade,
    auth: {
      user: { name },
      isAuthenticated
    },
    logoutUser: handleLogoutUser
  } = props;
  const product = [
    {
      id: "23",
      name: "test",
      sku: "123",
      price: 300.0,
      image: logo
    }
  ];
  const cartOptions = {
    currencySymbol: "CAD",
    checkoutTextLabel: "Confirm",
    subTotalTextLabel: "Total",
    cartTextLabel: "Cart",
    quantityTextLabel: "Quantity"
  };

  const handleCheckout = data => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <Cart {...cartOptions} handleCheckout={handleCheckout} />

      <nav className={`navbar navbar-expand-sm navbar-light  ${fade} `}>
        {nav ? (
          <>
            <div className={`nav-collapse left-nav fade-in-left`}>
              <Link
                className="col s5  center black-text home-link"
                to="/"
                style={navLinkStyle}
                onClick={() => {
                  showNav(!nav);
                  fadeBackground("");
                }}
              >
                Home
              </Link>

              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    style={navLinkStyle}
                    onClick={() => {
                      showNav(false);
                      fadeBackground("");
                    }}
                    className="btn btn-large btn-flat waves-effect white black-text"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    style={navLinkStyle}
                    onClick={() => {
                      showNav(false);
                      fadeBackground("");
                    }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onClick={e => onLogoutClick(e)}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
                </button>
              )}
            </div>
            <div className="expanded-logo">
              <Link className="expanded-navbar-brand" to="/">
                {fade === "fade-background" && (
                  <img
                    src={logo}
                    alt="logo cookie with a bite"
                    height={180}
                    width={180}
                  />
                )}
              </Link>
            </div>
          </>
        ) : (
          <DesktopNav {...props} />
        )}
        <div className="logo">
          <Link className="navbar-brand" to="/">
            {fade !== "fade-background" && (
              <img
                src={logo}
                alt="logo cookie with a bite"
                height={160}
                width={160}
              />
            )}
          </Link>
        </div>

        <button className="navbar-toggler" type="button">
          <span
            className="navbar-toggler-icon"
            onClick={() => {
              showNav(!nav);
              fadeBackground(!nav ? "fade-background" : "");
            }}
          ></span>
        </button>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));
