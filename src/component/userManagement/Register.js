import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUser, clearErrors } from "../../store/action";

const Register = props => {
  const [username, setUsername] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    props.onClearErrors();
  }, []);

  useEffect(() => {
    if (props.validToken) props.history.push("/dashboard");
  }, [props.validToken]);

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };

  const fullNameChangeHandler = event => {
    setfullName(event.target.value);
  };

  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = event => {
    setConfirmPassword(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const user = {
      username: username,
      fullName: fullName,
      password: password,
      confirmPassword: confirmPassword
    };
    props.onCreateUser(user, props.history);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Account</p>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors && props.errors.fullName
                  })}
                  placeholder="Name"
                  name="fullName"
                  value={fullName}
                  onChange={event => fullNameChangeHandler(event)}
                />
                {props.errors && props.errors.fullName && (
                  <div className="invalid-feedback">
                    {props.errors && props.errors.fullName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors && props.errors.username
                  })}
                  placeholder="Email Address"
                  name="username"
                  value={username}
                  onChange={event => usernameChangeHandler(event)}
                />
                {props.errors && props.errors.username && (
                  <div className="invalid-feedback">
                    {props.errors && props.errors.username}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors && props.errors.password
                  })}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={event => passwordChangeHandler(event)}
                />
                {props.errors && props.errors.password && (
                  <div className="invalid-feedback">
                    {props.errors && props.errors.password}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors && props.errors.confirmPassword
                  })}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={event => confirmPasswordChangeHandler(event)}
                />
                {props.errors && props.errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {props.errors && props.errors.confirmPassword}
                  </div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
  onClearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.security.errors,
    validToken: state.security.validToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: (user, history) => dispatch(createUser(user, history)),
    onClearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
