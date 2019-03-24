import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../store/action";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    props.onClearErrors();
  }, []);

  useEffect(() => {
    if (props.validToken) props.history.push("/dashboard");
  }, [props.validToken]);

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const loginRequest = {
      username: username,
      password: password
    };
    props.onLoginUser(loginRequest);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <form onSubmit={submitHandler}>
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLoginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
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
    onLoginUser: loginRequest => dispatch(loginUser(loginRequest)),
    onClearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
