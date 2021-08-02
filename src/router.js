import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./screens/Home";
import Detail from "./screens/Detail";

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/:id" exact component={Detail} />
  </Switch>
);

export default Router;
