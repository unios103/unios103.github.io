import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/Home";

ReactDOM.hydrate(
  <>
    <Page />
  </>,
  document.getElementById("root")
);
