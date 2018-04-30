import React from "react";
import { render } from "react-dom";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { epics } from "./epics";
import App from "./app";
import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    background: #f5f5f5;
  }
`;

const epicMiddleware = createEpicMiddleware(epics);
const store = createStore(reducers, applyMiddleware(epicMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
