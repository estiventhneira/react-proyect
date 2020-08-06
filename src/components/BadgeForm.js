import React from "react";
import "./styles/styles.css";

class BadgeForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="firstName"
              className="form-control"
              value={this.props.FormValues.FirstName}
            />
          </div>

          <div className="form-group">
            <label>Segundo Nombre</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="lastName"
              className="form-control"
              value={this.props.FormValues.LastName}
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
              value={this.props.FormValues.JobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="twitter"
              className="form-control"
              value={this.props.FormValues.Twitter}
            />
          </div>
          <button className="btn btn-primary">Guardar</button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
