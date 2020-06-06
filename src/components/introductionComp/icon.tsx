import * as React from "react";
import "../../sass/components/introductionComp/icon.sass";
import shun from "../../images/shun.jpg";
import yoshi from "../../images/yoshi.jpg";

const Icons: React.FC = () => (
  <div className="about-icon">
    <div className="icons-text">
      <h3>アイコン描きます。</h3>
      <p>人型に限りますが、表情・服装・配色等のリクエストは承ります。</p>
      <p>無償です。（作成期間：1日〜2週間程度）</p>
    </div>
    <div className="icons-wrapper">
      <img src={yoshi} alt="yoshi’s icon" className="icon" />
      <img src={shun} alt="shun’s icon" className="icon" />
    </div>
  </div>
);

export default Icons;
