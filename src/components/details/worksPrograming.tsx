import * as React from "react";
import { FC, ReactNode } from "react";
import Link from "./link";
import { Work } from "./importImg";
import { approversSite, approversSiteCode, approversAccount } from "./url";
import "../../sass/components/details/images.sass";

type childrenType = {
  children: ReactNode;
};

export const WithImgSection: FC<childrenType> = ({
  children,
}: childrenType) => <div className="img-section-wrapper">{children}</div>;

export const WorksProgramming: FC = () => (
  <div className="works-img">
    <div className="works-web-section approvers">
      <img src={Work.approvers} alt="approvers site" className="works-web" />
      <div className="works-expo-text">
        <h4 className="works-expo-title">限界開発鯖の公式サイト</h4>
        <p>
          site : <Link link={approversSite}>approvers.dev</Link>
        </p>
        <p>
          account : <Link link={approversAccount}>@UFIApprovers</Link>
        </p>
        <p>
          code : <Link link={approversSiteCode}>approvers.github.io</Link>
        </p>
      </div>
    </div>
    <div className="works-web-section">
      <img src={Work.clock} alt="clock app" className="works-web" />
      <div className="works-expo-text">
        <h4 className="works-expo-title">Clock App</h4>
        <p>
          Canvas
          を使って作りました。サイズを変更可能にするなど、機能の改善をしていきたいです。
        </p>
      </div>
    </div>
  </div>
);
