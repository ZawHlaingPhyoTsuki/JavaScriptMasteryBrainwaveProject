import React from "react";
import { BottomLine } from "../components/design/Hero";
import { Gradient } from "../components/design/Roadmap";
import { BackgroundCircles } from "../components/design/Header";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Section from "../components/Section";
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <Section className={`h-screen overflow-hidden `}>
        <div className="flex h-full justify-center items-center relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <div className="">
            <h1 className="h1 mb-6">
              404 Page Not Found
              <br />
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing
              <br />
              Ut tempora labo elit.
            </p>
            <Link to={"/"} className=" mt-10   overflow-hidden">
              <Button className="w-52 ">
                Go Back To Home
              </Button>
            </Link>
          </div>
        </div>

        <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
          <BackgroundCircles />
        </MouseParallax>
        <Gradient />
        <BottomLine />
        <ButtonGradient />
      </Section>
    </main>
  );
};

export default NotFoundPage;
