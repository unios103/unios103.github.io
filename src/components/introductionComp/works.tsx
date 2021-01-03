import * as React from "react";
import { faPalette, faUserFriends, faLaptop } from "../details/importIcons";
import { WithImgSection, WorksProgramming } from "../details/worksPrograming";
import IconFont, { WithIconSentence, IconsImg } from "../details/icon";
import { IconI, Illustration } from "../details/importImg";
import SectionTitle from "../details/sectionTitle";
import "../../sass/components/introductionComp/works.sass";

const Works: React.FC = () => (
  <div className="about-works">
    <SectionTitle>作ったもの。描いたもの。</SectionTitle>
    <WithIconSentence>
      <IconFont icon={faUserFriends} />
      <p>アイコンイラストを描かせていただきました。</p>
    </WithIconSentence>
    <IconsImg image={IconI} alt="icon" />
    <WithImgSection>
      <WithIconSentence>
        <IconFont icon={faPalette} />
        <p>女の子をよく描いています。</p>
      </WithIconSentence>
      <IconsImg image={Illustration} alt="Illustration" />
    </WithImgSection>
    <WithImgSection>
      <WithIconSentence>
        <IconFont icon={faLaptop} />
        <p>これまでに作成したもの。</p>
      </WithIconSentence>
      <WorksProgramming />
    </WithImgSection>
  </div>
);

export default Works;
