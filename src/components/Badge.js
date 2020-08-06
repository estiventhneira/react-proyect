import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/styles.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Header" />
        </div>
        <div className="Badge__section-name">
          <Gravatar email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <h5>
            <i>Twitter: </i> @{this.props.twitterUser}
          </h5>
        </div>
        <div className="Badge__footer">
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
