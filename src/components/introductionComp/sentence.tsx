import * as React from "react";
import { faCode, faSchool, faPenNib } from "../details/importIcons";
import SectionTitle from "../details/sectionTitle";
import IconFont, { WithIconSentence } from "../details/icon";
import Link from "../details/link";
import "../../sass/components/introductionComp/sentence.sass";

const approvers =
  "https://twitter.com/search?q=%23限界開発鯖&src=recent_search_click";
const tech = "https://twitter.com/search?q=%23kosen19s&src=typed_query";

const Sentence: React.FC = () => (
  <div className="description">
    <SectionTitle>こんにちは、unios103です。</SectionTitle>
    <p>
      お絵かきやプログラミング、笛を吹くことが好きな高専生です。普段は限界開発鯖（Discord）の人たちと共同開発をしたり、勉強したりしています。
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
