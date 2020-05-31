import * as React from "react";
import "../sass/components/selfIntroduction.sass";
import icon from "../images/unios103.jpg";
import approvers from "../images/approvers.png";

const IntroductionTop: React.FC = () => (
  <div className="intro-top">
    <section className="description">
      <h3 className="description-title">こんにちは、unios103です。</h3>
      <p>お絵かきをして笛を吹いてプログラミングをする高専生です。</p>
      <p className="belongLinks">
        <a>#限界開発鯖</a>、<a>#kosen19s</a>
      </p>
    </section>
    <section className="illustration">
      <img src={icon} alt="unios103’s icon" className="icon" />
      <img src={approvers} alt="approvers" />
    </section>
  </div>
);

export default IntroductionTop;
