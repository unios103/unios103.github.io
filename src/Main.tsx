import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/Home";
import Background from "./components/Background";

import "./style/styles.scss";

ReactDOM.hydrate(
  <>
    <Background />
    <Page />
  </>,
  document.getElementById("root")
);
