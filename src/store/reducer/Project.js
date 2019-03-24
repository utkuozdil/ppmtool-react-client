import * as types from "../action/Types";
import { updateObject } from "../../shared/utility";

const initialState = {
  errors: {},
  projects: [],
  singleProject: {},
  deleteSuccess: false
};

const projectReducer = (state = initialState, action) => {
  if (action.type === types.CREATE_PROJECT_START) {
    return state;
  } else if (action.type === types.CREATE_PROJECT_SUCCESS) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.CREATE_PROJECT_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.GET_PROJECTS_START) {
    return state;
  } else if (action.type === types.GET_PROJECTS_SUCCESS) {
    return updateObject(state, { projects: action.projects });
  } else if (action.type === types.GET_PROJECTS_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.GET_SINGLE_PROJECT_START) {
    return state;
  } else if (action.type === types.GET_SINGLE_PROJECT_SUCCESS) {
    return updateObject(state, { singleProject: action.singleProject });
  } else if (action.type === types.GET_SINGLE_PROJECT_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.DELETE_PROJECT_START) {
    return updateObject(state, { deleteSuccess: action.deleteSuccess });
  } else if (action.type === types.DELETE_PROJECT_SUCCESS) {
    return updateObject(state, {
      projects: state.projects.filter(
        project => project.projectIdentifier !== action.id
      ),
      deleteSuccess: action.deleteSuccess
    });
  } else if (action.type === types.DELETE_PROJECT_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else return state;
};

export default projectReducer;
