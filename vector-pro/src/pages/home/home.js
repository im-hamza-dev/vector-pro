import React from "react";
import logo from "logo.svg";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p className="homeBrandName">Vektor Pro</p>
        <div className="homeRouteBtn">Lets start drawing!</div>
      </header>
    </div>
  );
};

export default Home;
