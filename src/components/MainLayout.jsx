import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Skills from "./components/Skills";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Outlet />
      <Footer />

      <ButtonGradient />
    </main>
  );
};

export default MainLayout;
