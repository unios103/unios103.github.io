/* eslint-disable react/prop-types */
import * as React from "react";
import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core/index";
import "../../sass/components/details/icon.sass";

type WithIconType = {
  children: ReactNode;
};

type IconNameType = {
  icon: IconProp;
};

type IconImgType = {
  image: any[];
  alt: string;
};

export const IconsImg: FC<IconImgType> = (props) => {
  return (
    <div className="img-wrapper">
      {props.image.map((img, k) => (
        <img src={img} alt={props.alt} className="icon" key={k} />
      ))}
    </div>
  );
};

export const WithIconSentence: FC<WithIconType> = ({ children }) => (
  <div className="with-icon-wrapper">{children}</div>
);

const IconFont: FC<IconNameType> = ({ icon }) => (
  <p>
    <FontAwesomeIcon icon={icon} className="awesome-icon" />
  </p>
);

export default IconFont;
