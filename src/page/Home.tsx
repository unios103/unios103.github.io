import * as React from "react";
import Header from "../components/Header";
import Account from "../components/introduction/accounts";

import "../style/page/home.scss";

const Page: React.FC = () => (
  <div className="main">
    <Header />
    <div className="contents">
      <Account />
    </div>
  </div>
);

export default Page;
