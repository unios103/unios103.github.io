import * as React from "react";
import { faPalette, faUserFriends, faLaptop } from "../details/importIcons";
import { WithImgSection, WorksProgramming } from "../details/images";
import IconFont, {
  WithIconSentence,
  IconsImg,
  WorksImg,
} from "../details/icon";
import SectionTitle from "../details/sectionTitle";
import "../../sass/components/introductionComp/works.sass";

const Works: React.FC = () => (
  <div className="about-works">
    <SectionTitle>作ったもの。描いたもの。</SectionTitle>
    <WithIconSentence>
      <IconFont icon={faUserFriends} />
      <p>これまでに7枚のアイコンイラストを描かせていただきました。</p>
    </WithIconSentence>
    <IconsImg />
    <WithImgSection>
      <WithIconSentence>
        <IconFont icon={faPalette} />
        <p>女の子をよく描きます。（使用アプリ： ibisPaint X）</p>
      </WithIconSentence>
      <WorksImg />
    </WithImgSection>
    <WithImgSection>
      <WithIconSentence>
        <IconFont icon={faLaptop} />
        <p>これまでに作成したアプリ・サイトなど</p>
      </WithIconSentence>
      <WorksProgramming />
    </WithImgSection>
  </div>
);

export default Works;
