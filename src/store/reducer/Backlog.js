import * as types from "../action/Types";
import { updateObject } from "../../shared/utility";

const initialState = {
  errors: {},
  projectTasks: [],
  projectTask: {},
  deleteSuccess: false
};

const backlogReducer = (state = initialState, action) => {
  if (action.type === types.ADD_PROJECT_TASK_START) {
    return state;
  } else if (action.type === types.ADD_PROJECT_TASK_SUCCESS) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.ADD_PROJECT_TASK_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.GET_BACKLOG_START) {
    return state;
  } else if (action.type === types.GET_BACKLOG_SUCCESS) {
    return updateObject(state, {
      projectTasks: action.projectTasks,
      errors: action.errors
    });
  } else if (action.type === types.GET_BACKLOG_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.GET_PROJECT_TASK_START) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.GET_PROJECT_TASK_SUCCESS) {
    return updateObject(state, { projectTask: action.projectTask });
  } else if (action.type === types.GET_PROJECT_TASK_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.UPDATE_PROJECT_TASK_START) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.UPDATE_PROJECT_TASK_SUCCESS) {
    return updateObject(state, {
      projectTask: action.projectTask,
      errors: action.errors
    });
  } else if (action.type === types.UPDATE_PROJECT_TASK_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.DELETE_PROJECT_TASK_START) {
    return updateObject(state, { deleteSuccess: action.deleteSuccess });
  } else if (action.type === types.DELETE_PROJECT_TASK_SUCCESS) {
    return updateObject(state, {
      projectTasks: state.projectTasks.filter(
        projectTask =>
          projectTask.projectIdentifier !== action.backlogId &&
          projectTask.id !== action.id
      ),
      deleteSuccess: action.deleteSuccess
    });
  } else if (action.type === types.DELETE_PROJECT_TASK_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else return state;
};

export default backlogReducer;
