import * as React from "react";
import { faPalette, faUserFriends } from "../details/importIcons";
import IconFont, { WithIconSentence, IconsImg } from "../details/icon";
import SectionTitle from "../details/sectionTitle";
import "../../sass/components/introductionComp/works.sass";

const Works: React.FC = () => (
  <div className="about-works">
    <SectionTitle>作ったもの。描いたもの。</SectionTitle>
    <WithIconSentence>
      <IconFont icon={faUserFriends} />
      <p>これまでに6枚のアイコンイラストを描かせていただきました。</p>
    </WithIconSentence>
    <IconsImg />
    <WithIconSentence>
      <IconFont icon={faPalette} />
      <p>主に女の子を描いています。（使用アプリ： ibisPaint X）</p>
    </WithIconSentence>
  </div>
);

export default Works;
