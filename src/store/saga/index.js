import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  CREATE_PROJECT,
  GET_PROJECTS,
  GET_SINGLE_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT_TASK,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  UPDATE_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  CHECK_AUTHENTICATE
} from "../action/Types";
import {
  createProjectSaga,
  getProjectsSaga,
  getSingleProjectSaga,
  deleteProjectSaga
} from "./Project";
import {
  addProjectTaskSaga,
  getBacklogSaga,
  getProjectTaskSaga,
  updateProjectTaskSaga,
  deleteProjectTaskSaga
} from "./Backlog";
import {
  createUserSaga,
  loginUserSaga,
  logoutUserSaga,
  checkAuthenticateSaga
} from "./Security";

export function* watchProject() {
  yield takeLatest(CREATE_PROJECT, createProjectSaga);
  yield takeEvery(GET_PROJECTS, getProjectsSaga);
  yield takeEvery(GET_SINGLE_PROJECT, getSingleProjectSaga);
  yield takeLatest(DELETE_PROJECT, deleteProjectSaga);
}

export function* watchBacklog() {
  yield takeLatest(ADD_PROJECT_TASK, addProjectTaskSaga);
  yield takeEvery(GET_BACKLOG, getBacklogSaga);
  yield takeEvery(GET_PROJECT_TASK, getProjectTaskSaga);
  yield takeLatest(UPDATE_PROJECT_TASK, updateProjectTaskSaga);
  yield takeLatest(DELETE_PROJECT_TASK, deleteProjectTaskSaga);
}

export function* watchSecurity() {
  yield takeLatest(CREATE_USER, createUserSaga);
  yield takeLatest(LOGIN_USER, loginUserSaga);
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
  yield takeEvery(CHECK_AUTHENTICATE, checkAuthenticateSaga);
}
