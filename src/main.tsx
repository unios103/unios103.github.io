import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/home";
import Canvas from "./components/canvas";
import Loading from "./page/Loading";
import "./sass/global.sass";
import "./sass/reset.sass";

ReactDOM.hydrate(
  <>
    <Loading />
    <Canvas />
    <Page />
  </>,
  document.getElementById("root")
);
