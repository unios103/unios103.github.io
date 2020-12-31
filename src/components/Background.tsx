import * as React from "react";
import { FC } from "react";

import "../style/components/background.scss";

const Background: FC = () => (
  <div className="background">
    <div className="line"></div>
    <div className="line thin"></div>
    <div className="line symmetry"></div>
  </div>
);

export default Background;
