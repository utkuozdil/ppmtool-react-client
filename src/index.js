import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import "./App.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducer";
import { watchBacklog, watchProject, watchSecurity } from "./store/saga";

let store;

const sagaMiddleware = createSagaMiddleware();

const reactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && reactReduxDevTools) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      reactReduxDevTools
    )
  );
} else
  store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchProject);
sagaMiddleware.run(watchBacklog);
sagaMiddleware.run(watchSecurity);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
