import React from "react";
import "./styles/Badges.css";
import logoHeader from "../images/platziconf-logo.svg";
import Loading from "../components/Loading";
import PageError from "../components/PageError";
import BadgeHeader from "../components/BadgeHeader";

import BadgesListItem from "../components/BadgesListItem";
import { Link } from "react-router-dom";

import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();

    //setInterval(this.fetchData, 15000);
    // polling es una mala práctica esto es sólo para ejemplos didácticos
  }

  componentWillUnmount() {
    //clearInterval();
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
    if (this.state.loading === true && !this.state.data) {
      return <Loading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <BadgeHeader imgHeader={logoHeader} />
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
