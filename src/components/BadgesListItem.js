import React from "react";
import "./styles/BadgesListItem.css";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return "ho hay badges";
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((Badge) => {
          return (
            <li className="card mb-4 shadow-sm rounded" key={Badge.id}>
              <Link
                to={`/badges/${Badge.id}/edit`}
                className="text-reset text-decoration-none"
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <Gravatar email={Badge.email} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">
                        {Badge.firstName} {Badge.lastName}
                      </h3>
                      <span>Twitter: @{Badge.twitter}</span>
                      <h4>{Badge.jobTitle}</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesListItem;
