import * as React from "react";
import Header from "../components/Header";
import IntroductionTop from "../components/selfIntroduction";
import "../sass/page/home.sass";

const Home: React.FC = () => (
  <div className="home-wrapper">
    <Header />
    <IntroductionTop />
  </div>
);

export default Home;
