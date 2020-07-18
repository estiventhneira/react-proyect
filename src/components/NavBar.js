import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./styles/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="container-fluid">
          <a href="/" className="Navbar__brand">
            <img
              className="Navbar__brand-logo"
              src={logo}
              alt="Logo de la Platzi Conf"
            />
            <span className="font-weight-ligth">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </header>
    );
  }
}

export default NavBar;
