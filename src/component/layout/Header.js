import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../store/action";
import { connect } from "react-redux";

const Header = props => {
  const logoutHandler = () => {
    props.onLogoutUser();
    window.location.href = "/";
  };

  let header = (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link " to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );

  if (props.validToken && props.currentUser)
    header = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-user-circle mr-1" />
              {props.currentUser.fullName}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Personal Project Management Tool
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {header}
      </div>
    </nav>
  );
};

Header.propTypes = {
  onLogoutUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.security.errors,
    currentUser: state.security.currentUser,
    validToken: state.security.validToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
