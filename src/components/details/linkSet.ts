import { faTwitter, faInstagram, faGithub } from "./importIcons";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type AccountType = {
  url: string;
  icon: IconDefinition;
};

export type AccountsType = {
  twitter: AccountType;
  instagram: AccountType;
  github: AccountType;
};

export const Accounts: AccountsType = {
  twitter: { url: "https://twitter.com/unios103", icon: faTwitter },
  instagram: { url: "https://www.instagram.com/unios103i/", icon: faInstagram },
  github: { url: "https://github.com/unios103", icon: faGithub },
};
