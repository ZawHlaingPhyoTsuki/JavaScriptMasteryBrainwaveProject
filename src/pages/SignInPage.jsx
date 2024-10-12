import React from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { stars } from "../assets";
import Section from "../components/Section";

const SignInPage = () => {
  return (
    <Section className={"overflow-hidden"}>




      <div>
        Sign In Page
      </div>
      {/* <ScrollParallax isAbsolutelyPositioned> */}
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </MouseParallax>
      {/* </ScrollParallax> */}
    </Section>
  );
};

export default SignInPage;
