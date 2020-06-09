import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/home";
import Canvas from "./components/canvas";
import "./sass/global.sass";
import "./sass/reset.sass";

ReactDOM.hydrate(
  <>
    <Canvas />
    <Page />
  </>,
  document.getElementById("root")
);
