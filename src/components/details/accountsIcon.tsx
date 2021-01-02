import * as React from "react";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accounts, AccountsType } from "./linkSet";
import "../../style/components/details/accountsIcon.scss";

type iconButtonType = {
  buttonType: string;
  accountLink: string;
};

type AccountType = {
  accountKey: keyof AccountsType;
};

const IconButton: FC<iconButtonType> = (props) => (
  <a
    href={props.accountLink}
    className={props.buttonType}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);

const Account: FC<AccountType> = ({ accountKey }) => {
  const account = Accounts[accountKey];
  return (
    <IconButton accountLink={account.url} buttonType={accountKey}>
      <FontAwesomeIcon className="account-icon" icon={account.icon} />
    </IconButton>
  );
};

export default Account;
