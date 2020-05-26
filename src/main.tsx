import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/Home";
import "./sass/global.sass";
import "./sass/reset.sass";

ReactDOM.hydrate(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);
