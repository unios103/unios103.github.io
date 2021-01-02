import * as React from "react";
import { FC } from "react";
import Account from "../details/accountsIcon";
import "../../style/components/introduction/accounts.scss";

const Accounts: FC = () => (
  <div className="accounts">
    <h3 className="section-title">アカウント</h3>
    <p className="follow-me">\\ Follow Me //</p>
    <div className="accounts-icon-wrapper">
      <Account accountKey={"instagram"} />
      <Account accountKey={"twitter"} />
      <Account accountKey={"github"} />
    </div>
  </div>
);

export default Accounts;
