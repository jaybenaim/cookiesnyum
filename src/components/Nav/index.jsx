import React from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import { logo } from "../../assets/images";
import "../../assets/stylesheets/nav.css";
import Auth from "../Auth";
const Nav = () => {
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
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="/dolcenadaa"> Home </NavItem>
      <NavItem href="/dolcenadaa/products">Products</NavItem>
      <NavItem href="/dolcenadaa" className="sidenav-logo">
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

export default Nav;
