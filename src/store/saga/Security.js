import { put } from "redux-saga/effects";
import * as actions from "../action";
import axios from "axios";
import { setJwtToken } from "../../shared/utility";
import jwt_decode from "jwt-decode";

export function* createUserSaga(action) {
  yield put(actions.createUserStart({}));
  try {
    yield axios.post("/api/users/register", action.user);
    const history = action.history;
    history.push("/login");
    yield put(actions.createUserSuccess({}));
  } catch (error) {
    yield put(actions.createUserFail(error.response.data));
  }
}

export function* loginUserSaga(action) {
  yield put(actions.loginUserStart({}));
  try {
    const response = yield axios.post("/api/users/login", action.loginRequest);
    const token = response.data.token;
    localStorage.setItem("jwtToken", token);
    setJwtToken(token);
    const currentUser = jwt_decode(token);
    yield put(actions.loginUserSuccess({}, currentUser));
  } catch (error) {
    yield put(actions.loginUserFail(error.response.data));
  }
}

export function* logoutUserSaga(action) {
  yield put(actions.logoutUserStart({}));
  try {
    localStorage.removeItem("jwtToken");
    setJwtToken(false);
    yield put(actions.logoutUserSuccess({}));
  } catch (error) {
    yield put(actions.logoutUserFail(error.response.data));
  }
}

export function* checkAuthenticateSaga(action) {
  const jwtToken = localStorage.jwtToken;
  if (jwtToken) {
    setJwtToken(jwtToken);
    const currentUser = jwt_decode(jwtToken);
    yield put(actions.loginUserSuccess({}, currentUser));
    const currentTime = Date.now() / 1000;
    if (currentUser.exp < currentTime) {
      localStorage.removeItem("jwtToken");
      setJwtToken(false);
      window.location.href = "/";
    }
  }
}
