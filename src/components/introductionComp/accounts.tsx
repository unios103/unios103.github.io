import * as React from "react";
import { FC } from "react";
import SectionTitle from "../details/sectionTitle";
import { Instagram, Twitter, GitHub } from "../details/accountsIcon";
import "../../sass/components/introductionComp/accounts.sass";

const Accounts: FC = () => (
  <div className="accounts">
    <SectionTitle>アカウント</SectionTitle>
    <p className="follow-me">\\ Follow Me //</p>
    <div className="accounts-icon-wrapper">
      <Instagram />
      <Twitter />
      <GitHub />
    </div>
  </div>
);

export default Accounts;
