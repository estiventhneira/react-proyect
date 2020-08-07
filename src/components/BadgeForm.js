import React from "react";
import "./styles/styles.css";

class BadgeForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="firstName"
              className="form-control"
              value={this.props.FormValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Segundo Nombre</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="lastName"
              className="form-control"
              value={this.props.FormValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="email"
              className="form-control"
              value={this.props.FormValues.email}
            />
          </div>

          <div className="form-group">
            <label>Especialidad</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="jobTitle"
              className="form-control"
              value={this.props.FormValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="twitter"
              className="form-control"
              value={this.props.FormValues.twitter}
            />
          </div>
          <button className="btn btn-primary">Guardar</button>

          {this.props.error && <p>H{this.props.error.message}</p>}
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
