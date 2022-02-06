import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img src={logo} alt="" className="img-fluid" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <HeaderNavItem exact to="/" name="Home" />
            </li>
            <li>
              <HeaderNavItem to="/about" name="About Us" />
            </li>
            <li>
              <HeaderNavItem to="/services" name="Features" />
            </li>
            <li>
              <HeaderNavItem to="/faq" name="Faqs" />
            </li>
            <li>
              <HeaderNavItem to="/team" name="Reviews" />
            </li>
            <li>
              <HeaderNavItem to="/contact" name="Contact" />
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

function HeaderNavItem(props) {
  return (
    <NavLink
      to={props.to}
      className="nav-link scrollto"
      exact={props.exact ? true : false}
      activeClassName="active"
    >
      {props.name}
    </NavLink>
  );
}
