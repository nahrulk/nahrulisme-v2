import React from "react";
import Header from "./layout/Header";
import HomeSection from "./layout/section/HomeSection";
import LogoSection from "./layout/section/LogoSection";

const Landing = () => {
  return (
    <>
      <Header />
      <main className="main">
        <HomeSection />
        <LogoSection />
      </main>
    </>
  );
};

export default Landing;
