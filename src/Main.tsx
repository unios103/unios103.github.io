import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/Home";

import "./style/styles.scss";

ReactDOM.hydrate(
  <>
    <Page />
  </>,
  document.getElementById("root")
);
