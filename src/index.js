import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import Router from "./router";
import { Provider } from "react-redux";
import { enhancer } from "./enhancer";
import { rootReducer } from "./store/reducers";
import { items } from "./nav-items";
import Nav from "./components/Nav";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="relative flex">
        <BrowserRouter>
          <div className="md:relative md:w-2/12 w-full">
            <Nav items={items} />
          </div>
          <div className="md:p-20 w-10/12">
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
