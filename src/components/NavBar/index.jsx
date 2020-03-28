import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../assets/stylesheets/navbar.css";
import logo from "../../assets/images/logo.JPG";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { sendEmail } from "../../redux/actions/checkoutActions";
import DesktopNav from "./DesktopNav";
import Cart from "../Cart";

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
    auth,
    auth: {
      user: { name },
      isAuthenticated
    },
    logoutUser: handleLogoutUser
  } = props;

  const handleCheckoutCart = data => {
    const emailBody = `<div> <div className="email-template" style="display: grid;grid-template-columns: 1fr 1fr 1fr;" > <h1 style="grid-column: 1 / span 3;margin: 0 auto;margin-top: 10%;"> Order </h1><table style="width: 100%;margin-top: 10%;"><tr><th style="grid-column: 2">${name}</th><th style="grid-column: 2">$Email</th></tr> <tr> <td>$paymentMethod</td> <td>$address</td><td>$needBy</td></tr> </table> <div className="email-template--info"> <p className="email-template--info-name">${"name"}</p><p className="email-template--info-email">${"email"}</p> </div> </div></div>`;

    const email = {
      //@props TODO: create onchange
      name: name || "name",
      email: "jacob.benaim@icloud.com",
      message: `Error with the order contact - `,
      html: emailBody
    };
    // @post to /email
    props.sendEmail(email);
  };

  const cartOptions = {
    currencySymbol: "CAD",
    checkoutTextLabel: "Confirm",
    subTotalTextLabel: "Total",
    cartTextLabel: "Cart",
    quantityTextLabel: "Quantity"
  };
  const navbarTogglerClass = fade ? "navbar-toggler-expanded" : "";
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <Cart {...cartOptions} handleCheckout={handleCheckoutCart} />
      <nav className={`navbar navbar-expand-sm navbar-light  ${fade} `}>
        {nav ? (
          <>
            <div className={`nav-collapse left-nav fade-in-left`}>
              <Link
                className="col s5  center black-text home-link"
                to="/dolcenadaa"
                style={navLinkStyle}
                onClick={() => {
                  showNav(!nav);
                  fadeBackground("");
                }}
              >
                Home
              </Link>
              <Link
                className="col s5  center black-text products-link"
                to="/products"
                style={navLinkStyle}
                onClick={() => {
                  showNav(!nav);
                  fadeBackground("");
                }}
              >
                Products
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

        <button
          className={`navbar-toggler ${navbarTogglerClass}`}
          type="button"
        >
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

export default connect(mapStateToProps, { logoutUser, sendEmail })(
  withRouter(NavBar)
);
