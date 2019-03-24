import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/Dashboard";
import Header from "./component/layout/Header";
import Landing from "./component/layout/Landing";
import AddProject from "./component/project/AddProject";
import UpdateProject from "./component/project/UpdateProject";
import ProjectBoard from "./component/projectBoard/ProjectBoard";
import AddProjectTask from "./component/projectBoard/projectTask/AddProjectTask";
import UpdateProjectTask from "./component/projectBoard/projectTask/UpdateProjectTask";
import Login from "./component/userManagement/Login";
import Register from "./component/userManagement/Register";
import { checkAuthenticate } from "./store/action";
import SecuredRoute from "./component/userManagement/SecuredRoute";

const App = props => {
  useEffect(() => {
    props.onCheckAuthenticate();
  }, [props.history]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute exact path="/addProject" component={AddProject} />
        <SecuredRoute
          exact
          path="/updateProject/:id"
          component={UpdateProject}
        />
        <SecuredRoute exact path="/projectBoard/:id" component={ProjectBoard} />
        <SecuredRoute
          exact
          path="/addProjectTask/:id"
          component={AddProjectTask}
        />
        <SecuredRoute
          exact
          path="/updateProjectTask/:backlogId/:id"
          component={UpdateProjectTask}
        />
      </Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
};

App.propTypes = {
  onCheckAuthenticate: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.security.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuthenticate: () => dispatch(checkAuthenticate())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
