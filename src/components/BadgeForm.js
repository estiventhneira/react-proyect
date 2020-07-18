import React from "react";
import "./styles/styles.css";

class BadgeForm extends React.Component {
  handleClick = (event) => {
    console.log("boton was clicked");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="FirstName"
              className="form-control"
              value={this.props.FormValues.FirstName}
            />
          </div>

          <div className="form-group">
            <label>Segundo Nombre</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="LastName"
              className="form-control"
              value={this.props.FormValues.LastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="Email"
              className="form-control"
              value={this.props.FormValues.Email}
            />
          </div>

          <div className="form-group">
            <label>Especialidad</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="JobTitle"
              className="form-control"
              value={this.props.FormValues.JobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="name"
              name="Twitter"
              className="form-control"
              value={this.props.FormValues.Twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
