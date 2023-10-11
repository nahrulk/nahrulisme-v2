import React from "react";
import Header from "./layout/Header";
import HomeSection from "./layout/section/HomeSection";
import LogoSection from "./layout/section/LogoSection";
import PopularSection from "./layout/section/PopularSection";

const Landing = () => {
  return (
    <>
      <Header />
      <main className="main">
        <HomeSection />
        <LogoSection />
        <PopularSection />
      </main>
    </>
  );
};

export default Landing;
