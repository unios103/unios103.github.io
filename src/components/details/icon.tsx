import * as React from "react";
import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../../sass/components/details/icon.sass";
import shun from "../../images/shun.jpg";
import yoshi from "../../images/yoshi.jpg";
import nasuru from "../../images/nasuru.jpg";

type WithIconType = {
  children: ReactNode;
};

type IconNameType = {
  icon: IconProp;
};

export const IconsImg: FC = () => (
  <div className="icons-wrapper">
    <div className="icons-expo">直近の3枚です。見てください！！</div>
    <img src={yoshi} alt="yoshi’s icon" className="icon" />
    <img src={shun} alt="shun’s icon" className="icon" />
    <img src={nasuru} alt="nasuru’s icon" className="icon" />
  </div>
);

export const WithIconSentence: FC<WithIconType> = ({
  children,
}: WithIconType) => <div className="with-icon-wrapper">{children}</div>;

const IconFont: FC<IconNameType> = ({ icon }: IconNameType) => (
  <p>
    <FontAwesomeIcon icon={icon} className="awesome-icon" />
  </p>
);

export default IconFont;
