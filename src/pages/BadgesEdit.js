import React, { Component } from "react";
import "../pages/styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import BadgeHeader from "../components/BadgeHeader";
import header from "../images/platziconf-logo.svg";
import api from "../api";
import Loader from "../components/Loader";

class BadgesEdit extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: "",
    },
  };

  valueId = this.props.match.params.BadgeId;

  componentDidMount() {
    console.log(this.valueId);
    this.fetchData(this.valueId);
  }

  fetchData = async (valueId) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(valueId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.valueId, this.state.form);
      this.setState({ loading: null });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: null, error: error });
      console.error(error);
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <BadgeHeader imgHeader={header} />

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "Primer Nombre"}
                lastName={this.state.form.lastName || "Segundo Nombre"}
                jobTitle={this.state.form.jobTitle || "Cargo"}
                twitterUser={this.state.form.twitter || "Twitter"}
                email={this.state.form.email}
              />
            </div>
            <div className="col">
              <h1>Edit Attendant</h1>

              <BadgeForm
                onChange={this.handleChange}
                FormValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesEdit;
