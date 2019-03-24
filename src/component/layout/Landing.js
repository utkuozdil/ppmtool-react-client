import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Landing = props => {
  useEffect(() => {
    if (props.validToken) props.history.push("/dashboard");
  }, [props.validToken]);

  return (
    <div className="landing">
      <div className="light-overlay landing-inner text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">
                Personal Project Management Tool
              </h1>
              <p className="lead">
                Create your account to join active projects or start your own
              </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-primary mr-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.security.errors,
    validToken: state.security.validToken
  };
};

export default connect(mapStateToProps)(Landing);
