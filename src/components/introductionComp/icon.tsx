import * as React from "react";
import SectionTitle from "../details/sectionTitle";
import "../../sass/components/introductionComp/icon.sass";

const Icons: React.FC = () => (
  <div className="about-icon">
    <div className="icons-text">
      <SectionTitle>アイコン描きます。</SectionTitle>
      <p>ご依頼・ご質問等があれば気軽にDM飛ばしてください！</p>
      <ul className="list">
        <li>無償です。</li>
        <li>人型に限りますが、表情・服装・配色等のリクエストは承ります。</li>
        <li>使用アプリは ibisPaint X になります。</li>
        <li>
          色鉛筆で描くことも可能です。こちらをご希望の際はお伝えください。
        </li>
        <li>作成には1日〜2週間程度かかります。</li>
        <li>
          お渡ししたイラストをTwitterやInstagram等で紹介する場合もあります。ご了承ください。
        </li>
      </ul>
    </div>
  </div>
);

export default Icons;
