import React from "react";
import Header from "../Header/Header";
import Promo from "../../components/Promo/Promo";
import NavTab from "../../components/NavTab/NavTab";
import AboutProject from "../../components/AboutProject/AboutProject";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
