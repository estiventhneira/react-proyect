import React, { Component } from "react";
import NavBar from "../components/NavBar";
import header from "../images/badge-header.svg";
import "../pages/styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

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
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.FirstName}
                lastName={this.state.form.LastName}
                jobTitle={this.state.form.JobTitle}
                twitterUser={this.state.form.Twitter}
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
      </div>
    );
  }
}

export default BadgesNew;
