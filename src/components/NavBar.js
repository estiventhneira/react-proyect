import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar__brand">
            <img
              className="Navbar__brand-logo"
              src={logo}
              alt="Logo de la Platzi Conf"
            />
            <span className="font-weight-ligth">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </header>
    );
  }
}

export default NavBar;
