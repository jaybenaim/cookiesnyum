import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import "../../assets/stylesheets/login.css";
import { TextInput } from "react-materialize";
import { light } from "@material-ui/core/styles/createPalette";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    const {
      fade,
      auth: { loading },
    } = this.props;
    return (
      fade !== "fade-background" && (
        <div className="container login-container">
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
              <a href="/dolcenada" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back
                to home
              </a>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Login</b>
                </h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <a href="/register">Register</a>
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
                    email
                    id="email"
                    label="Email"
                    className={classnames("validate", {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                    value={this.state.email}
                    error={errors.email}
                    validate
                    onChange={this.onChange}
                  />

                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>{" "}
                <div className="input-field col s12">
                  <TextInput
                    password
                    id="password"
                    label="Password"
                    className={classnames("validate", {
                      invalid: errors.password || errors.passwordincorrect,
                    })}
                    error={errors.password}
                    value={this.state.password}
                    validate
                    onChange={this.onChange}
                  />
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      background: "#f6406f",
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3 "
                  >
                    Login
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
