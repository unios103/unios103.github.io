import * as React from "react";
import Header from "../components/header";
import Introduction from "../components/selfIntroduction";
import Footer from "../components/footer";
import "../sass/page/home.sass";

const Home: React.FC = () => (
  <div className="home-wrapper">
    <Header />
    <Introduction />
    <Footer />
  </div>
);

export default Home;
