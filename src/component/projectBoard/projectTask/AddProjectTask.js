import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProjectTask } from "../../../store/action";
import classnames from "classnames";

const AddProjectTask = props => {
  const [summary, setSummary] = useState("");
  const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState(0);
  const [dueDate, setDueDate] = useState("");

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
      summary: summary,
      acceptanceCriteria: acceptanceCriteria,
      status: status,
      dueDate: dueDate,
      priority: priority
    };
    props.onAddProjectTask(
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
              to={`/projectBoard/${props.match.params.id}`}
              className="btn btn-light"
            >
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">Add Project Task</h4>
            <p className="lead text-center">Project Name + Project Code</p>
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

AddProjectTask.propTypes = {
  onAddProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.backlog.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProjectTask: (projectIdentifier, projectTask, history) =>
      dispatch(addProjectTask(projectIdentifier, projectTask, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProjectTask);
