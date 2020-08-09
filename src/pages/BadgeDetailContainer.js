import React from "react";
import PageLoading from "../components/Loader";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "./BadgesDetails";

class BadgesDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.BadgeId);
      console.log(data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.data) {
      console.log(this.state.data);
      return <BadgeDetails badge={this.state.data} />;
    }
  }
}

export default BadgesDetailsContainer;
