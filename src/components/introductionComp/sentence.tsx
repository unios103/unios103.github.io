import * as React from "react";
import { faCode, faSchool, faPenNib } from "../details/importIcons";
import IconFont, { WithIconSentence } from "../details/icon";
import SectionTitle from "../details/sectionTitle";
import Link from "../details/link";
import {
  approversSite,
  approvers,
  tech,
  approversAccount,
} from "../details/url";
import "../../sass/components/introductionComp/sentence.sass";

const Sentence: React.FC = () => (
  <div>
    <SectionTitle>こんにちは、unios103です。</SectionTitle>
    <p>
      絵を描くことやデザイン、プログラミングなどが好きな高専生です。普段は限界開発鯖のメンバーの人たちと共同開発をしたり、勉強をしたりしています。
    </p>
    <p className="min-font">
      ※ 限界開発鯖 （<Link link={approversAccount}>@UFIApprovers</Link>） ：
      プログラミング・エンジニアリングで活動する高専生を中心としたコミュニティーです。（from
      : <Link link={approversSite}>approvers.dev</Link>）
    </p>
    <WithIconSentence>
      <IconFont icon={faSchool} />
      <p>
        <Link link={approvers}>#限界開発鯖</Link>・
        <Link link={tech}>#kosen19s</Link>
      </p>
    </WithIconSentence>
    <WithIconSentence>
      <IconFont icon={faCode} />
      <p>
        TypeScript・React・Sass・CSS・HTML (Canvas)・Go・Python・C++・Adobe
        XD・Figma
      </p>
    </WithIconSentence>
    <WithIconSentence>
      <IconFont icon={faPenNib} />
      <p>お絵かき・ピアノ・篠笛・和太鼓</p>
    </WithIconSentence>
  </div>
);

export default Sentence;
