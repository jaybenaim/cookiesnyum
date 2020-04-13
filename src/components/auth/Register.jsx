import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import "../../assets/stylesheets/register.css";
import { TextInput } from "react-materialize";
class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const {
      fade,
      auth: { loading },
    } = this.props;
    return (
      fade !== "fade-background" && (
        <div className="container register-container">
          <div className="row">
            <div className="col s8 offset-s2">
              <a href="/dolcenada" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back
                to home
              </a>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Register</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Already have an account? <a href="/dolcenada/login">Log in</a>
                </p>
              </div>
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}

              <form onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <TextInput
                    id="name"
                    label="Name"
                    className={classnames("validate", {
                      invalid: errors.name,
                    })}
                    validate
                    value={this.state.name}
                    error={errors.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-field col s12">
                  <TextInput
                    email
                    id="email"
                    label="Email"
                    className={classnames("validate", {
                      invalid: errors.email,
                    })}
                    value={this.state.email}
                    validate
                    error={errors.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-field col s12">
                  <TextInput
                    password
                    id="password"
                    label="password"
                    className={classnames("validate", {
                      invalid: errors.password,
                    })}
                    validate
                    value={this.state.password}
                    error={errors.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="input-field col s12">
                  <TextInput
                    password
                    id="password2"
                    label="confirm password"
                    className={classnames("validate", {
                      invalid: errors.password2,
                    })}
                    validate
                    value={this.state.password2}
                    error={errors.password2}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                    }}
                    type="submit"
                    id="register"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
