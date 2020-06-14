import * as React from "react";
import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core/index";
import "../../sass/components/details/icon.sass";
import {
  shun,
  yoshi,
  nasuru,
  noise,
  rabbit,
  fluffy,
  fox,
  hello,
} from "./importImg";

type WithIconType = {
  children: ReactNode;
};

type IconNameType = {
  icon: IconProp;
};

export const IconsImg: FC = () => (
  <div className="img-wrapper">
    <div className="icons-expo"></div>
    <img src={yoshi} alt="yoshi’s icon" className="icon" />
    <img src={shun} alt="shun’s icon" className="icon" />
    <img src={nasuru} alt="nasuru’s icon" className="icon" />
  </div>
);

export const WorksImg: FC = () => (
  <div className="img-wrapper">
    <img src={hello} alt="hello" className="works-images" />
    <img src={fluffy} alt="fluffy" className="works-images" />
    <img src={noise} alt="noise" className="works-images" />
    <img src={fox} alt="fox" className="works-images" />
    <img src={rabbit} alt="rabbit" className="works-images" />
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
