import * as React from "react";
import { FC } from "react";

import "../sass/page/loading.sass";

const Loading: FC = () => (
  <div className="loading">
    <div className="outer">
      <div className="child"></div>
      <div className="child"></div>
      <div className="child"></div>
      <p className="text">Loading...</p>
    </div>
  </div>
);

export default Loading;
