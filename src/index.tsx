import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "@reduxjs/toolkit";
import newsSage from "./modules/newsSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
import rootReducer from "./modules";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(newsSage);

root.render(
  <Provider store={store}>
    <App />,
  </Provider>,
);
