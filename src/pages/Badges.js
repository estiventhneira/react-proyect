import React from "react";
import "./styles/Badges.css";
import logoHeader from "../images/badge-header.svg";

import BadgesListItem from "../components/BadgesListItem";
import { Link } from "react-router-dom";

import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading === true) {
      return "loading";
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={logoHeader}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" alt="New Badges" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badge__list">
            <div className="Badgess__container">
              <BadgesListItem badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
