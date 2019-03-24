import { combineReducers } from "redux";
import projectReducer from "./Project";
import backlogReducer from "./Backlog";
import securityReducer from "./Security";

export default combineReducers({
  project: projectReducer,
  backlog: backlogReducer,
  security: securityReducer
});
