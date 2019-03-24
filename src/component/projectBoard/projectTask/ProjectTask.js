import React from "react";
import { Link } from "react-router-dom";
import { deleteProjectTask } from "../../../store/action";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProjectTask = props => {
  const deleteHandler = (backlogId, id) => {
    if (
      window.confirm(
        "Are you sure? This will delete the project task and all the data related to it"
      )
    ) {
      props.onDeleteProjectTask(backlogId, id);
    }
  };

  return (
    <div className="card mb-1 bg-light">
      <div
        className={
          props.projectTask.priority === 1
            ? "card-header text primary bg-danger text-light"
            : props.projectTask.priority === 2
            ? "card-header text primary bg-warning text-light"
            : "card-header text primary bg-info text-light"
        }
      >
        ID: {props.projectTask.projectSequence} -- Priority:{" "}
        {props.projectTask.priority === 1
          ? "HIGH"
          : props.projectTask.priority === 2
          ? "MEDIUM"
          : "LOW"}
      </div>
      <div className="card-body bg-light">
        <h5 className="card-title">{props.projectTask.summary}</h5>
        <p className="card-text text-truncate ">
          {props.projectTask.acceptanceCriteria}
        </p>
        <Link
          to={`/updateProjectTask/${props.projectTask.projectIdentifier}/${
            props.projectTask.projectSequence
          }`}
          className="btn btn-primary"
        >
          View / Update
        </Link>
        <button
          className="btn btn-danger ml-4"
          onClick={deleteHandler.bind(
            this,
            props.projectTask.projectIdentifier,
            props.projectTask.projectSequence
          )}
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

ProjectTask.propTypes = {
  onDeleteProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.backlog.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteProjectTask: (backlogId, id) =>
      dispatch(deleteProjectTask(backlogId, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectTask);
