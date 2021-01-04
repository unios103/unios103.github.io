import * as React from "react";
import * as ReactDOM from "react-dom";
import Page from "./page/home";
import Canvas from "./components/canvas";
import IsLoading from "./page/Loading";
import "./sass/global.sass";
import "./sass/reset.sass";

ReactDOM.hydrate(
  <>
    <IsLoading />
    <Canvas />
    <Page />
  </>,
  document.getElementById("root")
);
