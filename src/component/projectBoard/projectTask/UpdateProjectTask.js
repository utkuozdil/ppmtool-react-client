import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProjectTask, updateProjectTask } from "../../../store/action";
import PropTypes from "prop-types";

const UpdateProjectTask = props => {
  const [summary, setSummary] = useState("");
  const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState(0);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    props.onGetProjectTask(
      props.match.params.backlogId,
      props.match.params.id,
      props.history
    );
  }, []);

  useEffect(() => {
    if (props.projectTask.summary != null)
      setSummary(props.projectTask.summary);
  }, [props.projectTask.summary]);

  useEffect(() => {
    if (props.projectTask.acceptanceCriteria != null)
      setAcceptanceCriteria(props.projectTask.acceptanceCriteria);
  }, [props.projectTask.acceptanceCriteria]);

  useEffect(() => {
    if (props.projectTask.status != null) setStatus(props.projectTask.status);
  }, [props.projectTask.status]);

  useEffect(() => {
    if (props.projectTask.priority != null)
      setPriority(props.projectTask.priority);
  }, [props.projectTask.priority]);

  useEffect(() => {
    if (props.projectTask.dueDate != null)
      setDueDate(props.projectTask.dueDate);
  }, [props.projectTask.dueDate]);

  const summaryChangeHandler = event => {
    setSummary(event.target.value);
  };

  const acceptanceCriteriaChangeHandler = event => {
    setAcceptanceCriteria(event.target.value);
  };

  const statusChangeHandler = event => {
    setStatus(event.target.value);
  };

  const priorityChangeHandler = event => {
    setPriority(event.target.value);
  };

  const dueDateChangeHandler = event => {
    setDueDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const newProjectTask = {
      id: props.projectTask.id,
      summary: summary,
      acceptanceCriteria: acceptanceCriteria,
      status: status,
      dueDate: dueDate,
      priority: priority
    };
    props.onUpdateProjectTask(
      props.match.params.backlogId,
      props.match.params.id,
      newProjectTask,
      props.history
    );
  };

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link
              to={`/projectBoard/${props.match.params.backlogId}`}
              className="btn btn-light"
            >
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">Update Project Task</h4>
            <p className="lead text-center">
              Project Name: {props.projectTask.projectIdentifier} | Project
              Code: {props.projectTask.projectSequence}
            </p>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors && props.errors.summary
                  })}
                  name="summary"
                  placeholder="Project Task summary"
                  value={summary}
                  onChange={event => summaryChangeHandler(event)}
                />
                {props.errors && props.errors.summary && (
                  <div className="invalid-feedback">
                    {props.errors && props.errors.summary}
                  </div>
                )}
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                  value={acceptanceCriteria}
                  onChange={event => acceptanceCriteriaChangeHandler(event)}
                />
              </div>
              <h6>Due Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="dueDate"
                  value={dueDate}
                  onChange={event => dueDateChangeHandler(event)}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  value={priority}
                  onChange={event => priorityChangeHandler(event)}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="status"
                  value={status}
                  onChange={event => statusChangeHandler(event)}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UpdateProjectTask.propTypes = {
  onGetProjectTask: PropTypes.func.isRequired,
  projectTask: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.backlog.errors,
    projectTask: state.backlog.projectTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProjectTask: (backlogId, id, history) =>
      dispatch(getProjectTask(backlogId, id, history)),
    onUpdateProjectTask: (backlogId, id, projectTask, history) =>
      dispatch(updateProjectTask(backlogId, id, projectTask, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProjectTask);
