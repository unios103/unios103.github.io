import * as React from "react";
import { faCode, faSchool, faPenNib } from "../details/importIcons";
import IconFont, { WithIconSentence } from "../details/icon";
import SectionTitle from "../details/sectionTitle";
import Link from "../details/link";
import { approversSite, approvers, tech } from "../details/url";
import "../../sass/components/introductionComp/sentence.sass";

const Sentence: React.FC = () => (
  <div>
    <SectionTitle>こんにちは、unios103です。</SectionTitle>
    <p>
      お絵かきやプログラミング、笛を吹くことが好きな高専生です。普段は限界開発鯖（Discord鯖）の人たちと共同開発をしたり、勉強したりしています。
    </p>
    <p className="min-font">
      ※ 限界開発鯖 ： 限界高専生が限界状態で開発を行っているDiscord鯖です。
      （from : <Link link={approversSite}>approvers.dev</Link>）
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
      <p>TypeScript・React・HTML (Canvas)・CSS (Sass)・Scala</p>
    </WithIconSentence>
    <WithIconSentence>
      <IconFont icon={faPenNib} />
      <p>お絵かき・ピアノ・篠笛・和太鼓</p>
    </WithIconSentence>
  </div>
);

export default Sentence;
