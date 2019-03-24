import * as types from "./Types";

export const addProjectTask = (projectIdentifier, projectTask, history) => {
  return {
    type: types.ADD_PROJECT_TASK,
    projectIdentifier: projectIdentifier,
    projectTask: projectTask,
    history: history
  };
};

export const addProjectTaskSuccess = errors => {
  return {
    type: types.ADD_PROJECT_TASK_SUCCESS,
    errors: errors
  };
};

export const addProjectTaskFail = errors => {
  return {
    type: types.ADD_PROJECT_TASK_FAIL,
    errors: errors
  };
};

export const addProjectTaskStart = () => {
  return {
    type: types.ADD_PROJECT_TASK_START
  };
};

export const getBacklog = projectIdentifier => {
  return {
    type: types.GET_BACKLOG,
    projectIdentifier: projectIdentifier
  };
};

export const getBacklogSuccess = projectTasks => {
  return {
    type: types.GET_BACKLOG_SUCCESS,
    projectTasks: projectTasks
  };
};

export const getBacklogFail = errors => {
  return {
    type: types.GET_BACKLOG_FAIL,
    errors: errors
  };
};

export const getBacklogStart = () => {
  return {
    type: types.GET_BACKLOG_START
  };
};

export const getProjectTask = (backlogId, id, history) => {
  return {
    type: types.GET_PROJECT_TASK,
    backlogId: backlogId,
    id: id,
    history: history
  };
};

export const getProjectTaskSuccess = projectTask => {
  return {
    type: types.GET_PROJECT_TASK_SUCCESS,
    projectTask: projectTask
  };
};

export const getProjectTaskFail = errors => {
  return {
    type: types.GET_PROJECT_TASK_FAIL,
    errors: errors
  };
};

export const getProjectTaskStart = () => {
  return {
    type: types.GET_PROJECT_TASK_START
  };
};

export const updateProjectTask = (backlogId, id, projectTask, history) => {
  return {
    type: types.UPDATE_PROJECT_TASK,
    backlogId: backlogId,
    id: id,
    projectTask: projectTask,
    history: history
  };
};

export const updateProjectTaskSuccess = (projectTask, errors) => {
  return {
    type: types.UPDATE_PROJECT_TASK_SUCCESS,
    projectTask: projectTask,
    errors: errors
  };
};

export const updateProjectTaskFail = errors => {
  return {
    type: types.UPDATE_PROJECT_TASK_FAIL,
    errors: errors
  };
};

export const updateProjectTaskStart = errors => {
  return {
    type: types.UPDATE_PROJECT_TASK_START,
    errors: errors
  };
};

export const deleteProjectTask = (backlogId, id) => {
  return {
    type: types.DELETE_PROJECT_TASK,
    backlogId: backlogId,
    id: id
  };
};

export const deleteProjectTaskSuccess = deleteSuccess => {
  return {
    type: types.DELETE_PROJECT_TASK_SUCCESS,
    deleteSuccess: deleteSuccess
  };
};

export const deleteProjectTaskFail = errors => {
  return {
    type: types.DELETE_PROJECT_TASK_FAIL,
    errors: errors
  };
};

export const deleteProjectTaskStart = errors => {
  return {
    type: types.DELETE_PROJECT_TASK_START,
    errors: errors
  };
};
