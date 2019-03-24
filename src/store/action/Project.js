import * as types from "./Types";

export const createProject = (project, history) => {
  return {
    type: types.CREATE_PROJECT,
    project: project,
    history: history
  };
};

export const createProjectSuccess = errors => {
  return {
    type: types.CREATE_PROJECT_SUCCESS,
    errors: errors
  };
};

export const createProjectFail = errors => {
  return {
    type: types.CREATE_PROJECT_FAIL,
    errors: errors
  };
};

export const createProjectStart = () => {
  return {
    type: types.CREATE_PROJECT_START
  };
};

export const getProjects = () => {
  return {
    type: types.GET_PROJECTS
  };
};

export const getProjectsSuccess = projects => {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    projects: projects
  };
};

export const getProjectsFail = errors => {
  return {
    type: types.GET_PROJECTS_FAIL,
    errors: errors
  };
};

export const getProjectsStart = () => {
  return {
    type: types.GET_PROJECTS_START
  };
};

export const getSingleProject = (id, history) => {
  return {
    type: types.GET_SINGLE_PROJECT,
    id: id,
    history: history
  };
};

export const getSingleProjectSuccess = singleProject => {
  return {
    type: types.GET_SINGLE_PROJECT_SUCCESS,
    singleProject: singleProject
  };
};

export const getSingleProjectFail = errors => {
  return {
    type: types.GET_SINGLE_PROJECT_FAIL,
    errors: errors
  };
};

export const getSingleProjectStart = () => {
  return {
    type: types.GET_SINGLE_PROJECT_START
  };
};

export const deleteProject = id => {
  return {
    type: types.DELETE_PROJECT,
    id: id
  };
};

export const deleteProjectSuccess = deleteSuccess => {
  return {
    type: types.DELETE_PROJECT_SUCCESS,
    deleteSuccess: deleteSuccess
  };
};

export const deleteProjectFail = errors => {
  return {
    type: types.DELETE_PROJECT_FAIL,
    errors: errors
  };
};

export const deleteProjectStart = () => {
  return {
    type: types.DELETE_PROJECT_START
  };
};
