import React from "react";
import "./styles/Home.css";
import Stronauts from "../images/astronauts.svg";
import LogoConf from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home__bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4 text-center Home-izq">
                <img src={LogoConf} alt="" />
                <h1>Get Your badges</h1>
                <h2>The easiest way to manage your conference</h2>
                <Link to="/badges" className="btn btn-primary star-now-button">
                  Star Now
                </Link>
              </div>
              <div className="col-8 text-center">
                <img src={Stronauts} alt="Header"></img>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
