import classnames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/action/Project";

const AddProject = props => {
  const [projectName, setProjectName] = useState("");
  const [projectIdentifier, setProjectIdentifier] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const projectNameChangeHandler = event => {
    setProjectName(event.target.value);
  };

  const projectIdentifierChangeHandler = event => {
    setProjectIdentifier(event.target.value);
  };

  const descriptionChangeHandler = event => {
    setDescription(event.target.value);
  };

  const startDateChangeHandler = event => {
    setStartDate(event.target.value);
  };

  const endDateChangeHandler = event => {
    setEndDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const newProject = {
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      description: description,
      startDate: startDate,
      endDate: endDate
    };
    props.onCreateProject(newProject, props.history);
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Create Project form</h5>
            <hr />
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors.projectName
                  })}
                  placeholder="Project Name"
                  name="projectName"
                  value={projectName}
                  onChange={event => projectNameChangeHandler(event)}
                />
                {props.errors.projectName && (
                  <div className="invalid-feedback">
                    {props.errors.projectName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors.projectIdentifier
                  })}
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={projectIdentifier}
                  onChange={projectIdentifierChangeHandler}
                />
                {props.errors.projectIdentifier && (
                  <div className="invalid-feedback">
                    {props.errors.projectIdentifier}
                  </div>
                )}{" "}
              </div>
              <div className="form-group">
                <textarea
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": props.errors.description
                  })}
                  placeholder="Project Description"
                  name="description"
                  value={description}
                  onChange={descriptionChangeHandler}
                />
                {props.errors.description && (
                  <div className="invalid-feedback">
                    {props.errors.description}
                  </div>
                )}{" "}
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="startDate"
                  value={startDate}
                  onChange={startDateChangeHandler}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="endDate"
                  value={endDate}
                  onChange={endDateChangeHandler}
                />
              </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddProject.propTypes = {
  onCreateProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.project.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateProject: (project, history) =>
      dispatch(createProject(project, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProject);
