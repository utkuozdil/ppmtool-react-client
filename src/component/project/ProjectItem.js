import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../store/action";

const ProjectItem = props => {
  const deleteHandler = id => {
    if (
      window.confirm(
        "Are you sure? This will delete the project and all the data related to it"
      )
    ) {
      props.onDeleteProject(id);
    }
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <span className="mx-auto">{props.project.projectIdentifier}</span>
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{props.project.projectName}</h3>
            <p>{props.project.description}</p>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <ul className="list-group">
              <Link to={`/projectBoard/${props.project.projectIdentifier}`}>
                <li className="list-group-item board">
                  <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                </li>
              </Link>
              <Link to={`/updateProject/${props.project.projectIdentifier}`}>
                <li className="list-group-item update">
                  <i className="fa fa-edit pr-1"> Update Project Info</i>
                </li>
              </Link>
              <li
                className="list-group-item delete"
                onClick={deleteHandler.bind(
                  this,
                  props.project.projectIdentifier
                )}
              >
                <i className="fa fa-minus-circle pr-1"> Delete Project</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  onDeleteProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.project.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteProject: id => dispatch(deleteProject(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectItem);
