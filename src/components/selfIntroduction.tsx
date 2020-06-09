import * as React from "react";
import Sentence from "./introductionComp/sentence";
import Icons from "./introductionComp/icon";
import Works from "./introductionComp/works";
import "../sass/components/selfIntroduction.sass";

const IntroductionTop: React.FC = () => (
  <div className="intro">
    <Sentence />
    <Works />
    <Icons />
  </div>
);

export default IntroductionTop;
