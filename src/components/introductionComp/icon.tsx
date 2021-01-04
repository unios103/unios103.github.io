import * as React from "react";
import SectionTitle from "../details/sectionTitle";
import Link from "../details/link";
import { twitterI, use } from "../details/url";
import "../../sass/components/introductionComp/icon.sass";

const Icons: React.FC = () => (
  <div className="about-icon">
    <div className="icons-text">
      <SectionTitle>アイコン描きます。</SectionTitle>
      <p>
        ご依頼・ご質問等があれば <Link link={twitterI}>@unios103i</Link>{" "}
        まで気軽にDM飛ばしてください！
      </p>
      <ul className="list">
        <li>0円〜 （金額はご自由にお決めください）</li>
        <li>人型に限りますが、表情・服装・配色等のリクエストは承ります。</li>
        <li>
          色鉛筆で描くことも可能です。こちらをご希望の際はお伝えください。
        </li>
        <li>作成には1日〜1ヶ月程度かかります。</li>
        <li>
          お渡ししたイラストはTwitterやInstagram等で紹介させていただきます。ご了承ください。
        </li>
        <li>
          <Link link={use}>イラストの使用範囲について</Link>{" "}
          を併せてご覧ください。
        </li>
      </ul>
    </div>
  </div>
);

export default Icons;
