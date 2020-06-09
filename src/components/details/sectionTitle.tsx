import * as React from "react";
import { ReactNode } from "react";
import "../../sass/components/details/sectionTitle.sass";

type PropsType = {
  children: ReactNode;
};

const SectionTitle: React.FC<PropsType> = ({ children }: PropsType) => (
  <h3 className="section-title">
    <span className="section-title-span">{children}</span>
  </h3>
);

export default SectionTitle;
