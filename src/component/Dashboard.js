import React, { useEffect } from "react";
import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../store/action/Project";
import PropTypes from "prop-types";

const Dashboard = props => {
  useEffect(() => {
    props.onGetProjects();
  }, [props.deleteSuccess]);

  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">Projects</h1>
            <br />
            <CreateProjectButton />
            <br />
            <hr />
            {props.projects.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  onGetProjects: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.project.errors,
    projects: state.project.projects,
    deleteSuccess: state.project.deleteSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProjects: () => dispatch(getProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
