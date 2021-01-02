import * as React from "react";
import { FC } from "react";
import "../style/components/header.scss";

const Header: FC = () => (
  <header className="header">
    <h1 className="title">蒸発するさかな</h1>
    <h2 className="sub">unios103’s portfolio</h2>
  </header>
);

export default Header;
