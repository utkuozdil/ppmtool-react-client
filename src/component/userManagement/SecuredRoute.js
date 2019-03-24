import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const SecuredRoute = ({ component: Component, validToken, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props =>
      validToken ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  validToken: state.security.validToken
});

export default connect(mapStateToProps)(SecuredRoute);
