import React from "react";
import { Route } from "react-router";

import ThreadForm from "./forms/ThreadForm";
import Catalog from "./Catalog";
import App from "../App";

export default (
  <Route path="/" component={App}>
    <Route path="/threadForm" component={ThreadForm} />
  </Route>
);
