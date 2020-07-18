import React from "react";
import "./styles/BadgesListItem.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((Badge) => {
          return (
            <li className="card mb-4 shadow-sm rounded" key={Badge.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={Badge.avatarUrl} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">
                      {Badge.firstName} {Badge.lastName}
                    </h3>
                    <span>
                      Twitter: <br /> @{Badge.twitter}
                    </span>
                    <h4>{Badge.jobTitle}</h4>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesListItem;
