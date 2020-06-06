import * as React from "react";
import Header from "../components/Header";
import Introduction from "../components/selfIntroduction";
import "../sass/page/home.sass";

const Home: React.FC = () => (
  <div className="home-wrapper">
    <Header />
    <Introduction />
  </div>
);

export default Home;
