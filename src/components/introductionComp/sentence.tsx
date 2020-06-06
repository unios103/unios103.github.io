import * as React from "react";
import "../../sass/components/introductionComp/sentence.sass";

const Sentence: React.FC = () => (
  <div className="description">
    <h3 className="description-title">こんにちは、unios103です。</h3>
    <p>お絵かきをして笛を吹いてプログラミングをする高専生です。</p>
    <p className="belongLinks">
      <a>#限界開発鯖</a>、<a>#kosen19s</a>
    </p>
  </div>
);

export default Sentence;
