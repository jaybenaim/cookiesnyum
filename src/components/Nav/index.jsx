import React from "react";
import { logo } from "../../assets/images";
import "../../assets/stylesheets/nav.css";
import { Link, withRouter } from "react-router-dom";
import Auth from "../Auth";
import { filterGallery } from "../../redux/actions/galleryActions";
import { Icon, Navbar, NavItem, Divider, Dropdown } from "react-materialize";
import { connect } from "react-redux";

const Nav = props => {
  const handleOpen = filter => {
    props.filterGallery(filter);
  };
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="/">
          <img
            src={logo}
            alt="logo cookie with a bite"
            height={140}
            width={140}
          />
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,

        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="/dolcenada"> Home </NavItem>

      <Dropdown
        id="Dropdown_6"
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: false,
          container: false,
          coverTrigger: false,
          hover: false,
          inDuration: 150,
          outDuration: 250
        }}
        trigger={
          <div className="sidenav--dropdown-trigger">
            Products<Icon>arrow_drop_down</Icon>
          </div>
        }
      >
        <Link
          to="products"
          className="sidenav-close"
          onClick={() => handleOpen("cookie")}
        >
          Cookies
        </Link>

        <Divider />
        <Link
          to="products"
          className="sidenav-close"
          onClick={() => handleOpen("scone")}
        >
          Scones
        </Link>
        <Divider />

        <Link
          to="products"
          className="sidenav-close"
          onClick={() => handleOpen("biscotti")}
        >
          Biscotti
        </Link>
        <Divider />

        <Link
          to="products"
          className="sidenav-close"
          onClick={() => handleOpen("all")}
        >
          All Products
        </Link>
      </Dropdown>

      <NavItem href="/dolcenada" className="sidenav-logo">
        {" "}
        <img
          src={logo}
          alt="logo cookie with a bite"
          height={140}
          width={140}
        />
      </NavItem>

      <Auth />
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {};
};

export default withRouter(connect(mapStateToProps, { filterGallery })(Nav));
