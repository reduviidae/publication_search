import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Components/Main";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default Routes;
