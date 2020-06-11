import * as React from "react";
import { FC, ReactNode } from "react";
import { approvers, clock } from "../details/importImg";
import "../../sass/components/details/images.sass";

type childrenType = {
  children: ReactNode;
};

export const WithImgSection: FC<childrenType> = ({
  children,
}: childrenType) => <div className="img-section-wrapper">{children}</div>;

export const WorksProgramming: FC = () => (
  <div className="img-wrapper">
    <img src={approvers} alt="approvers site" className="works-web" />
    <img src={clock} alt="clock app" className="works-web" />
  </div>
);
