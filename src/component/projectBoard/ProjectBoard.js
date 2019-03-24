import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBacklog } from "../../store/action";

const ProjectBoard = props => {
  useEffect(() => {
    props.onGetBacklog(props.match.params.id);
  }, [props.deleteSuccess]);

  const errorHandler = (errors, projectTasks) => {
    if (projectTasks.length < 1) {
      if (errors && errors.projectNotFound) {
        return (
          <div className="alert alert-danger text-center" role="alert">
            {errors.projectNotFound}
          </div>
        );
      } else if (errors && errors.projectIdentifier) {
        return (
          <div className="alert alert-danger text-center" role="alert">
            {errors.projectIdentifier}
          </div>
        );
      } else {
        return (
          <div className="alert alert-info text-center" role="alert">
            No project task on this board
          </div>
        );
      }
    } else {
      return <Backlog projectTasks={props.projectTasks} />;
    }
  };

  let content = errorHandler(props.errors, props.projectTasks);

  return (
    <div className="container">
      <Link
        to={`/addProjectTask/${props.match.params.id}`}
        className="btn btn-primary mb-3"
      >
        <i className="fas fa-plus-circle"> Create Project Task</i>
      </Link>
      <br />
      <hr />
      {content}
    </div>
  );
};

ProjectBoard.propTypes = {
  onGetBacklog: PropTypes.func.isRequired,
  projectTasks: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.backlog.errors,
    projectTasks: state.backlog.projectTasks,
    deleteSuccess: state.backlog.deleteSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBacklog: projectIdentifier => dispatch(getBacklog(projectIdentifier))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectBoard);
