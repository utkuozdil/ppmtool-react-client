import * as types from "./Types";

export const createUser = (user, history) => {
  return {
    type: types.CREATE_USER,
    user: user,
    history: history
  };
};

export const createUserSuccess = errors => {
  return {
    type: types.CREATE_USER_SUCCESS,
    errors: errors
  };
};

export const createUserFail = errors => {
  return {
    type: types.CREATE_USER_FAIL,
    errors: errors
  };
};

export const createUserStart = () => {
  return {
    type: types.CREATE_USER_START
  };
};

export const loginUser = loginRequest => {
  return {
    type: types.LOGIN_USER,
    loginRequest: loginRequest
  };
};

export const loginUserSuccess = (errors, currentUser) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    errors: errors,
    currentUser: currentUser
  };
};

export const loginUserFail = errors => {
  return {
    type: types.LOGIN_USER_FAIL,
    errors: errors
  };
};

export const loginUserStart = () => {
  return {
    type: types.LOGIN_USER_START
  };
};

export const logoutUser = () => {
  return {
    type: types.LOGOUT_USER
  };
};

export const logoutUserSuccess = errors => {
  return {
    type: types.LOGOUT_USER_SUCCESS,
    errors: errors
  };
};

export const logoutUserFail = errors => {
  return {
    type: types.LOGOUT_USER_FAIL,
    errors: errors
  };
};

export const logoutUserStart = () => {
  return {
    type: types.LOGOUT_USER_START
  };
};

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS
  };
};

export const checkAuthenticate = () => {
  return {
    type: types.CHECK_AUTHENTICATE
  };
};
