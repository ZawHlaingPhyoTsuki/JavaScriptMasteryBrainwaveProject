import React, { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "../components/Button";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Section from "../components/Section";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../components/design/Hero";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import CompanyLogos from "../components/CompanyLogos";

const SignInPage = () => {
  const parallaxRef = useRef(null);

  return (
    // <div>
    //   <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"></div>
    //   <div className="h-screen relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
    //     <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
    //       <img
    //         src={heroBackground}
    //         className="w-full"
    //         width={1440}
    //         height={1800}
    //         alt="hero"
    //       />
    //     </div>
    //     <BackgroundCircles />
    //   </div>
    //   {/* <ScrollParallax isAbsolutelyPositioned> */}
    //   <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
    //     <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
    //       <img
    //         src={stars}
    //         className="w-full"
    //         width={950}
    //         height={400}
    //         alt="Stars"
    //       />
    //     </div>
    //   </MouseParallax>
    //   {/* </ScrollParallax> */}
    // </div>
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"></div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                

                

                

                
              </div>
            </div>

            <Gradient />
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default SignInPage;
