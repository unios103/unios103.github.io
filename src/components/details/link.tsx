import * as React from "react";
import { PropsWithChildren } from "react";

type LinkProps = {
  link?: string;
};

const Link: React.FC<LinkProps> = (props: PropsWithChildren<LinkProps>) => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export default Link;
