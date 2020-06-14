import * as React from "react";
import Sentence from "./introductionComp/sentence";
import Works from "./introductionComp/works";
import Icons from "./introductionComp/icon";
import Accounts from "./introductionComp/accounts";
import "../sass/components/selfIntroduction.sass";

const IntroductionTop: React.FC = () => (
  <div className="intro">
    <Sentence />
    <Works />
    <Icons />
    <Accounts />
  </div>
);

export default IntroductionTop;
