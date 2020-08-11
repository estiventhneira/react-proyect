import React from "react";
import "./styles/BadgesListItem.css";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filterBadges, setFilterBadges] = React.useState(badges);

  React.useMemo(() => {
    const results = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilterBadges(results);
  }, [badges, query]);

  return { query, setQuery, filterBadges };
}

function BadgesListItem(props) {
  const { query, setQuery, filterBadges } = useSearchBadges(props.badges);

  if (filterBadges === 0) {
    return (
      <div className="form-groups">
        <label htmlFor="">Filter Badges</label>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          type="text"
          className="form-control"
        />
      </div>
      <ul className="list-unstyled">
        {filterBadges.map((Badge) => {
          return (
            <li className="card mb-4 shadow-sm rounded" key={Badge.id}>
              <Link
                to={`/badges/${Badge.id}`}
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
    </React.Fragment>
  );
}

export default BadgesListItem;
