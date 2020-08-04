import React, { Component } from "react";
import "../pages/styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import BadgeHeader from "../components/BadgeHeader";
import header from "../images/platziconf-logo.svg";

class BadgesNew extends Component {
  state = {
    form: {
      FirstName: "",
      LastName: "",
      JobTitle: "",
      Email: "",
      Twitter: "",
    },
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
    return (
      <React.Fragment>
        <BadgeHeader imgHeader={header} />

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.FirstName || "Primer Nombre"}
                lastName={this.state.form.LastName || "Segundo Nombre"}
                jobTitle={this.state.form.JobTitle || "Cargo"}
                twitterUser={this.state.form.Twitter || "Twitter"}
                AvatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                FormValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesNew;
