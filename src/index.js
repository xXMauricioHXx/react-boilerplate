import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import Router from "./router";
import { Provider } from "react-redux";
import { enhancer } from "./enhancer";
import { rootReducer } from "./store/reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
