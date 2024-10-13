import React from "react";

import Section from "../components/Section";
import { BackgroundCircles, Gradient } from "../components/design/Hero";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] pb-20"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative ">
        {/* <div className="relative  z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"></div> */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              {/* black card bg */}
              <div className="h-[40rem]  rounded-b-[0.9rem] overflow-hidden flex justify-center">
                <SignUpForm />
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
      </div>
    </Section>
  );
};

export default SignUpPage;
