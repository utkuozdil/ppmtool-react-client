import { put } from "redux-saga/effects";
import * as actions from "../action";
import axios from "axios";
import { checkJwt } from "../../shared/utility";

export function* createProjectSaga(action) {
  yield put(actions.createProjectStart());
  try {
    yield axios.post("/api/project", action.project);
    const history = action.history;
    history.push("/dashboard");
    yield put(actions.createProjectSuccess({}));
  } catch (error) {
    yield put(actions.createProjectFail(error.response.data));
  }
}

export function* getProjectsSaga() {
  checkJwt();
  yield put(actions.getProjectsStart());
  try {
    const response = yield axios.get("/api/project/all");
    yield put(actions.getProjectsSuccess(response.data));
  } catch (error) {
    yield put(actions.getProjectsFail(error.response.data));
  }
}

export function* getSingleProjectSaga(action) {
  checkJwt();
  yield put(actions.getSingleProjectStart());
  try {
    const response = yield axios.get(`/api/project/${action.id}`);
    yield put(actions.getSingleProjectSuccess(response.data));
  } catch (error) {
    yield put(actions.getSingleProjectFail(error.response.data));
    const history = action.history;
    history.push("/dashboard");
  }
}

export function* deleteProjectSaga(action) {
  yield put(actions.deleteProjectStart(false));
  try {
    yield axios.delete(`/api/project/${action.id}`);
    yield put(actions.deleteProjectSuccess(true));
  } catch (error) {
    yield put(actions.deleteProjectFail(error.response.data));
  }
}
