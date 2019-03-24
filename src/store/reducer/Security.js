import * as types from "../action/Types";
import { updateObject } from "../../shared/utility";

const initialState = {
  errors: {},
  currentUser: {},
  validToken: false
};

const securityReducer = (state = initialState, action) => {
  if (action.type === types.CREATE_USER_START) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.CREATE_USER_SUCCESS) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.CREATE_USER_FAIL) {
    return updateObject(state, { errors: action.errors });
  } else if (action.type === types.LOGIN_USER_START) {
    return updateObject(state, { errors: {}, validToken: false });
  } else if (action.type === types.LOGIN_USER_SUCCESS) {
    return updateObject(state, {
      currentUser: action.currentUser,
      errors: action.errors,
      validToken: true
    });
  } else if (action.type === types.LOGIN_USER_FAIL) {
    return updateObject(state, { errors: action.errors, validToken: false });
  } else if (action.type === types.LOGOUT_USER_START) {
    return updateObject(state, { errors: {}, validToken: false });
  } else if (action.type === types.LOGOUT_USER_SUCCESS) {
    return updateObject(state, {
      errors: action.errors,
      validToken: true
    });
  } else if (action.type === types.LOGOUT_USER_FAIL) {
    return updateObject(state, { errors: action.errors, validToken: false });
  } else if (action.type === types.CLEAR_ERRORS) {
    return updateObject(state, { errors: {} });
  } else return state;
};

export default securityReducer;
