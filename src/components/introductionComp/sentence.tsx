import * as React from "react";
import "../../sass/components/introductionComp/sentence.sass";

const Sentence: React.FC = () => (
  <div className="description">
    <h3 className="section-title">
      <span className="section-title-span">こんにちは、unios103です。</span>
    </h3>
    <p>お絵かきやプログラミング、笛を吹くことが好きな高専生です。</p>
    <p className="belongLinks">
      所属 ： <a>#限界開発鯖</a>・<a>#kosen19s</a>
    </p>
  </div>
);

export default Sentence;
