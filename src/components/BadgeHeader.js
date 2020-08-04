import React, { Component } from "react";

class BadgeHeader extends Component {
  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo new-header"
                src={this.props.imgHeader}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeHeader;
