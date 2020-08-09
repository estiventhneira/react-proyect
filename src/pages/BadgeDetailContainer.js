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
    isModalOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  onCloseModal = (e) => {
    this.setState({ isModalOpen: false });
  };

  onOpenModal = (e) => {
    this.setState({ isModalOpen: true });
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.BadgeId);
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
      return (
        <BadgeDetails
          onCloseModal={this.onCloseModal}
          onOpenModal={this.onOpenModal}
          badge={this.state.data}
          modal={this.state.isModalOpen}
        />
      );
    }
  }
}

export default BadgesDetailsContainer;
