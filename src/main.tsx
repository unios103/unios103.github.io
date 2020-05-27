import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/Home";
import Canvas from "./components/Canvas";
import "./sass/global.sass";
import "./sass/reset.sass";

ReactDOM.hydrate(
  <React.StrictMode>
    <Page />
    <Canvas />
  </React.StrictMode>,
  document.getElementById("root")
);
