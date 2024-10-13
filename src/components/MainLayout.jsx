import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <motion.div
        className="progress-bar"
        style={{scaleY}}
      />
      <Header />
      <Outlet />
      <Footer />

      <ButtonGradient />
    </main>
  );
};

export default MainLayout;
