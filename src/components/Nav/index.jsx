import React from "react";
import { logo } from "../../assets/images";
import "../../assets/stylesheets/nav.css";
import { Link, withRouter } from "react-router-dom";
import Auth from "../Auth";
import { filterGallery } from "../../redux/actions/galleryActions";
import { Icon, Navbar } from "react-materialize";
import { connect } from "react-redux";

const Nav = (props) => {
  const {
    user: { role },
  } = props;
  return (
    <Navbar
      alignLinks="right"
      brand={
        <Link className="brand-logo" to="/">
          <img
            src={logo}
            alt="logo cookie with a bite"
            height={140}
            width={140}
          />
        </Link>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,

        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link to="/" className="sidenav-close">
        {" "}
        Home{" "}
      </Link>
      <Link to="/gallery" className="sidenav-close">
        Gallery
      </Link>
      <Link to="/faq" className="sidenav-close">
        FAQ
      </Link>
      {role === "admin" && (
        <Link to="/admin" className="sidenav-close" target="_blank">
          Admin
        </Link>
      )}
      <Link to="/" className="sidenav-logo sidenav-close">
        {" "}
        <img
          src={logo}
          alt="logo cookie with a bite"
          height={140}
          width={140}
        />
      </Link>

      <Auth />
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default withRouter(connect(mapStateToProps, { filterGallery })(Nav));
