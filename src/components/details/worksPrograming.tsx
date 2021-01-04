import * as React from "react";
import { FC, ReactNode } from "react";
import Link from "./link";
import { Work } from "./importImg";
import {
  approversSite,
  approversSiteCode,
  canvasClock,
  provinDevs,
  daily,
  cocoda,
} from "./url";
import "../../sass/components/details/images.sass";

type childrenType = {
  children: ReactNode;
};

export const WithImgSection: FC<childrenType> = ({
  children,
}: childrenType) => <div className="img-section-wrapper">{children}</div>;

export const WorksProgramming: FC = () => (
  <div className="works-img">
    <div className="works-web-section">
      <img src={Work.great} alt="great image" className="works-web" />
      <div className="works-expo-text">
        <h4 className="works-expo-title">お祝いのアニメーション</h4>
        <p>
          しろくまがお祝いしてくれるアニメーションです。Figmaで作成しました。
        </p>
        <p>
          work : <Link link={daily}>DailyMotion #004</Link>
        </p>
        <p>
          cocoda : <Link link={cocoda}>unios103</Link>
        </p>
      </div>
    </div>
    <div className="works-web-section">
      <img src={Work.approvers} alt="approvers site" className="works-web" />
      <div className="works-expo-text">
        <h4 className="works-expo-title">限界開発鯖の公式サイト</h4>
        <p>
          限界開発鯖のメンバーと作成しました。Next.js や Sass を使用しています。
        </p>
        <p>
          site : <Link link={approversSite}>approvers.dev</Link>
        </p>
        <p>
          code : <Link link={approversSiteCode}>approvers.github.io</Link>
        </p>
      </div>
    </div>
    <div className="works-web-section">
      <img
        src={Work.provinDevs}
        alt="HackU 2020frontend"
        className="works-web"
      />
      <div className="works-expo-text">
        <h4 className="works-expo-title">ProvinDevs/2020frontend</h4>
        <p>HackU2020夏で作成した2.5次元黒板のフロントエンドです。</p>
        <p>
          code : <Link link={provinDevs}>ProvinDevs/2020frontend</Link>
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
        <p>
          code : <Link link={canvasClock}>canvas_clock</Link>
        </p>
      </div>
    </div>
  </div>
);
