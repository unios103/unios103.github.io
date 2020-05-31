import * as React from "react";
import "../sass/components/selfIntroduction.sass";
import shun from "../images/shun.jpg";
import yoshi from "../images/yoshi.jpg";

const IntroductionTop: React.FC = () => (
  <div className="intro-top">
    <div className="description">
      <h3 className="description-title">こんにちは、unios103です。</h3>
      <p>お絵かきをして笛を吹いてプログラミングをする高専生です。</p>
      <p className="belongLinks">
        <a>#限界開発鯖</a>、<a>#kosen19s</a>
      </p>
    </div>
    <img src={yoshi} alt="yoshi’s icon" className="yoshi" />
    <img src={shun} alt="shun’s icon" className="shun" />
  </div>
);

export default IntroductionTop;
