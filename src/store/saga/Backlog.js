import { put } from "redux-saga/effects";
import * as actions from "../action";
import axios from "axios";
import { checkJwt } from "../../shared/utility";

export function* addProjectTaskSaga(action) {
  yield put(actions.addProjectTaskStart());
  try {
    yield axios.post(
      `/api/backlog/${action.projectIdentifier}`,
      action.projectTask
    );
    const history = action.history;
    history.push(`/projectBoard/${action.projectIdentifier}`);
    yield put(actions.addProjectTaskSuccess({}));
  } catch (error) {
    yield put(actions.addProjectTaskFail(error.response.data));
  }
}

export function* getBacklogSaga(action) {
  checkJwt();
  yield put(actions.getBacklogStart());
  try {
    const response = yield axios.get(
      `/api/backlog/${action.projectIdentifier}`
    );
    yield put(actions.getBacklogSuccess(response.data));
  } catch (error) {
    yield put(actions.getBacklogFail(error.response.data));
  }
}

export function* getProjectTaskSaga(action) {
  checkJwt();
  yield put(actions.getProjectTaskStart());
  try {
    const response = yield axios.get(
      `/api/backlog/${action.backlogId}/${action.id}`
    );
    yield put(actions.getProjectTaskSuccess(response.data));
  } catch (error) {
    yield put(actions.getProjectTaskFail(error.response.data));
    const history = action.history;
    history.push("/dashboard");
  }
}

export function* updateProjectTaskSaga(action) {
  yield put(actions.updateProjectTaskStart({}));
  try {
    const response = yield axios.patch(
      `/api/backlog/${action.backlogId}/${action.id}`,
      action.projectTask
    );
    const history = action.history;
    history.push(`/projectBoard/${action.backlogId}`);
    yield put(actions.updateProjectTaskSuccess(response.data, {}));
  } catch (error) {
    yield put(actions.updateProjectTaskFail(error.response.data));
  }
}

export function* deleteProjectTaskSaga(action) {
  checkJwt();
  yield put(actions.deleteProjectTaskStart(false));
  try {
    yield axios.delete(`/api/backlog/${action.backlogId}/${action.id}`);
    yield put(actions.deleteProjectTaskSuccess(true));
  } catch (error) {
    yield put(actions.deleteProjectTaskFail(error.response.data));
  }
}
