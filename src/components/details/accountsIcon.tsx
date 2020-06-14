import * as React from "react";
import { FC, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faGithub } from "./importIcons";
import { twitter, instagram, github } from "./url";
import "../../sass/components/details/accountsIcon.sass";

type iconButtonType = {
  buttonType: string;
  accountLink: string;
};

const IconButton: FC<iconButtonType> = (
  props: PropsWithChildren<iconButtonType>
) => (
  <a
    href={props.accountLink}
    className={props.buttonType}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);

export const Instagram: FC = () => (
  <IconButton accountLink={instagram} buttonType="instagram">
    <FontAwesomeIcon className="account-icon-instagram" icon={faInstagram} />
  </IconButton>
);

export const Twitter: FC = () => (
  <IconButton accountLink={twitter} buttonType="twitter">
    <FontAwesomeIcon className="account-icon-twitter" icon={faTwitter} />
  </IconButton>
);

export const GitHub: FC = () => (
  <IconButton accountLink={github} buttonType="github">
    <FontAwesomeIcon className="account-icon-github" icon={faGithub} />
  </IconButton>
);
