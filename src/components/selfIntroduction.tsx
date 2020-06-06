import * as React from "react";
import Sentence from "./introductionComp/sentence";
import "../sass/components/selfIntroduction.sass";
import Icons from "./introductionComp/icon";

const IntroductionTop: React.FC = () => (
  <div className="intro">
    <Sentence />
    <Icons />
  </div>
);

export default IntroductionTop;
