import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/Home";
import Canvas from "./components/Canvas";
import "./sass/global.sass";
import "./sass/reset.sass";

ReactDOM.hydrate(
  <>
    <Canvas />
    <Page />
  </>,
  document.getElementById("root")
);
